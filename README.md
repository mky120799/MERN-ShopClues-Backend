# ShopClues E-commerce Clone

Developed a full-stack E-commerce platform (ShopClues Clone) with MERN stack, featuring authentication, cart, checkout, admin management, Stripe payments, and email workflows. Implemented sorting, filtering, and pagination with MongoDB/Mongoose. Deployed frontend on Vercel, backend on Render, and database on MongoDB Atlas, following CI/CD and environment variable practices for production readiness.

## Deployments  

The complete project i.e., frontend and backend is hosted on Render to avoid security and CORS issues.  

**Complete Application** 👉 [mern-shopclues-project.onrender.com](https://mern-shopclues-project.onrender.com)  

## Table of Contents  

1. [Overview](#overview)  
2. [Technologies Used](#technologies-used)  
3. [Installation](#installation)  
4. [Features](#features)  
5. [Folder Structure](#folder-structure)  
6. [Deployment](#deployment)  
7. [Acknowledgments](#acknowledgments)  
8. [Project History](#project-history)  
9. [Contributors](#contributors)  
10. [License](#license)


# 🛒 MERN ShopClues Clone  

A full-stack **E-commerce web application** built with the **MERN stack** that replicates core features of platforms like ShopClues.  
It provides a seamless shopping experience with secure authentication, payments, admin panel, and real-time order management.  

---

## 🚀 Overview  
This project is a **MERN Stack E-commerce platform** where users can:  
- Browse products with sorting, filtering, and pagination.  
- Add items to the cart and proceed with checkout.  
- Make secure payments using **Stripe** or opt for **Cash on Delivery**.  
- Manage profiles, orders, and addresses.  

Admins can:  
- Add/Edit/Delete products.  
- Manage customer orders.  
- View sales history.  

The project demonstrates **industry-level architecture** with authentication, database management, and deployment.  

---

## 🛠 Technologies Used  

- **Frontend**: React 18, Redux Toolkit (Async Thunk), React Router v6, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas (Cloud DB), Mongoose v7 (ODM)  
- **Authentication**: Passport.js (Local + JWT Strategies)  
- **Payments**: Stripe (Payment Intents API)  
- **Email Services**: Nodemailer (Gmail SMTP)  
- **Testing**: JSON-server (for frontend testing before API integration)  
- **Deployment**: Render (Full App), Vercel (earlier deployments)  

---

## ⚙️ Installation  

### 1. Clone the repository  
```bash
git clone https://github.com/your-username/mern-shopclues-clone.git
cd mern-shopclues-clone
```

### 2. Install dependencies
```bash
npm install
```
