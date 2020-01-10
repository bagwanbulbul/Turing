const express = require('express');
var customer = express.Router();
customer.use(express.json())
const add = require("../model/customerDb");
const jwt = require('jsonwebtoken')


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
customer.get("/get",function(req,res){
    let response =  add.getCustomerData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
customer.put("/update/:customer_id",function(req,res){
    let customer_id=req.params.customer_id
    let updateData = {"name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "day_phone":req.body.day_phone,
        "eve_phone":req.body.eve_phone,
        "mob_phone":req.body.mob_phone 

    }
    let response = add.updateCustomerData(customer_id,updateData)
    response.then((data)=>{
        return res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

customer.post("/login",function(req,res){
    let email=req.body.email
    let password=req.body.password
    let response= add.logIn()
    response.then((data)=>{
        for(let i=0; i<data.length; i++){
            if ((data[i]["email"]==email) && (data[i]["password"]==password)){
                let token = jwt.sign({"user":data}, "bulbul" );
                res.cookie(token); // add cookie here
                res.json({token})
              } 
        }
    })
})

customer.put("/address",function(req,res){
    let alltoken=req.headers.cookie
    var tokenList = alltoken.split("=undefined; ")
    let token_list =  tokenList[tokenList.length - 2]
    jwt.verify(token_list,"bulbul", (err,data) => {
        let customer_id = req.body.customer_id
        let updateData = {
            "address_1":req.body.address_1,
            "address_2":req.body.address_2,
            "city":req.body.city,
            "region":req.body.region,
            "postal_code":req.body.postal_code,
            "country":req.body.country,
            "shipping_region_id":req.body.shipping_region_id
        }
        let response =add.updateAddress(updateData,customer_id)
            response.then((data)=>{
                res.json(data)
    
        }).catch((err)=>{
            res.send(err)
        })
    })
})
customer.put("/creaditcard",function(req,res){
    let alltoken=req.headers.cookie
    var tokenList = alltoken.split("=undefined; ")
    let token_list =  tokenList[tokenList.length - 2]
    jwt.verify(token_list,"bulbul", (err,data) => {
        let customer_id = req.body.customer_id
        let updateData = {credit_card:req.body.credit_card
        }
        let response =add.updatecreaditcard(updateData,customer_id)
            response.then((data)=>{
                res.json(data)
    
        }).catch((err)=>{
            res.send(err)
        })
    })
})


module.exports = customer