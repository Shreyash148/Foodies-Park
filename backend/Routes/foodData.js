const mongoose=require('mongoose');
const express = require('express');
const FoodData=require('../models/Food_items');
const route=express.Router();

route.post('/foodData',(req,res)=>{
    FoodData.find().then((data)=>{
        res.send(data);
    });
})

route.get('/search/:slug',async(req,res)=>{
    const search = req.params.slug;
    FoodData.find({$or:[{name:{$regex : '.*'+ search + '.*' }},{type:{$regex : '.*'+ search + '.*' }},{category:{$regex : '.*'+ search + '.*' }}]})
    .then((data)=>{
        res.send(data);
    })
});

route.post('/filter',async (req,res)=>{
    const check = req.body.checked;
    FoodData.find({$or:[{type:check[0]},{type:check[1]}]}).then((data)=>{
        res.send(data);
    })
})
 module.exports=route;
