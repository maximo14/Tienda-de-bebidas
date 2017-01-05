module.exports = (req, res, next) => {
    try {
        if (req.session.usuario.username != 'admin') {
            res.redirect("/");
        } else {
            next();
        }
    } catch (err) {
        res.redirect("/");
    }

}