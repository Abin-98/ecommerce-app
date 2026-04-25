# 🛒 MERN eCommerce Website

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635bff?logo=stripe)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-darkblue?logo=razorpay)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)


A full-stack eCommerce application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and deployed on **Vercel**.  
This project demonstrates how to build and deploy a modern online store with product browsing, cart management, checkout, and admin dashboard functionality.

sample login details: 
Email: user.gssde@gmail.com
Password: qwerty123

---

## 🚀 Features

### User Side
- Browse and explore products
- Filter and sort products
- Select product variants (e.g., size)
- Add products to cart
- Place orders with delivery address
- Payment options:
  - Cash on Delivery (COD)
  - Online payments via **Stripe** and **Razorpay**

### Admin Dashboard
- Upload new products
- Delete products
- View and manage all products in the store
- Monitor customer orders

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, TailwindCSS, Axios, React Router, React Toastify  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Payments:** Stripe, Razorpay  
- **Deployment:** Vercel  

---

## 📂 Project Structure
📦 ecommerce-app
├── 📂 backend
│   ├── 📂 controllers        # Business logic (products, orders, users)
│   ├── 📂 models             # Mongoose schemas (Product, User, Order)
│   ├── 📂 routes             # API endpoints (auth, products, orders, payments)
│   ├── 📂 middleware         # Auth, error handling
│   ├── 📂 config             # DB connection, Stripe/Razorpay setup
│   ├── server.js             # Backend entry point
│   └── package.json          # Backend dependencies
│
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components     # Reusable UI components
│   │   ├── 📂 pages          # Page-level views (Home, Cart, Checkout, Admin)
│   │   ├── 📂 routes         # React Router setup
│   │   ├── 📂 context        # Global state (cart, auth)
│   │   ├── 📂 services       # Axios API calls
│   │   ├── App.jsx           # Root component
│   │   └── main.jsx          # Entry point
│   ├── 📂 public             # Static assets
│   └── package.json          # Frontend dependencies
│
├── .env                      # Environment variables (Mongo URI, API keys)
├── vercel.json               # Vercel deployment config
├── README.md                 # Documentation
└── package.json              # Root config (optional if split frontend/backend)

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app

2. Backend setup
cd backend
npm install
npm run server

- Add your environment variables in .env (MongoDB URI, Stripe keys, Razorpay keys, etc.)

3. Frontend setup
cd frontend
npm install
npm run dev

- Configure VITE_BACKEND_URL in .env to point to your backend server.

4. Build & Deploy
- Frontend deployed on Vercel
- Backend can be hosted on services like Render, Railway, or Vercel serverless functions



🌐 Live Demo
👉 View Project on Vercel 
Ecommerce Main page - https://forever-frontend-six-sage.vercel.app/
Admin Panel - https://forever-admin-panel-delta.vercel.app/


📸 Screenshots
- Homepage with product listing
- <img width="1912" height="865" alt="image" src="https://github.com/user-attachments/assets/c999f33c-5de4-4e91-ab71-c8975f945440" />

- <img width="1901" height="869" alt="image" src="https://github.com/user-attachments/assets/b7357711-ae48-4b7b-9627-316bf3d49b80" />

- Cart & Checkout flow
- <img width="1914" height="866" alt="image" src="https://github.com/user-attachments/assets/4b1d70e7-5ddf-40d9-8e44-9996285ac982" />
<img width="1904" height="874" alt="image" src="https://github.com/user-attachments/assets/ea763f87-7b58-4dec-afe9-d53ac8667c57" />


- Admin dashboard
- <img width="1900" height="870" alt="image" src="https://github.com/user-attachments/assets/47f48bec-d19d-4ab8-ab17-e0e354329dcd" />
<img width="1896" height="856" alt="image" src="https://github.com/user-attachments/assets/1e5d6854-1380-494b-982e-e370bd317f4c" />

