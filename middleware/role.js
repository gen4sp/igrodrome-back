const role = (rolesArray) => (req, res, next) => {
    console.log(req.user)
    if(!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Session expired',
            code: 'SESSION_EXPIRED'
        });
    }
    let authorized = false;

    rolesArray.forEach(role => {
        authorized = req.user.role === role;
    })
    if(authorized) {
        return next();
    }
    return res.status(401).json({
        success: false,
        message: 'Unauthorized',
    })
}

module.exports = role