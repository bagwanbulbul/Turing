const knex = require("../conection.js")


let attributeData = ()=>{
    return knex.select("*").from("attribute")
}
let attributeDataByID=(attribute_id)=>{
    return knex.select("*").from("attribute").where("attribute_id",attribute_id)
}
let attributSelectData = (attribute_id)=>{
    return knex.select("attribute_value.attribute_value_id","attribute_value.value").from("attribute").join("attribute_value","attribute_value.attribute_id","attribute.attribute_id").where("attribute_id",attribute_id)
        
}
let inproductAttribute = (product_id)=>{
    return knex.select('attribute_value.attribute_value_id','attribute_value.value','attribute.name').from('product_attribute').innerJoin('attribute_value').innerJoin('attribute').where('product_id',product_id)
}





module.exports={attributeData,attributeDataByID,attributSelectData,inproductAttribute}