# Inventory Management System

A simple inventory management system built with Node.js, Express.js, MySQL, JWT, and vanilla JavaScript.

This project allows users to register, log in, and manage their own inventory records securely. Each user can add, view, update, delete, search, and filter their own inventory items.

## Features

- User registration
- User login
- JWT authentication
- Protected dashboard
- Add inventory item
- View inventory items
- Update inventory item
- Delete inventory item
- Search inventory by item name or category
- Filter inventory by status
- Logout functionality
- Login page styling
- Register page styling
- Dashboard styling
- Responsive layout

## Tech Stack

- Node.js
- Express.js
- MySQL
- HTML
- CSS
- JavaScript
- JWT
- bcrypt
- dotenv
- mysql2

## Project Structure

```txt
inventory_system_prac/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── inventoryController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   ├── authModel.js
│   └── inventoryModel.js
│
├── public/
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── login.css
│   │   └── register.css
│   │
│   └── js/
│       ├── dashboard.js
│       ├── login.js
│       └── register.js
│
├── routes/
│   ├── authRoutes.js
│   ├── inventoryRoutes.js
│   └── pageRoutes.js
│
├── views/
│   ├── dashboard.html
│   ├── login.html
│   └── register.html
│
├── app.js
├── package.json
└── README.md
```
