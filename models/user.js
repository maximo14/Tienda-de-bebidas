var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/tienda_bebidas");

// Use native promises -- Nose porque es esto pero ahce que ande
mongoose.Promise = global.Promise;
var user_schema = new Schema({
    email: String,
    password: String
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;