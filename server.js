const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})


server.get("/", function(req, res){
  return res.render("index", {data})
})

server.get("/sobre", function(req, res){
  return res.render("sobre")
})

server.get("/recipes", function(req, res){
  return res.render("recipes", {data})
})

server.get("/recipes/:index", function(req,res){
  
  const recipeIndex = req.params.index
  
  return res.render("details", {recipes:recipes[recipeIndex]})

})

server.listen(5000, function() {
  console.log("server is running")
})