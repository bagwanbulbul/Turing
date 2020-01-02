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

// product.get("/get/:id",function(req,res){
//     let department_id=req.params.department_id
//     let response.then
// })

module.exports = product