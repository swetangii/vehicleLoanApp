# Vehicle Loan Application

![Maintained by swetangii](https://img.shields.io/badge/maintained%20by-swetangii-blue)

A full-stack web application for managing vehicle loans, customer applications, loan approvals, and EMI tracking. Built with **React** on the frontend and **Node.js / Express / MongoDB** on the backend.

---

## 🌟 Key Features

- **User Authentication**: Secure Login and Registration with JWT authentication & password hashing.
- **Loan Applications**: Apply for vehicle loans with interactive calculator and document uploads.
- **Loan Management**: Admin & User dashboard to track loan status (Pending, Approved, Rejected).
- **EMI & Repayment Schedule**: Real-time calculation of EMI, interest rates, and loan schedules.
- **RESTful API**: Robust Express.js backend with MongoDB Mongoose schemas and Swagger API documentation.

---

## 🛠️ Tech Stack

### Frontend (`/reactapp`)
- **React 18**, **React Router v6**, **Redux Toolkit**
- **Bootstrap 5**, **Lucide Icons**
- **Formik & Yup** for form validation
- **Axios** for API requests

### Backend (`/nodeapp`)
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose**
- **JSON Web Tokens (JWT)** & **Bcrypt**
- **Jest & Supertest** for unit & integration testing
- **Swagger UI** for API documentation

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or MongoDB Atlas)

### Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/swetangii/vehicleLoanApp.git
   cd vehicleLoanApp
   ```

2. **Backend Setup (`nodeapp`):**
   ```bash
   cd nodeapp
   npm install
   npm start
   ```

3. **Frontend Setup (`reactapp`):**
   ```bash
   cd ../reactapp
   npm install
   npm start
   ```

---

## 📄 License
This project is open-source under the MIT License.
