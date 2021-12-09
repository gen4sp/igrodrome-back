const Game = require('../models/Game')

// All games
const index = (req, res, next) => {
    Game.find()
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

// Single
const show = (req, res, next) => {
    let gameID = req.body.id

    Game.findById(gameID)
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

    let game = new Game({
        title: req.body.title,
        status: req.body.status,
        creator_id: req.body.creator_id,
        owner_id: req.body.owner_id,
    })

    if(req.file){
        game.file = req.file.path
    }else{
        res.json({
            message: 'Пожалуйста загрузите файл!'
        })
    }

    game.save()
        .then(user => {
            res.json({
                message: 'Игра успешно добавлена'
            })
        })
        .catch(error => {
            res.json({
                message: 'Произошла ошибка!'
            })
        })
}

// Update
const update = (req, res, next) => {
    let gameID = req.body.id

    let updateData = {
        title: req.body.title,
        status: req.body.status,
        creator_id: req.body.creator_id,
        owner_id: req.body.owner_id,
    }

    if(req.file){
        updateData.file = req.file.path
    }

    Game.findByIdAndUpdate(gameID, {$set: updateData})
        .then(() => {
            res.json({
                message: 'Игра успешно обновлена'
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
    let gameID = req.body.id

    Game.findByIdAndRemove(gameID)
        .then(response => {
            res.json({
                message: 'Игра успешно удалена'
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