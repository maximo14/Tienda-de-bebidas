var express = require("express");
var router = express.Router();
var User = require("../models/user").User;

router.get("/",(req,res)=>{
    res.render("admin/panel");
});

module.exports = router;