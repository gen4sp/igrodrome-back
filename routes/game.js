const express = require('express')
const router = express.Router()

const GameController = require('../controllers/GameController')
const role = require('../middleware/role')
const authenticate = require('../middleware/authenticate')
const upload = require('../middleware/upload')

router.get('/', GameController.index)
router.post('/show', authenticate, role([1]), GameController.show)
router.post('/store', authenticate, role([1]), upload.single('file'), GameController.store)
router.post('/update', authenticate, role([1]), upload.single('file'), GameController.update)
router.post('/delete', authenticate, role([1]), GameController.destroy)

module.exports = router