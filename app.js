var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;

var app = express();


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