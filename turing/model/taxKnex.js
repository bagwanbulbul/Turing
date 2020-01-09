const knex = require("../conection.js")
let taxData = ()=>{
    return knex.select("*").from("tax")
}
let taxDataById=(tax_id)=>{
    return knex.select("*").from("tax").where("tax_id",tax_id)
}

module.exports={taxData,taxDataById}