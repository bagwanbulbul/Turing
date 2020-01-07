const knex = require("../conection.js")

let customerData=(customerDetails)=>{
    return knex("customer").insert(customerDetails)
}
let getCustomerData = ()=>{
    return knex.select("*").from("customer")
}
let updateCustomerData=(customer_id,updateData)=>{
    return knex("customer").where("customer_id",customer_id).update(updateData)
}
let logIn=()=>{
    return knex.select("*").from("customer")
}
let updateAddress=()=>{
    return knex("customer").update()
}
module.exports={customerData,getCustomerData,updateCustomerData,logIn,updateAddress}