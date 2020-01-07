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

// const tax = require("./routes/tax");
// app.use("/tax",tax)

// const shipping = require("./routes/shipping")
// app.use("/shipping",shipping)

const customer = require("./routes/customer")
app.use("/customer",customer)


app.listen(4000,()=>{
    console.log("server is listening 4000 ....")

});