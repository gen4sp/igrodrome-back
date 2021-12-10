const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const authenticate = require('../middleware/authenticate')
const role = require('../middleware/role')

router.get('/', authenticate, role([1]), UserController.index)
router.post('/show', authenticate, role([1]), UserController.show)
router.post('/store', authenticate, role([1]), UserController.store)
router.post('/update', authenticate, role([1]), UserController.update)
router.post('/delete', authenticate, role([1]), UserController.destroy)

module.exports = router