const express = require('express');
var product = express.Router();
product.use(express.json())
const add = require("../model/productKnex");

product.get("/get",function(req,res){
    let response =  add.productData()
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
product.get("/inCategory/:category_id",function(req,res){
    let category_id = req.params.category_id
    let response = add.productCategory(category_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
})
product.get("/inDepartment/:department_id",function(req,res){
    let department_id=req.params.department_id
    let response = add.productDepartment(department_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)

    })
})
product.get("/search/:name/:limit",function(req,res){
    let  name= req.params.name
    let description_limit = req.params.description_limit
    let response=add.add_query(name,description_limit)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

product.get("/:product_id/details",function(req,res){
    let product_id = req.params.product_id
    let response = add.productDetails(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

})
product.get("/:product_id/location",function(req,res){
    let product_id=req.params.product_id
    let response=add.productLocation(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

product.post("/:product_id/review",function(req,res){
    let product_id = req.params.product_id
    let review={
            "customer_id":req.body.customer_id,
            "product_id":req.body.product_id,
            "review":req.body.review,
            "rating":req.body.rating,
            "created_on":req.body.created_on 
        }
        review["product_id"]=product_id
    let response = add.reviewData(review,product_id)
    response.then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})
product.get("get/:product_id/review",function(req,res){
    let product_id = req.params.product_id
    let response = add.selectReviewData(product_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = product