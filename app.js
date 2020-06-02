var express=require('express')
const server=express()
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
 server.get("/validate",function(req,res){
    res.render("home") 
 })
server.listen(3000,function(){
    console.log("server started listening..")
})
