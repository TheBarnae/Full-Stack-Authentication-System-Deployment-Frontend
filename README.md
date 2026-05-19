# 🔐 Robust Auth Engine (Node.js Backend)

A high-performance, secure backend API serving as the backbone for the Garcia Full-Stack Authentication System. Built with **Node.js**, **Express**, and **MySQL**, this system implements industry-standard security practices to ensure data integrity and user safety.

## 🚀 Live Environment
- **API Base URL:** [https://full-stack-authentication-system-u3yx.onrender.com](https://full-stack-authentication-system-u3yx.onrender.com)
- **Interactive Docs:** [https://full-stack-authentication-system-u3yx.onrender.com/api-docs](https://full-stack-authentication-system-u3yx.onrender.com/api-docs)

## 🛡️ Key Security Features
- **JWT & Refresh Tokens:** Secure session management using short-lived access tokens and secure HTTP-only refresh cookies.
- **RBAC (Role-Based Access Control):** Granular permissions for `Admin` and `User` accounts.
- **Email Verification:** Required account activation via Brevo API integration.
- **Password Hashing:** Industry-standard hashing via `bcryptjs`.
- **CORS Restriction:** Strict origin matching to protect against cross-site attacks.

## 🛠️ Technical Stack
- **Runtime:** Node.js v20+
- **Framework:** Express.js
- **Database:** MySQL (Hosted on Railway)
- **ORM:** Sequelize
- **Mailing:** Brevo (Sendinblue) API
- **Documentation:** Swagger / OpenAPI 3.0

## 📂 Project Structure
```text
src/
├── controllers/    # API Logic & Request Handling
├── _helpers/        # Database & Email Utilities
├── middleware/     # Auth Guards & Validation
├── models/         # Sequelize Data Schemas
└── routes/         # Express Route Definitions
```

## ⚙️ How to Setup (Local)
1. **Clone & Install:**
   ```bash
   npm install
   ```
2. **Environment Configuration:**
   Create a `.env` or update `config.json` with your MySQL credentials and Brevo API key.
3. **Database Sync:**
   The app will automatically sync models with the database on startup.
4. **Launch:**
   ```bash
   npm start
   ```

---
*Developed as part of the Integrated Programming Finals - Project "SecureAuth"*
