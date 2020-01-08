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
        // console.log(data)
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
        data = {"item_id":data[0]["item_id"],
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
shoppingCart.delete("/empty/:cart_id",function(req,res){
    let cart_id=req.params.cart_id
    let response=add.deleteData(cart_id)
    response.then((data)=>{
         res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
})

shoppingCart.get("/totalAmmount/:cart_id",function(req,res){
    let cart_id=req.params.cart_id
    let response = add.totalAmmount(cart_id)
    response.then((data)=>{
        let price = data[0]["price"]
        let quantity=data[0]["quantity"]
        data["subtotal"]=price*quantity
        data = {
                "total":data["subtotal"]

        }
        return res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});
shoppingCart.get("/saveForLater/:item_id",function(req,res){
    let item_id=req.params.item_id
    let getData=add.getData(item_id)
    getData.then((data)=>{
       let insert=add.insertData(data)
       insert.then((result)=>{
            let deleteTableData = add.removeData(item_id)
            deleteTableData.then((response)=>{
                res.json(response)
            })
        })
    }).catch((err)=>{
        res.send(err)
    })
})
shoppingCart.get("/getSaved/:cart_id",function(req,res){
    let cart_id=req.params.cart_id
    let response=add.getSaved(cart_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports=shoppingCart

