const knex = require("../conection.js")

// let getData = ()=>{
//     return knex.select("*").from("department")
// }
// let getDataById=(department_id)=>{
//     return knex.select("*").from("department").where("department_id",department_id)
// }
// let getCategoryData=()=>{
//     return knex.select("*").from("category")
// }

// let getCategoryById=(category_id)=>{
//     return knex.select("*").from("category").where("category_id",category_id)
// }

// let selectData = (product_id)=>{
//     return knex.select("category.category_id","category.department_id", "category.name").from("category").join("product_category","product_category.product_id","category.category_id").where("product_id",product_id)
    
// }
// let selectDataByDepartmentID = (department_id)=>{
//     return knex.select("category_id","name","description","department_id").from("category").where("department_id",department_id)
// } 



// let attributeValue = (attribute_id)=>{
//     return knex.select("attribute_value_id","value").from("attribute_value").where("attribute_id",attribute_id)
// }

// let inproductAttribute =(product_id)=>{
//     return knex.from('product_attribute').innerJoin('attribute_value')
// }

module.exports={attributeValue,inproductAttribute}