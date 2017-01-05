//cargamos los fremaworks, el 'require' es como el import en java.
var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var session = require("express-session");
var mongoose = require("mongoose");
var router_users = require("./controllers/ctr_users");
var router_admin = require("./controllers/ctr_admin");
var admin_acces_middleware = require("./middlewares/admin_acces");

        //para la conexion a mongo db
mongoose.connect("mongodb://localhost/tienda_bebidas");

// Use native promises -- Nose porque es esto pero ahce que ande
mongoose.Promise = global.Promise;
        // fin de mongo db

// uso express
var app = express();

                ///Todos los middlewares////
//sirvo los archivos de la carpeta public para poder hacer uso de ellos, (el css, js, etc)
app.use(express.static('public'));

//funcion del body parser para el manejo de JSON
app.use(bodyParser.json());

//hago que express use body-parser para poder acceder a los elementos del html
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ //se puede cambiar esto por cookie session
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
app.use("/admin",admin_acces_middleware);//midleware para controlar el acceso de administrador
app.use("/admin",router_admin);

//se inicia la aplicacion para que escuche en el puerto 3000 
app.listen(3000);