const knex = require("../conection.js")
// let insertData = (productDetails)=>{
//     return knex("Allproduct").insert(productDetails)

// }

let gettData = ()=>{
    return knex.select("*").from("department")

}
module.exports=gettData