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
let updateAddress=(updateData,customer_id)=>{
    return knex("customer").where("customer_id",customer_id).update(updateData)
}
let updatecreaditcard=(updateData,customer_id)=>{
    return knex("customer").where("customer_id",customer_id).update(updateData)
}
module.exports={customerData,getCustomerData,updateCustomerData,logIn,updateAddress,updatecreaditcard}