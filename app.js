var express = require("express");

var app = express();
app.use(express.static('public'));
app.set("view engine","pug");

app.get("/", (req, res) => {
    res.render("index");   
})
app.listen(3000);