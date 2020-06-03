var express=require('express')
var bodyparser=require("body-parser")
const server=express()
var data=[
    {Name:"Ram",Age:12,Sub:"Maths"},
    {Name:"John",Age:13,Sub:"Chemistry"},
    {Name:"Seeta",Age:14,Sub:"Physics"}]
server.use(bodyparser.urlencoded({extended:true}))
server.set("view engine","ejs")

server.get("/",function(req,res){
    res.render("home")

})
server.get("/home",function(req,res){
    res.render("home")
})
server.get("/login",function(req,res){
    res.render("login")
})
server.get("/aboutus",function(req,res){
   res.render("aboutus") 
})
server.get("/services",function(req,res){
    res.render("services") 
 })
 server.post("/validate",function(req,res){
     var user=req.body.userid;
     var password=req.body.pass;
     console.log(password)
     if(user=="admin"&&password=="pass@123"){
         res.render("home",{students:data})
     }
     else{
    res.render("login")
     } 
 })
server.listen(process.env.PORT|3000,function(){
    console.log("server started listening..")
})
