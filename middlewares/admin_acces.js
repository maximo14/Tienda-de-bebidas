module.exports = (req, res, next) => {
    try {
        if (typeof req.session.usuario === 'undefined' ||
            req.session.usuario.username != 'admin') {
            console.log("entre por el if");
            res.redirect("/");
        } else {
            next();
        }
    } catch (err) {
        res.redirect("/");
    }
}