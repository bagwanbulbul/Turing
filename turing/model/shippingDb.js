const knex = require("../conection.js")

let shippingData = ()=>{
    return knex.select("*").from("shipping_region")
}
let shippingDataById = (shipping_region_id)=>{
    return knex.select("*").from("shipping_region").where("shipping_region_id",shipping_region_id)
}

module.exports={shippingData,shippingDataById}