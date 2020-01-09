const express = require('express');
var tax = express.Router();
tax.use(express.json())
const add = require("../model/taxKnex");

tax.get("/get",function(req,res){
    let response =  add.taxData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

tax.get("/get/:tax_id",function(req,res){
    let tax_id = req.params.tax_id
    let response=add.taxDataById(tax_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = tax