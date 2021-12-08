const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decode

        next()
    }
    catch(error) {
        if(error.name === 'TokenExpiredError'){
            res.status(200).json({
                message: 'Срок действия токена истек!'
            })
        }else{
            res.json({
                message: 'Ошибка аутентификации!'
            })
        }
    }
}

module.exports = authenticate