//route level middleware function
var express = require('express')
var path = require('path')
const bodyParser=require ('body-parser');
var session=require('express-session')
var app = express()


app.use(session({'secret':'this is my Proj app'}))
var indexRouter = require("./routes/indexRouter")
var adminRouter = require("./routes/adminRouter")
var userRouter = require("./routes/userRouter")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//configuration to load static files
app.use(express.static(path.join(__dirname,"public")))

//configure template engine 
app.set("view engine","ejs")
app.set("views","./views")

app.use("/admin",adminRouter)
app.use("/user",userRouter)
app.use("/",indexRouter)

app.listen(3000)
console.log("server invoked at link http://localhost:3000")
