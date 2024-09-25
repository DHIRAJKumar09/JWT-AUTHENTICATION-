# JWT-AUTHENTICATION-

## Description

This project is a RESTful API built using **Node.js**, **Express**, and **MongoDB**. It includes user authentication with **JWT (JSON Web Tokens)**. Users can register, log in, and access protected routes using their unique tokens.

### Features:
- User registration with encrypted passwords
- User login and JWT-based authentication
- Protected routes with JWT validation middleware
- Error handling and validation

## User Registration Success Screenshot

Below is a screenshot showing the successful registration of a user via a **POST** request using **Postman**. The API responds with a 201 status code, indicating that the user has been successfully registered. The response includes a JWT token that will be used for authenticating subsequent requests:

![Registration Success](https://your-image-link.com/image.png)

In the screenshot:
- A new user is registered with their name, email, password, and UserType.
- The response contains the user's details along with a generated JWT token.

## How to Run

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up a `.env` file with the following variables:
    ```
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    MONGO_URI=your_mongodb_uri
    ```
4. Start the server with `npm start`.
5. Use Postman or any other REST client to interact with the API.

## Technologies Used
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **Bcrypt for password hashing**


## User Registration Success Screenshot

Here's a screenshot demonstrating successful user registration:
![Screenshot 2024-09-25 093535](https://github.com/user-attachments/assets/9ce78eff-ce06-4eb5-a6af-ca76e8e1c9f3)

