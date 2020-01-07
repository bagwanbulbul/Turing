const knex = require("../conection.js")

let customerData=(customerDetails)=>{
    return knex("customer").insert(customerDetails)
}
let getCustomerData = ()=>{
    return knex.select("*").from("customer")
}
module.exports={customerData,getCustomerData}