const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on('error', err => {
  console.log(err)
}).once('open', () => {
  console.log('Database Connected')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {})

// Routes
const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const GameRoute = require('./routes/game')
const GithubRoute = require('./routes/github')

app.use('/api', AuthRoute)
app.use('/api/users', UserRoute)
app.use('/api/games', GameRoute)
app.use('/api/github', GithubRoute)

app.use((req, res, next) => {
  const filePath = path.join(__dirname + '/404.html')
  return res.sendFile(filePath)
})

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message
  })
})
