var express = require("express");
var router = express.Router();
var User = require("../models/user").User;

router.get("/",(req,res)=>{
    res.render("admin/panel");
});

router.get("/bebidas/new",(req,res)=>{
    res.render("admin/bebidasnew");
});

router.get("/bebidas/:id/edit",(req,res)=>{

});

router.route("/bebidas/:id")
.get((req,res)=>{

})
.put((req,res)=>{

})
.delete((req,res)=>{

});

router.route("/bebidas")
.get((req,res)=>{

})
.post((req,res)=>{

});

module.exports = router;