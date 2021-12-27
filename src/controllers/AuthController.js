const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const githubApi = require('../utils/githubApi')

const register = (req, res, next) => {
  User.find({ email: req.body.email }, function(err, users) {
    if (!users.length) {
      bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
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

        user
          .save()
          .then(user => {
            res.json({
              status: 'success',
              message: 'Вы успешно зарегистрировались'
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
  })
}

const login = (req, res, next) => {
  let email = req.body.email,
    password = req.body.password

  User.findOne({ $or: [{ email }] })
    .select('+password')
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, function(err, result) {
          if (err) {
            return res.json({
              error: err
            })
          }

          if (result) {
            res.json({
              status: 'success',
              message: 'Вход выполнен успешно',
              token: getAccessToken(user)
            })
          } else {
            res.json({
              status: 'error',
              message: 'Пароль не соответствует'
            })
          }
        })
      } else {
        res.json({
          status: 'error',
          message: 'Пользователь не найден!'
        })
      }
    })
}

const oAuthConnect = (req, res, next) => {
  const providers = ['github']
  const { provider, code } = req.body

  if (!provider || !code) {
    return res.json({
      status: 'error',
      message: 'Some required parameters are not defined'
    })
  }

  if (!providers.includes(provider)) {
    return res.json({
      status: 'error',
      message: 'Unknown provider'
    })
  }

  if (provider === 'github') {
    let accessToken
    let userInfo
    let user
    githubApi.default
      .auth(code)
      .then(token => {
        accessToken = token
        return githubApi.default.userInfo(accessToken)
      })
      .then(data => {
        userInfo = data
      })
      .then(() => {
        if (req.user) {
          // just connect to exists account
          return User.updateOne(
            { _id: req.user.id },
            {
              github_id: userInfo.id,
              github_access_token: accessToken
            }
          )
        } else {
          // create account for new github_id
          return User.findOne({ github_id: userInfo.id })
            .lean()
            .then(userFindResult => {
              if (!userFindResult) {
                user = new User({
                  name: userInfo.login,
                  github_id: userInfo.id,
                  github_access_token: accessToken,
                  role_id: req.body.role_id
                })
                return user.save()
              }
              user = userFindResult
            })
        }
      })
      .then(() => {
        if (req.user) {
          return res.json({
            status: 'success'
          })
        } else {
          return res.json({
            status: 'success',
            message: 'Вход выполнен успешно',
            token: getAccessToken(user)
          })
        }
      })
      .catch(err => {
        res.json({
          status: 'error',
          message: err.message
        })
      })
  }
}

const getAccessToken = user => {
  return jwt.sign({ id: user._id, role_id: user.role_id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '72h'
  })
}

const user = (req, res, next) => {
  return User.findOne({ _id: req.user.id })
    .lean()
    .then(user => {
      res.json({
        user: {
          id: user._id,
          ...user
        }
      })
    })
}

const logout = (req, res) => {
  return res.status(200).json({
    message: 'Успешный выход из системы'
  })
}

module.exports = {
  register,
  login,
  logout,
  user,
  getAccessToken,
  oAuthConnect
}
