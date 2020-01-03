const express = require('express');
var product = express.Router();
product.use(express.json())
const add = require("../model/knex");

product.get("/get",function(req,res){
    let response =  add.attributeData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

product.get("/get/:attribute_id",function(req,res){
    let attribute_id=req.params.attribute_id
    let response=add.attributeDataByID(attribute_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = product
