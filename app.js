//cargamos los fremaworks, el 'require' es como el import en java.
var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;

// uso express
var app = express();

//sirvo los archivos de la carpeta public para poder hacer uso de ellos, (el css, js, etc)
app.use(express.static('public'));

//funcion del body parser para el manejo de JSON
app.use(bodyParser.json());

//hago que express use body-parser para poder acceder a los elementos del html
app.use(bodyParser.urlencoded({ extended: true }));

//seteo el motor de plantillas, en este caso pug (antes de llamaba jade)
app.set("view engine", "pug");

//se asigna la pagina index al la pag principal
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

//se encarga de registar a los usuarios
app.post("/users", (req, res) => {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.passwordrepit
    });

    user.save(function () {
        res.send("Guardamos tus datos");
    });
});

//se inicia la aplicacion para que escuche en el puerto 3000
app.listen(3000);