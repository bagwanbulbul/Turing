const knex = require("../conection.js")


let orderData=(cart_id)=>{
    return knex.select("*").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("cart_id",cart_id)
}
let postOrderData=(orderDetails)=>{
    return knex("orders").insert(orderDetails)
}

let orderDetailData=(order_id)=>{
    return knex.select("*").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").join("orders").where("order_id",order_id)
}

let shortDetail=(order_id)=>{
    return knex.select("orders.order_id","orders.total_amount","orders.created_on","orders.shipped_on","orders.status","product.name").from("orders").join("product","product.product_id","orders.order_id").where("order_id",order_id)
}
module.exports={orderData,postOrderData,orderDetailData,shortDetail}
