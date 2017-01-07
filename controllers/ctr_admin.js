var express = require("express");
var router = express.Router();
var User = require("../models/user").User;
var Bebida = require("../models/bebidas");

router.get("/",(req,res)=>{
    res.render("admin/panel");
});


// configuracion de Bebidas///

router.get("/bebidas/new",(req,res)=>{
    res.render("admin/bebidas/new");
});

router.get("/bebidas/:id/edit",(req,res)=>{
     Bebida.findById(req.params.id,(err,bebida)=>{
        res.render("admin/bebidas/edit",{bebida: bebida});
    });
});

//Rest
router.route("/bebidas/:id")
    .get((req, res) => {
        Bebida.findById(req.params.id, (err, bebida) => {
            res.render("admin/bebidas/show", { bebida: bebida });
        });
    })
    .put((req, res) => {
        Bebida.findById(req.params.id, (err, bebida) => {
            bebida.nombre = req.body.nombre;
            bebida.precio = req.body.precio;
            bebida.save().then(beb => {
                res.render("admin/bebidas/show",{bebida: bebida});
            }, err => {
                if (err) {
                    console.log(String(err));
                }
            });

        });
    })
    .delete((req, res) => {

    });
// fin rest


//routeo de bebidas

router.route("/bebidas")
.get((req,res)=>{
    Bebida.find({},(err,bebidas)=>{
        res.render("admin/bebidas/index",{bebidas: bebidas});
    })
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




//fin configurarion beebidas



module.exports = router;