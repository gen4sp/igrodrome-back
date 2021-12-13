const Game = require('../models/Game')
const fs = require('fs')
const path = require('path')
const unzipper = require('unzipper')

// Confirmed games
const confirmed = (req, res, next) => {
    Game.find({status: 1}, function (err, games) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        } else {
            res.json({
                games
            })
        }
    })
}

// Creator games
const myGames = (req, res) => {
    Game.count({creator_id: req.user.id}, function (err, total) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        } else {
            Game.find({creator_id: req.user.id}, function (err, games) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: 'Что-то пошло не так!'
                    })
                } else {
                    res.json({
                        games,
                        total
                    })
                }
            })
        }
    })
}

// All games
const index = (req, res, next) => {
    Game.count()
        .then(total => {
            Game.find()
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
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        })
}

// Create
const store = (req, res, next) => {

    let game = new Game({
        title: req.body.title,
        status: req.body.status === 'true',
        creator_id: req.body.creator_id,
        owner_id: req.body.owner_id,
    })

    if (req.file) {
        game.file = req.file.path
    } else {
        res.json({
            status: 'error',
            message: 'Пожалуйста загрузите файл!'
        })
        return
    }

    game.save()
        .then(game => {
            if (game.file) {
                fs.createReadStream(req.file.path).pipe(unzipper.Extract({path: 'games/' + game.slug}))

                // fs.readFile('games/'+game.slug+'/index.html', 'utf8', function (err,data) {
                //     if (err) {
                //         return console.log(111, err);
                //     }
                //     let result = data.replace(/src="js/g, 'src="http://localhost:4000/games/'+game.slug+'/js');
                //
                //     fs.writeFile('games/'+game.slug+'/index.html', result, 'utf8', function (err) {
                //         if (err) return console.log(222 ,err);
                //     });
                //     console.log(9999)
                // });
            }
            res.json({
                status: 'success',
                message: 'Игра успешно добавлена'
            })
        })
        .catch(error => {
            console.log(error)
            res.json({
                status: 'error',
                message: 'Произошла ошибка!'
            })
        })
}

// Update
const update = (req, res, next) => {
    let gameID = req.body.id,
        updateData = {
            title: req.body.title,
            status: req.body.status === 'true',
            creator_id: req.body.creator_id,
            owner_id: req.body.owner_id,
        }

    if (req.file) {
        updateData.file = req.file.path
    }

    Game.findByIdAndUpdate(gameID, {$set: updateData},{upsert: true, new: true}, function (err, game) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Произошла ошибка!'
            })
        } else {
            if (req.file) {
                fs.createReadStream(req.file.path).pipe(unzipper.Extract({path: 'games/' + game.slug}))
            }
            res.json({
                status: 'success',
                message: 'Игра успешно обновлена'
            })
        }
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

// Get game html
const getGame = (req, res) => {
    const filePath = path.join(__dirname + './../games/' + req.query.slug + '/index.html');
    res.sendFile(filePath);
}

// Check status
const checkStatus = (req, res) => {
    Game.find({slug: req.query.slug}, function (err, game) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Что-то пошло не так!'
            })
        } else {
            res.json({
                game
            })
        }
    })
}

module.exports = {
    confirmed,
    myGames,
    index,
    show,
    store,
    update,
    destroy,
    getGame,
    checkStatus
}