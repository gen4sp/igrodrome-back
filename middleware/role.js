const role = (rolesArray) => (req, res, next) => {
    if(!req.user) {
        return res.status(200).json({
            success: false,
            message: 'Сессия истекла',
            code: 'SESSION_EXPIRED'
        });
    }
    let authorized = false;

    rolesArray.forEach(role => {
        authorized = req.user.role_id === role;
    })
    if(authorized) {
        return next();
    }
    return res.status(200).json({
        success: false,
        message: 'Неавторизованный',
    })
}

module.exports = role