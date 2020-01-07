const express = require('express');
var customer = express.Router();
customer.use(express.json())
const add = require("../model/customerKnex");


customer.post("/post",function(req,res){
    let customerDetails={
            "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password,
            "credit_card":req.body.credit_card,
            "address_1":req.body.address_1,
            "address_2":req.body.address_2,
            "city":req.body.city,
            "region":req.body.region,
            "postal_code":req.body.postal_code,
            "country":req.body.country,
            "shipping_region_id":req.body.shipping_region_id,
            "day_phone":req.body.day_phone,
            "eve_phone":req.body.eve_phone,
            "mob_phone":req.body.mob_phone 
        }
    let response = add.customerData(customerDetails)
    response.then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = customer