var express = require("express");

var app = express();
app.set("view engine","pug");

app.get("/", (req, res) => {
    res.render("index",{variable: "soy putita"});   
})
app.listen(3000);