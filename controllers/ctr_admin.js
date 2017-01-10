var express = require("express");
var router = express.Router();
var User = require("../models/user").User;
var Bebida = require("../models/bebidas");
var bebida_find_midleware = require("../middlewares/find_bebida");
var fs= require("fs");
var multer = require("multer");

var upload = multer({dest:"public/imgUpload"});
//direccion base localhost:300/admin/

router.get("/", (req, res) => {
    res.render("admin/panel");
});

//Bebidas
// configuracion de Bebidas///

router.get("/bebidas/new", (req, res) => {
    res.render("admin/bebidas/new");
});

//las busquedas de imagenes las hago con el middleware//
router.all("/bebidas/:id*", bebida_find_midleware);
//

router.get("/bebidas/:id/edit", (req, res) => {
    //{ bebida: bebida } esto no se usa mas porque se lo paso en el middleware
    // en la parte de res.locals.bebida
    res.render("admin/bebidas/edit");
});



//Rest
router.route("/bebidas/:id")
    .get((req, res) => {
        //no hago mas el find porque lo hago en el midleware
        //{ bebida: bebida } esto no se usa mas porque se lo paso en el middleware
        // en la parte de res.locals.bebida
        res.render("admin/bebidas/show");
    })
    .put((req, res) => {
        res.locals.bebida.nombre = req.body.nombre;
        res.locals.bebida.precio = req.body.precio;
        res.locals.bebida.save().then(beb => {
            res.render("admin/bebidas/show");
        }, err => {
            if (err) {
                console.log(String(err));
            }
        });
    })
    .delete((req, res) => {
        Bebida.findOneAndRemove({ _id: req.params.id }, (err) => {
            if (!err) {
                res.redirect("/admin/bebidas");
            } else {
                console.log(err);
            }
        });
    });
// fin rest


//routeo de bebidas

router.route("/bebidas")
    .get((req, res) => {
        Bebida.find({}, (err, bebidas) => {
            res.render("admin/bebidas/index", { bebidas: bebidas });
        })
    })
    .post(upload.single("foto"),(req, res) => {
        try {
                var extension = req.file.originalname.split('.').pop();                       
                var bebida = new Bebida({
                nombre: req.body.nombre,
                precio: req.body.precio,
                fotoExtension: extension
            });
            bebida.save().then(beb => {
                //renombro a la foto
                fs.rename(req.file.path,"public/imgUpload/" + bebida._id + "." + extension, err=>{
                    if (err) console.log(String(err));
                    console.log("guardado imagen exitoso");
                    res.redirect("/admin/bebidas/" + bebida._id);
                });              
            }, err => {
                if (err) {
                    console.log(String(err));
                }
            });
        } catch (err) {
            console.log("ocurrio un error: " + String(err));
        }
    });
//fin configurarion beebidas
// fin Bebidas


module.exports = router;