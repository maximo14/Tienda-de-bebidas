var Bebida = require("../models/bebidas");

module.exports = (req, res, next) => {
    Bebida.findById(req.params.id, (err, bebida) => {
        if (bebida != null) {
            console.log("encontre la imagen "+bebida.nombre);
            res.locals.bebida= bebida;
            next();
        }else{
            res.redirect("/");
        }
    });
}