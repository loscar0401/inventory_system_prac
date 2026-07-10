# Inventory Management System

A simple inventory management system built with Node.js, Express.js, MySQL, and vanilla JavaScript.  
The system allows users to manage their own inventory records securely using JWT authentication.

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
- Responsive dashboard and auth page styling

## Tech Stack

- Node.js
- Express.js
- MySQL
- HTML
- CSS
- JavaScript
- JWT
- bcrypt

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
│   │   └── login.css
│   └── js/
│       ├── dashboard.js
│       └── login.js
│
├── routes/
│   ├── authRoutes.js
│   ├── inventoryRoutes.js
│   └── pageRoutes.js
│
├── views/
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
├── app.js
├── package.json
└── README.md
