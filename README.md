# BITS TODO App Authentication API

This is a simple Node.js application that provides authentication functionality including login, logout, and token verification APIs using MySQL database and Sequelize ORM.

## Features

- User authentication with JWT (JSON Web Tokens)
- Secure password storage using bcrypt hashing
- Token-based authentication for protected routes
- MySQL database integration with Sequelize ORM
- Simple API endpoints for login, logout, and token verification

## Requirements

- Node.js
- MySQL
- npm or yarn package manager

## 1. Install dependencies:

    `cd todo-auth-service`
    `npm install`

## 2. Set up MySQL database:

    Create a database for the application
    Update the database configuration in config/config.js

## 3. Run the application:

    `npm start`

You can now access the API endpoints at http://localhost:3000

## API Endpoints
    POST /login: Authenticate user and generate JWT token
    POST /logout: Invalidate current session (token)
    GET /check-token: Check if token is valid

## Configuration

    You can configure the application settings such as database connection details and JWT secret key in the config/config.js file.

