const express = require('express');
var product = express.Router();
product.use(express.json())
const add = require("../model/knex");

product.get("/get",function(req,res){
    let response =  add.getData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

product.get("/get/:category_id",function(req,res){
    let category_id=req.params.category_id
    let response=add.getCategoryById(category_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = product