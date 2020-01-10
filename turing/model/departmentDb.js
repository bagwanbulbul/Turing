const knex = require("../conection.js")

let getData = ()=>{
    return knex.select("*").from("department")
}
let getDataById=(department_id)=>{
    return knex.select("*").from("department").where("department_id",department_id)
}

module.exports={getData,getDataById}