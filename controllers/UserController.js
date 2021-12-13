const User = require('../models/User')
const bcrypt = require('bcryptjs')

// All users
const index = (req, res) => {
    User.count()
        .then(total => {
            User.find()
                .then(response => {
                    res.json({
                        response,
                        total
                    })
                })
                .catch(error => {
                    res.json({
                        status: 'error',
                        message: 'Что-то пошло не так!'
                    })
                })
        })
}

// Single user
const show = (req, res) => {
    let userID = req.body.id

    User.findById(userID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        })
}

// Create
const store = (req, res) => {
    User.find({email: req.body.email}, function (err, users) {
        if (!users.length) {
            bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
                if (err) {
                    res.json({
                        error: err
                    })
                }

                let user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPass,
                    role_id: req.body.role_id
                })

                user.save()
                    .then(user => {
                        res.json({
                            status: 'success',
                            message: 'Вы успешно зарегистрировалтсь'
                        })
                    })
                    .catch(error => {
                        res.json({
                            status: 'error',
                            message: 'Произошла ошибка!'
                        })
                    })
            })
        } else {
            res.json({
                status: 'error',
                message: 'Адрес электронной почты уже существует'
            })
        }
    });
}

// Update
const update = (req, res) => {
    let userID = req.body.id,
        updateData = {
            name: req.body.name,
            email: req.body.email,
            role_id: req.body.role_id
        },
        email = req.body.email
    User.find({_id: userID}).then(user => {
        if (user[0].email !== email) {
            User.find({email}, function (err, users) {
                if (users.length) {
                    res.json({
                        status: 'error',
                        message: 'Адрес электронной почты уже существует'
                    })
                }
            });
        }

        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            updateData.password = bcrypt.hashSync(req.body.password, salt)
        }

        User.findByIdAndUpdate(userID, {$set: updateData})
            .then(() => {
                res.json({
                    status: 'success',
                    message: 'Пользователь успешно обновлен'
                })
            })
            .catch(error => {
                res.json({
                    status: 'error',
                    message: 'Произошла ошибка!'
                })
            })
    })
}

// Delete
const destroy = (req, res) => {
    let userID = req.body.id

    User.findByIdAndRemove(userID)
        .then(response => {
            res.json({
                status: 'success',
                message: 'Пользователь успешно удален'
            })
        })
        .catch(error => {
            res.json({
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}