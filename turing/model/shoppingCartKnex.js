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
let deleteData=(cart_id)=>{
    return knex("shopping_cart").where("cart_id",cart_id).del()
}
let totalAmmount=(cart_id)=>{
    return knex.select("*").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("cart_id",cart_id)
}
let getData=(item_id)=>{
    return knex.select("*").from("shopping_cart").where("item_id",item_id)
}
let insertData=(data)=>{
    return knex.select("*").from("save_for").insert(data)
}
let removeData=(item_id)=>{
    return knex.select("*").from("shopping_cart").where("item_id",item_id).del()
}
let getSaved=(cart_id)=>{
    return knex.select("product.name","shopping_cart.item_id","shopping_cart.attributes","product.price").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("cart_id",cart_id)
}
let removeProduct=(item_id)=>{
    return knex.select("product.name","shopping_cart.item_id","shopping_cart.attributes","product.price").from("shopping_cart").join("product","product.product_id","shopping_cart.product_id").where("item_id",item_id).del()
}
module.exports={shoppingCartData,shoppingById,genrateUniqueId,updateShoppingCartData,deleteData,totalAmmount,getData,insertData,removeData,getSaved,removeProduct}

// "shopping_cart.item_id","product.name","shopping_cart.attribute","product.product_id","product.price","shopping_cart.quantity"