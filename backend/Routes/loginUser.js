const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/User');
const { body } = require("express-validator");
const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = "Foodies";

const route = express.Router();
route.post('/loginUser', [
    body('email', "Invalid email format").isEmail().isLength({ min: 8 }),
    body('password', 'Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number')
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })]
    , async (req, res) => {
        const email = req.body.email;
        const pwd = req.body.password;
        const userData = await User.findOne({email});
        if (!userData) {
            return res.status(400).json({ errors: "user not found" });
        }
        const pwdcomp =await bcrypt.compare(req.body.password,userData.password);
        if (!pwdcomp) {
            return res.status(400).json({ errors: "incorrect password" });
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authtoken=jwt.sign(data,secret);
        return res.json({ success: true , authToken:authtoken});
    })
module.exports = route;