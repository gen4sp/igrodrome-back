const User = require('../models/User')
const bcrypt = require('bcryptjs')

// All users
const index = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'Что-то пошло не так!'
            })
        })
}

// Single user
const show = (req, res, next) => {
    let userID = req.body.id

    User.findById(userID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'Что-то пошло не так!'
            })
        })
}

// Create
const store = (req, res, next) => {
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
            role: req.body.role
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

// Update
const update = (req, res, next) => {
    let userID = req.body.id

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    if(req.body.password){
        const salt = bcrypt.genSaltSync(10);
        updateData.password = bcrypt.hashSync(req.body.password, salt)
    }

    User.findByIdAndUpdate(userID, {$set: updateData})
        .then(() => {
            res.json({
                message: 'Пользователь успешно обновлен'
            })
        })
        .catch(error => {
            res.json({
                message: 'Произошла ошибка!'
            })
        })
}

// Delete
const destroy = (req, res, next) => {
    let userID = req.body.id

    User.findByIdAndRemove(userID)
        .then(response => {
            res.json({
                message: 'Пользователь успешно удален'
            })
        })
        .catch(error => {
            res.json({
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