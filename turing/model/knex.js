const knex = require("../conection.js")
// let insertData = (productDetails)=>{
//     return knex("Allproduct").insert(productDetails)

// }


let getData = (i)=>{
    return knex.select("*").from("department")
}
let getDataById=(department_id)=>{
    return knex.select("*").from("department").where("department_id",department_id)
}


module.exports={getData,getDataById}