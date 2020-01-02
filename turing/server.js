const express = require('express');
const app =express();
const department = require('./routes/department');
app.use("/department",department);

const category=require("./routes/category");
app.use("/category",category)

app.listen(4000,()=>{
    console.log("server is listening 4000 ....")

});