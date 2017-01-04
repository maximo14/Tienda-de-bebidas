var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//se pueden agregar validaciones a los equemas.. ver doc Mongoose validation
//se puede usar las que vienen con moonguse o hacer validaciones personalizadas
var bebida_schema = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    //fotoPath: String --> agregar en algun momento
});


var Bebida = mongoose.model("Bebida",bebida_schema);

//exporto el modulo para que pueda ser accesido desde cualquier parte
module.exports = Bebida;