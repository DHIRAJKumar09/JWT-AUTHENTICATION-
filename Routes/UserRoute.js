 const express = require('express');
 const middleware = require('../MiddleWare/Auth');
const { registration, login } = require('../Controller/UserController');
 const route = express.Router();

 route.post("/register",registration);
 route.post("/login",login);

 module.exports = route;
