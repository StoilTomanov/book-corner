function isLogged() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Please log in' })
        }
    }
}

module.exports = {
    isLogged,
}