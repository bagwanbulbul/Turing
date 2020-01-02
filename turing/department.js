var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var mysql = require('mysql');
var knex = require("knex")({
    client:"mysql",
    connection:{
        host : 'localhost',
        user : 'root',
        password : 'navgurukul',
        database : 'turing_project'
    }
});
app.get("/get",function(req,res){
    knex.select("*").from("department").then((data)=>{
        res.send((data))
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});