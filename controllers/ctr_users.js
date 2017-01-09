var express = require("express");
var router = express.Router();
var User = require("../models/user").User;

router.get("/login",(req,res)=>{
    res.render("users/login");
});

router.post("/login",(req, res)=>{
    User.findOne({username:req.fields.username, password: req.fields.password},(err,docs)=>{
        if (err){
            console.log(err);
        }else{
            console.log(docs);
            req.session.usuario = docs;
            res.redirect("/");
        }        
    });
});

router.get("/register", (req, res) => {
    res.render("users/register");
});

router.post("/register", (req, res) => {
    var user = new User({
        username: req.fields.username,
        email: req.fields.email,
        password: req.fields.password,
        password_confirmation: req.fields.passwordrepit
    });

    //guardado de usuarios implementando promesas
    user.save().then(us=>{       
        res.send("guardamos el usuario correctamente");
    },err =>{
        if(err){
            console.log(String(err));
        }
    });
});

module.exports = router;