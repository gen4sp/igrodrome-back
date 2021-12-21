const role = (rolesArray) => (req, res, next) => {
    if(!req.user) {
        return res.status(200).json({
            success: false,
            message: 'Сессия истекла',
            code: 'SESSION_EXPIRED'
        });
    }
    let authorized = false;

    rolesArray.some(role => {
        if(req.user.role_id === role){
            authorized = 1
            return
        }
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