const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            if (err) throw err;
            console.log(decoded)
        })

        User.findOne({_id: decode.id}).then(user => {
            console.log(user)
            req.user = user
        });

        next()
    }
    catch(error) {
        res.json({
            message: 'Ошибка аутентификации!'
        })
    }
}

module.exports = authenticate