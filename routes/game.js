const express = require('express')
const router = express.Router()

const GameController = require('../controllers/GameController')
const role = require('../middleware/role')
const authenticate = require('../middleware/authenticate')
const upload = require('../middleware/upload')

router.get('/', GameController.index) // authenticate, role(['Admin']),
router.post('/show', GameController.show)
router.post('/store', upload.single('file'), GameController.store)
router.post('/update', upload.single('file'), GameController.update)
router.post('/delete', GameController.destroy)

module.exports = router