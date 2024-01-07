var express = require("express")
var router = express.Router()
const userreg=require('../controllers/userregistration');

router.get("/",(req,res)=>{
 res.render("index")
})
   
 router.get("/about",(req,res)=>{
 res.render("about")
})

router.get("/contact",(req,res)=>{
 res.render("contact")
})

router.post("/register",userreg.insertData);

router.get("/register",(req,res)=>{
   res.render("registration",{ 'msg':"" })
})
router.post("/login",userreg.userLogin);

router.get("/login",(req,res)=>{
   if(req.session.unm!=undefined)
   {
   req.session.destroy();
   }
   res.render("login",{ 'msg':"" })
})


module.exports = router


