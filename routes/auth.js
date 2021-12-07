const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const authenticate = require('../middleware/authenticate')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/user', authenticate, AuthController.user)

module.exports = router