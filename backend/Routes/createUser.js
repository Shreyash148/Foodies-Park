const mongoose = require("mongoose");
const express = require("express");
const User = require('../models/User');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const route = express.Router();

route.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body('email', "Invalid email format").isEmail().isLength({ min: 8 }),
    body('password', 'Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number')
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }),
    body('contactNumber').isMobilePhone().isLength({ min: 10, max: 11 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            const salt = await bcrypt.genSalt(10);
            let secPwd= await bcrypt.hash(req.body.password,salt);
            User.create({
                name: req.body.name,
                password: secPwd,
                address: req.body.address,
                email: req.body.email,
                contactNumber: req.body.contactNumber
            })
            res.json({ success: true });
        }
    })
module.exports = route;
