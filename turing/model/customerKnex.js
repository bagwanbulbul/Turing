const knex = require("../conection.js")

let customerData=(customerDetails)=>{
    return knex("customer").insert(customerDetails)
}

module.exports={customerData}