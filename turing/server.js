const express = require('express');
const app =express();
const department = require('./routes/department');
app.use("/department",department);

const category=require("./routes/category");
app.use("/category",category)

const attribute=require("./routes/attribute");
app.use("/attribute",attribute)

const product = require("./routes/product");
app.use("/product",product)


app.listen(3000,()=>{
    console.log("server is listening 3000 ....")

});