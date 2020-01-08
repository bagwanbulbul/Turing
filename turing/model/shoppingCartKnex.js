const knex = require("../conection.js")

let shoppingCartData=(details)=>{
    return knex("shopping_cart").insert(details)
}
let shoppingById=(cart_id)=>{
    return knex.select("*").from("shopping_cart").where("cart_id",cart_id)
}
let genrateUniqueId=()=>{
    return knex.select("*").from("shopping_cart")
}
let updateShoppingCartData=(item_id)=>{
    return knex.select("shopping_cart.item_id","product.name","shopping_cart.attributes","product.product_id","product.price","shopping_cart.quantity").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("item_id",item_id)
}
module.exports={shoppingCartData,shoppingById,genrateUniqueId,updateShoppingCartData}

// "shopping_cart.item_id","product.name","shopping_cart.attribute","product.product_id","product.price","shopping_cart.quantity"