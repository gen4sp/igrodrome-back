const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const authenticate = require('../middleware/authenticate')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/logout', authenticate, AuthController.logout)
router.get('/details', authenticate, AuthController.user)
router.post('/oauth', AuthController.oAuthConnect)
router.put('/oauth', authenticate, AuthController.oAuthConnect)

module.exports = router
