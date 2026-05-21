import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'edit.component.html', standalone: false })
export class EditComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        const account = this.accountService.accountValue;
        
        this.form = this.formBuilder.group({
            firstName: [account?.firstName, Validators.required],
            lastName: [account?.lastName, Validators.required],
            password: ['', [Validators.minLength(6)]],
            confirmPassword: ['']
        }, {
            validators: this.mustMatch('password', 'confirmPassword')
        });
    }

    // Convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // Reset alerts on submit
        this.alertService.clear();

        // Stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.updateProfile();
    }

    private updateProfile() {
        const userId = this.accountService.accountValue?.id;
        if (userId === undefined) {
            this.alertService.error('User session not found');
            return;
        }

        this.accountService.update(userId, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Profile updated successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['/home']);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    // Custom validator to check that two fields match
    mustMatch(controlName: string, matchingControlName: string) {
        return (group: AbstractControl) => {
            const control = group.get(controlName);
            const matchingControl = group.get(matchingControlName);

            if (!control || !matchingControl) return null;

            if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
                return null;
            }

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
            return null;
        };
    }
}
