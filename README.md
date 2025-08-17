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

### 3. Environment Variables
```bash
PORT=8080

MONGODB_URL=your_mongodb_connection_string
SESSION_KEY=your_session_secret_key
JWT_SECRET_KEY=your_jwt_secret_key
STRIPE_SERVER_KEY=your_stripe_secret_key
ENDPOINT_SECRET=your_stripe_webhook_secret
MAIL_PASSWORD=your_gmail_app_password
```

### 4. Run the app locally
```bash
npm run dev
```

## ✨ Features
	•	🛍 E-commerce Core – Products list, details, cart, checkout
	•	🔐 Authentication – Passport.js with JWT for secure sessions
	•	💳 Payments – Stripe Integration (Credit/Debit Cards)
	•	📧 Email Services – Order confirmation + password reset
	•	🛠 Admin Panel – Manage products & orders
	•	⚡ Optimized Queries – Sorting, Filtering, Pagination with Mongoose
	•	👤 User Profile – Order history, saved addresses
	•	📱 Responsive Design – Built with Tailwind CSS

 ## 📂 Folder Structure
 #### Frontend Folder Structure
 ```bash



/Users/mky1207/Desktop/MERN-ShopClues-Frontend/
├─] .DS_Store (ignored)
├── .gitignore
├── README.md
├── data.json
├─] dist/ (ignored)
├── eslint.config.js
├── index.html
├─] node_modules/ (ignored)
├── package-lock.json
├── package.json
├── public/
│   └── 1220351_shopclues_ecommerce_shopping_icon.svg
├── src/
│   ├── .DS_Store
│   ├── App.css
│   ├── App.jsx
│   ├── Stripe.css
│   ├── app/
│   │   ├── constants.js
│   │   └── store.js
│   ├── assets/
│   │   ├── dealsOfDay/
│   │   │   ├── imgi_103_148819339-104507472-1579085071.jpg
│   │   │   ├── imgi_105_148130677-103419160-1571212818.jpg
│   │   │   ├── imgi_106_142772233-95250978-1544273464.jpg
│   │   │   ├── imgi_107_149847355-107160132-1590790597.jpg
│   │   │   ├── imgi_86_153596495-117910384-1728887255.jpg
│   │   │   ├── imgi_87_153596492-117910344-1728820962.jpg
│   │   │   ├── imgi_88_153596496-117910369-1728823521.jpg
│   │   │   ├── imgi_92_153500910-117557643-1709640783.jpg
│   │   │   ├── imgi_93_153493786-117542390-1708429628.jpg
│   │   │   ├── imgi_94_153389146-117195818-1718794861.jpg
│   │   │   ├── imgi_95_153163101-116599030-1678917934.jpg
│   │   │   └── imgi_96_153374231-117145875-1683896058.jpg
│   │   ├── download.svg
│   │   ├── fasho.png
│   │   ├── imgi_10_2Platinum_Srushty_14April23.jpg
│   │   ├── imgi_11_1Platinum_Srushty_14April23.jpg
│   │   ├── imgi_12_3Platinum_Srushty_14April23.jpg
│   │   ├── imgi_4_madeinindia.png
│   │   ├── imgi_8_smart-phone-web-11july25.jpg
│   │   ├── imgi_9_intel_coreultra_web_18june.jpg
│   │   ├── phones.jpg
│   │   └── user.png
│   ├── config/
│   │   └── baseUrl.js
│   ├── features/
│   │   ├── admin/
│   │   │   └── components/
│   │   │       ├── AdminOrders.jsx
│   │   │       ├── AdminProductDetail.jsx
│   │   │       ├── AdminProductList.jsx
│   │   │       └── ProductForm.jsx
│   │   ├── auth/
│   │   │   ├── authAPI.js
│   │   │   ├── authSlice.js
│   │   │   └── components/
│   │   │       ├── AdminCredentialBox.jsx
│   │   │       ├── ForgotPassword.jsx
│   │   │       ├── Login.jsx
│   │   │       ├── Logout.jsx
│   │   │       ├── Protected.jsx
│   │   │       ├── ProtectedAdmin.jsx
│   │   │       ├── ResetPassword.jsx
│   │   │       └── Signup.jsx
│   │   ├── cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── cartAPI.js
│   │   │   └── cartSlice.js
│   │   ├── common/
│   │   │   ├── Footer.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Pagination.jsx
│   │   ├── counter/
│   │   │   ├── Counter.jsx
│   │   │   ├── counterAPI.js
│   │   │   └── counterSlice.js
│   │   ├── home/
│   │   │   ├── DealsOfTheDay.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   └── TopCategories.jsx
│   │   ├── navbar/
│   │   │   ├── CategoryNavbar.jsx
│   │   │   └── Navbar.jsx
│   │   ├── order/
│   │   │   ├── Order.jsx
│   │   │   ├── orderAPI.js
│   │   │   └── orderSlice.js
│   │   ├── product/
│   │   │   ├── components/
│   │   │   │   ├── ProductDetail.jsx
│   │   │   │   └── ProductList.jsx
│   │   │   ├── productAPI.js
│   │   │   └── productSlice.js
│   │   └── user/
│   │       ├── components/
│   │       │   ├── UserOrders.jsx
│   │       │   └── UserProfile.jsx
│   │       ├── userAPI.js
│   │       └── userSlice.js
│   ├── index.css
│   ├── main.jsx
│   └── pages/
│       ├── 404.jsx
│       ├── AdminHome.jsx
│       ├── AdminOrdersPage.jsx
│       ├── AdminProductDetailPage.jsx
│       ├── AdminProductFormPage.jsx
│       ├── CartPage.jsx
│       ├── Checkout.jsx
│       ├── CheckoutForm.jsx
│       ├── ForgotPasswordPage.jsx
│       ├── Home.jsx
│       ├── LoginPage.jsx
│       ├── OrderSuccessPage.jsx
│       ├── ProductDetailPage.jsx
│       ├── ResetPasswordPage.jsx
│       ├── SignupPage.jsx
│       ├── StripeCheckout.jsx
│       ├── UserOrdersPage.jsx
│       └── UserProfilePage.jsx
├── test.js
└── vite.config.js


```

