const express = require('express');
var shipping = express.Router();
shipping.use(express.json())
const add = require("../model/shippingKnex");

shipping.get("/get",function(req,res){
    let response =  add.shippingData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
shipping.get("/:shipping_region_id",function(req,res){
    let shipping_region_id=req.params.shipping_region_id
    let response=add.shippingDataById(shipping_region_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports=shipping