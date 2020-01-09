const knex = require("../conection.js")


let orderData=(cart_id)=>{
    return knex.select("*").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("cart_id",cart_id)
}
let postOrderData=(orderDetails)=>{
    return knex("orders").insert(orderDetails)
}
module.exports={orderData,postOrderData}
