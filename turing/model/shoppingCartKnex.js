const knex = require("../conection.js")

let shoppingCartData=(details)=>{
    return knex("shopping_cart").insert(details)
}
let shoppingById=(cart_id)=>{
    return knex.select("*").from("shopping_cart").where("cart_id",cart_id)
}
module.exports={shoppingCartData,shoppingById}
