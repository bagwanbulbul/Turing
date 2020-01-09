const express = require('express');
var orders = express.Router();
orders.use(express.json())
const add = require("../model/orderKnex");

orders.get("/:cart_id",function(req,res){
    let cart_id=req.params.cart_id
    let response = add.orderData(cart_id)
    response.then((data)=>{
        let price = data[0]["price"]
        let quantity=data[0]["quantity"]
        total =price*quantity
        let orderDetails={
            total_amount:total,
            created_on:new Date(),
            shipped_on:new Date(),
            status:req.body.status,
            comments:req.body.comments,
            customer_id:req.body.customer_id,
            auth_code:req.body.auth_code,
            reference:req.body.reference,
            shipping_id:req.body.shipping_id,
            tax_id:req.body.tax_id
        }

        let postData = add.postOrderData(orderDetails)
        postData.then((result)=>{
            res.send(result)

        })
        // return res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports=orders