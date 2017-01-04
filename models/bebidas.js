var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/tienda_bebidas");

// Use native promises -- Nose porque es esto pero ahce que ande
mongoose.Promise = global.Promise;

//se pueden agregar validaciones a los equemas.. ver doc Mongoose validation
//se puede usar las que vienen con moonguse o hacer validaciones personalizadas
var bebida_schema = new Schema({
    nombre: String,
    precio: Number,
    fotoPath: String
});


var Bebida = mongoose.model("Bebida",bebida_schema);

//exporto el modulo para que pueda ser accesido desde cualquier parte
module.exports.Bebida = Bebida;