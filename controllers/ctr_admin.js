var express = require("express");
var router = express.Router();
var User = require("../models/user").User;
var Bebida = require("../models/bebidas");

router.get("/",(req,res)=>{
    res.render("admin/panel");
});

router.get("/bebidas/new",(req,res)=>{
    res.render("admin/bebidas/new");
});

router.get("/bebidas/:id/edit",(req,res)=>{

});

router.route("/bebidas/:id")
.get((req,res)=>{
    Bebida.findById(req.params.id,(err,bebida)=>{
        res.render("admin/bebidas/show",{bebida: bebida});
    });    
})
.put((req,res)=>{

})
.delete((req,res)=>{

});

router.route("/bebidas")
.get((req,res)=>{

})
.post((req,res)=>{
    var bebida = new Bebida({
        nombre: req.body.nombre,
        precio: req.body.precio
    });
    bebida.save().then(beb=>{       
        res.redirect("/admin/bebidas/"+bebida._id);
    },err =>{
        if(err){
            console.log(String(err));
        }
    });
});

module.exports = router;