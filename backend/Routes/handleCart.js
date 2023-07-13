const mongoose = require('mongoose');
const express = require('express');
const orderData = require('../models/Mycart')
const route = express.Router();

route.post('/myOrder'
    ,async(req, res) => {
        const email = req.body.email;
        const cartItem = req.body.cart;
        const itemInfo = {
            date:new Date().toISOString(),
            items:cartItem
        }
        const data= new orderData({
            email:email,
            cart:itemInfo
        });
        const check = await orderData.findOne({email});
        if(!check){
            return data.save();
        }
        else{
            orderData.updateOne({email},{$push:{cart:itemInfo}}).then()
        }

        res.send({success:true});
    });

    route.post('/orderData',
        async(req,res)=>{
            const email = req.body.email;
            const data = await orderData.findOne({email});
                res.send(data?.cart);
    })
module.exports = route;