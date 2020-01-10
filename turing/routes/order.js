const express = require('express');
var orders = express.Router();
orders.use(express.json())
const add = require("../model/orderDb");

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
    }).catch((err)=>{
        console.log(err);
    })
});
orders.get("/get/:order_id",function(req,res){
    let order_id = req.params.order_id
    let response = add.orderDetailData(order_id)
    response.then((data)=>{
        shortOrderDetails={
            "order_id":data[0]["order_id"],
            "product_id":data[0]["product_id"],
            "attributes":data[0]["attributes"],
            "product_name":data[0]["name"],
            "quantity":data[0]["quantity"],
            "unit_cost":data[0]["price"]
        }
        var insertData = add.orderDetailsInsert(shortOrderDetails)
        insertData.then((resp)=>{
            res.send("data posted...")
        })
//         res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

orders.get("/inCutomers",function(req,res){
    let response = add.orderInCustomer()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })

})
orders.get("/shortDetail/:order_id",function(req,res){
    let order_id=req.params.order_id
    let response=add. shortDetail(order_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports=orders