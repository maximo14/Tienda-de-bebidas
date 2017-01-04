module.exports= (req, res, next)=> {
    if(req.session.usuario.username !='admin' ){
        res.redirect("/");
    }else{
        next();
    }
}