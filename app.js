//cargamos los fremaworks, el 'require' es como el import en java.
var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var session = require("express-session");
var router_users = require("./controllers/ctr_users");

// uso express
var app = express();

                ///Todos los middlewares////
//sirvo los archivos de la carpeta public para poder hacer uso de ellos, (el css, js, etc)
app.use(express.static('public'));

//funcion del body parser para el manejo de JSON
app.use(bodyParser.json());

//hago que express use body-parser para poder acceder a los elementos del html
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'asa84f1ss',
  resave: false,
  saveUninitialized: false  
}))


                ///Fin de los middlewares/////


//seteo el motor de plantillas, en este caso pug (antes de llamaba jade)
app.set("view engine", "pug");

//se asigna la pagina index al la pag principal
app.get("/", (req, res) => {
    console.log(req.session.usuario);
    res.render("index");
});


//rutas modulares
app.use("/users",router_users);
//se inicia la aplicacion para que escuche en el puerto 3000
app.listen(3000);