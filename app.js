var express = require("express");
var bodyParser = require("body-parser");
var app = express();



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","pug");

app.get("/", (req, res) => {
    res.render("index");   
})

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/users",(req,res)=>{
    console.log("Email: "+req.body.email);
    console.log("Constraseña: "+req.body.password);
    res.send("resibimos tus datos");
});

app.listen(3000);