var express=require('express')
var session=require('express-session')
var router=express.Router()
//var indexmodel=require('../models/indexmodel')
//const student=require('../controllers/studentController');

router.use((req,res,next)=>{
if(req.session.unm!=undefined && req.session.role=='user' || req.session.role=='admin')
{
  next()
}else{
   res.redirect("/login") 
}
})


 router.get('/',function(req,res,next){
         user1=req.session.unm;
        res.render("userindex",{ 'msg':user1 });
        })
        router.get("/propertylist",(req,res)=>{
         res.render("property-list")
        })
      router.get("/propertytype",(req,res)=>{
         res.render("property-type")
       })
        router.get("/propertyagent",(req,res)=>{
         res.render("property-agent")
        })
     router.get("/service",(req,res)=>{
      res.send("<h1>/service url invoked , visitor panel</h1>")
     })
  router.get('/logout',function(req,res,next){
       res.redirect("/login");
       next();
          })

module.exports=router
