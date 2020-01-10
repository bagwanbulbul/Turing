const express = require('express');
var attribute = express.Router();
attribute.use(express.json())
const add = require("../model/attributeDb");

attribute.get("/get",function(req,res){
    let response =  add.attributeData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

attribute.get("/get/:attribute_id",function(req,res){
    let attribute_id=req.params.attribute_id
    let response=add.attributeValue(attribute_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
attribute.get("/attribute_value/:attribute_id",function(req,res){
    let attribute_id=req.params.attribute_id
    let response=add.attributSelectData(attribute_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

attribute.get("/inProduct/:product_id",function(req,res){
    let product_id=req.params.product_id
    let response=add.inproductAttribute(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})



module.exports = attribute
