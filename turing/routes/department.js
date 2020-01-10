const express = require('express');
var department = express.Router();
department.use(express.json())
const add = require("../model/departmentDb");

department.get("/get",function(req,res){
    let response =  add.getData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

department.get("/get/:department_id",function(req,res){
    let department_id=req.params.department_id
    let response=add.getDataById(department_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = department