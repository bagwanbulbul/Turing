const knex = require("../conection.js")

let productData = ()=>{
    return knex.select("*").from("product")
}

module.exports={productData}