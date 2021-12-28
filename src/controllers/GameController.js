const Game = require('../models/Game')
const fs = require('fs')
const path = require('path')
const queue = require('../queue')

// Confirmed games
const confirmed = (req, res, next) => {
  Game.find({ status: 1 }, function(err, games) {
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
  Game.count({ creator: req.user.id }, function(err, total) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      })
    } else {
      Game.find({ creator: req.user.id }, function(err, games) {
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
  Game.count().then(total => {
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
    source_type: req.body.source_type,
    github_repo: req.body.github_repo,
    github_branch: req.body.github_branch,
    creator: req.user.id,
    owner: req.user.id
  })

  if (req.body.source_type === 'file') {
    if (req.file) {
      game.file = req.file.path
    } else {
      res.json({
        status: 'error',
        message: 'Пожалуйста загрузите файл!'
      })
      return
    }
  }

  game
    .save()
    .then(game => {
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
      source_type: req.body.source_type,
      github_repo: req.body.github_repo,
      github_branch: req.body.github_branch
    }

  if (req.file) {
    updateData.file = req.file.path
  }

  Game.findByIdAndUpdate(gameID, { $set: updateData }, { upsert: true, new: true }, function(
    err,
    game
  ) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Произошла ошибка!'
      })
    } else {
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

const build = (req, res, next) => {
  queue.default
    .runGameBuild(req.params.id)
    .then(() => {
      res.json({
        status: 'success'
      })
    })
    .catch(err => {
      /***/ console.log(err)
      res.json({
        status: 'error',
        message: err
      })
    })
}

const getGameState = (req, res, next) => {
  Game.findById(req.params.id)
    .populate('state', 'status log error')
    .lean()
    .then(game => {
      res.json({
        status: 'success',
        game
      })
    })
    .catch(err => {
      /***/ console.log(err)
      res.json({
        status: 'error'
      })
    })
}

// Get game html
const getGame = (req, res) => {
  const filePath = path.join(__dirname + './../games/' + req.query.slug + '/index.html')
  res.sendFile(filePath)
}

// Check status
const checkStatus = (req, res) => {
  Game.find({ slug: req.query.slug }, function(err, game) {
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
  build,
  getGameState,
  getGame,
  checkStatus
}
