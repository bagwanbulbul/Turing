const express = require('express');
var shoppingCart = express.Router();
shoppingCart.use(express.json())
const add = require("../model/shoppingCartKnex");
const uniqueId = require("random-string")
const uniqueIdFunction = uniqueId()

shoppingCart.get("/genrateUniqueId",function(req,res){
    let response = add.genrateUniqueId()
    response.then((data)=>{
        var cart_id={
            "cart_id":uniqueIdFunction
        }
        res.send(cart_id)
    }).catch((err)=>{
        res.send(err)
    })
})


shoppingCart.post("/add",function(req,res){
  let  details={
    cart_id:req.body.cart_id,
    product_id:req.body.product_id,
    attributes:req.body.attributes,
    quantity:req.body.quantity,
    added_on:req.body.added_on
  }
  let response = add.shoppingCartData(details)
    response.then((data)=>{
        return res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})

shoppingCart.get("/:cart_id",function(req,res){
    let cart_id=req.params.cart_id
    let response=add.shoppingById(cart_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
shoppingCart.put("/update/:item_id",function(req,res){
    let item_id=req.params.item_id
    let response = add.updateShoppingCartData(item_id)
    response.then((data)=>{
        let price = data[0]["price"]
        let quantity=data[0]["quantity"]
        data["subtotal"]=price*quantity
        data = {"iteam_id":data[0]["iteam_id"],
                "name":data[0]["name"],
                "attributes":data[0]["attributes"],
                "product_id":data[0]["product_id"],
                "price":data[0]["price"],
                "quantity":data[0]["quantity"],
                "subtotal":data["subtotal"]

        }
        console.log(data)
        return res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports=shoppingCart

