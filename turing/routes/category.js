const express = require('express');
var category = express.Router();
category.use(express.json())
const add = require("../model/categoryKnex");

category.get("/get",function(req,res){
    let response =  add.getData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

category.get("/get/:category_id",function(req,res){
    let category_id=req.params.category_id
    let response=add.getCategoryById(category_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
category.get("/inProduct/:product_id",function(req,res){
    let product_id=req.params.product_id
    let response = add.selectData(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
category.get("/inDepartment/:department_id",function(req,res){
    let department_id=req.params.department_id
    let response = add.selectDataByDepartmentID(department_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = category