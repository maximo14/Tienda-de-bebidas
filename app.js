var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var app = express();

mongoose.connect("mongodb://localhost/tienda_bebidas");

var userSchemaJSON = {
    email: String,
    password: String
};

var user_schema = Schema(userSchemaJSON);
var User = mongoose.model("User",user_schema);

// Use native promises -- Nose porque es esto pero ahce que ande
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","pug");

app.get("/", (req, res) => {
    res.render("index");   
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/users",(req,res)=>{
    var user = new User({email: req.body.email, password: req.body.password});

    user.save(function(){
        res.send("Guardamos tus datos");
    });   
});

app.listen(3000);