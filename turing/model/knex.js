const knex = require("../conection.js")

let getData = ()=>{
    return knex.select("*").from("department")
}
let getDataById=(department_id)=>{
    return knex.select("*").from("department").where("department_id",department_id)
}
let getCategoryData=()=>{
    return knex.select("*").from("category")
}

let getCategoryById=(category_id)=>{
    return knex.select("*").from("category").where("category_id",category_id)
}

let joinTable = ()=>{
    return knex.select("*").from("category").join("product_category",{"product_category.product_id":"category.category_id"})
    // return knex.from("category").innerJoin("product_category","category.category_id","product_category.product_id")
}



module.exports={getData,getDataById,getCategoryData,getCategoryById,joinTable}