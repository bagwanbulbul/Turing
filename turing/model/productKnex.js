const knex = require("../conection.js")

let productData = ()=>{
    return knex.select("*").from("product")
}

// let add_query =knex('franchisee').where('franchisee_name', 'like','%jackmarker%').andWhere('company_name', 'like','%marker%')
// .then((resp) => {
//     console.log("resp >>",resp)
// })`


let productByID = (product_id)=>{
    return knex.select("*").from("product").where("product_id",product_id)
}

module.exports={productData,productByID}