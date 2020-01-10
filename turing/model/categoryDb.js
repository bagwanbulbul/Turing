const knex = require("../conection.js")


let getCategoryData=()=>{
    return knex.select("*").from("category")
}

let getCategoryById=(category_id)=>{
    return knex.select("*").from("category").where("category_id",category_id)
}

let selectData = (product_id)=>{
    return knex.select("category.category_id","category.department_id", "category.name").from("category").join("product_category","product_category.product_id","category.category_id").where("product_id",product_id)
    
}
let selectDataByDepartmentID = (department_id)=>{
    return knex.select("category_id","name","description","department_id").from("category").where("department_id",department_id)
} 

module.exports={getCategoryData,getCategoryById,selectData,selectDataByDepartmentID}
