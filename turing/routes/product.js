const express = require('express');
var product = express.Router();
product.use(express.json())
const add = require("../model/productKnex");

product.get("/get",function(req,res){
    let response =  add.productData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = product