# Full-Stack Authentication System — Angular Frontend 🎨

A modern, responsive Single Page Application (SPA) built with **Angular 21**. This frontend communicates with a live Node.js/Express API to provide a seamless user authentication experience.

## 🔗 Live Links
- **Live Application:** [https://garcia-full-stack-authentication-system.vercel.app](https://garcia-full-stack-authentication-system.vercel.app)
- **Backend API:** [https://full-stack-authentication-system-u3yx.onrender.com](https://full-stack-authentication-system-u3yx.onrender.com)

## 🛠 Tech Stack
- **Framework:** Angular 21
- **Styling:** Less / Bootstrap
- **Deployment:** Vercel (SPA mode)
- **Authentication:** JWT (In-memory) + Refresh Tokens (HTTP-only Cookies)

## ✨ Key Features
- **User Dashboard:** Profile management and account details.
- **Admin Panel:** Restricted area for managing system accounts.
- **Auth Guards:** Protection of private routes from unauthenticated access.
- **HTTP Interceptors:** Automatic token injection and error handling.
- **Verification Flow:** Seamless handling of email verification links.

## ⚙️ Configuration
- **Production URL:** Configured in `src/environments/environment.prod.ts`.
- **SPA Routing:** Managed via `vercel.json` for seamless deep-linking.

## 🚀 Local Setup
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Run `npm install`.
4. Run `ng serve` to start the local dev server at `http://localhost:4200`.

---
*Developed for the Final Examination - Full Stack Development.*
