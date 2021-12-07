const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })

        user.save()
            .then(user => {
                res.json({
                    message: 'Пользователь успешно добавлен'
                })
            })
            .catch(error => {
                res.json({
                    message: 'Произошла ошибка!'
                })
            })
    })
}

const login = (req, res, next) => {
    let email = req.body.email,
        password = req.body.password

    User.findOne({$or: [{email}]})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, function (err, result) {
                    if(err){
                        res.json({
                            error: err
                        })
                    }

                    if(result){
                        let token = jwt.sign({name:user.name}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
                        res.json({
                            message: "Вход выполнен успешно",
                            token
                        })
                    }else{
                        res.json({
                            message: 'Пароль не соответствует'
                        })
                    }
                })
            }else{
                res.json({
                    message: "Пользователь не найден!"
                })
            }
        })
}

const user = (req, res, next) => {
    let userID = req.body.id

    User.findById(userID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
}

module.exports = {
    register,
    login,
    user
}