const knex = require("../conection.js")

let productData = ()=>{
    return knex.select("*").from("product")
}
let productByID=(product_id)=>{
    return knex.select("*").from("product").where("product_id",product_id)
}

let add_query = (name,limit)=>{
    return knex.select("*").from('product').where("name",name).where("limit",limit)

}

let productCategory = (category_id)=>{
    return knex.select("*").from("product").join("product_category","product_category.product_id","product.product_id").where("category_id",category_id)
}

let productDepartment = (department_id)=>{
    return knex.select("*").from("department").join("product","product.product_id","department.department_id").where("department_id",department_id)
}

let productDetails = (product_id)=>{
    return knex.select("*").from("product").where("product_id",product_id)
}

let productLocation = (product_id)=>{
    return knex.select("category.category_id","category.name","department.department_id","department.name").from("department").join("category","category.department_id","department.department_id").join("product").where("product_id",product_id)
}

let reviewData=(review,product_id)=>{
    return knex("review").where("product_id",product_id).insert(review)
}

let selectReviewData = (product_id)=>{
    return knex.select("product.name","review.review","review.rating","review.created_on").from("review").join("product","product.product_id","review.product_id").where("product_id",product_id)
}
module.exports={productData,productByID,productCategory,productDepartment,add_query,productDetails,productLocation,reviewData,selectReviewData}