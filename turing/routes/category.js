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

product.get("/get/:category_id",function(req,res){
    let category_id=req.params.category_id
    let response=add.getCategoryById(category_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
product.get("/inProduct/:product_id",function(req,res){
    let product_id=req.params.product_id
    let response = add.selectData(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
product.get("/inDepartment/:department_id",function(req,res){
    let department_id=req.params.department_id
    let response = add.selectDataByDepartmentID(department_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = product