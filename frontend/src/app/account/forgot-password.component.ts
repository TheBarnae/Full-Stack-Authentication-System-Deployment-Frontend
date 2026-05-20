import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'forgot-password.component.html', standalone: false })
export class ForgotPasswordComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    successMessage = '';
    errorMessage = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        this.successMessage = '';
        this.errorMessage = '';
        this.alertService.clear();

        if (this.form.invalid) return;

        this.loading = true;

        // Increased timeout to 30s for slower servers
        const timeout = setTimeout(() => {
            if (this.loading) {
                this.loading = false;
                this.successMessage = 'If this email exists, password reset instructions have been sent.';
                this.alertService.success(this.successMessage);
                this.router.navigate(['../login'], { relativeTo: this.route });
            }
        }, 30000);

        this.accountService.forgotPassword(this.f['email'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                    clearTimeout(timeout);
                    this.loading = false;
                    this.successMessage = 'Please check your email for password reset instructions.';
                    this.alertService.success(this.successMessage, { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    clearTimeout(timeout);
                    this.loading = false;
                    this.errorMessage = error;
                    this.alertService.error(error);
                }
            });
    }
}