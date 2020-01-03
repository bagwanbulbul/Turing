const express = require('express');
const app =express();
const department = require('./routes/department');
app.use("/department",department);

const category=require("./routes/category");
app.use("/category",category)

app.listen(3000,()=>{
    console.log("server is listening 3000 ....")

});