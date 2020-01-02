const express = require('express');
var product = express.Router();
product.use(express.json())
const add = require("../model/knex");

product.get("/get",function(req,res){
    let = add.getData().then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})