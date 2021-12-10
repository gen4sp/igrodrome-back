const express = require('express')
const router = express.Router()

const GameController = require('../controllers/GameController')
const role = require('../middleware/role')
const authenticate = require('../middleware/authenticate')
const upload = require('../middleware/upload')

router.get('/confirmed', GameController.confirmed)
router.get('/my-games',  authenticate, role([2]),GameController.myGames)
router.get('/', authenticate, role([1]), GameController.index)
router.post('/show', authenticate, role([1, 2]), GameController.show)
router.post('/store', authenticate, role([1, 2]), upload.single('file'), GameController.store)
router.post('/update', authenticate, role([1, 2]), upload.single('file'), GameController.update)
router.post('/delete', authenticate, role([1, 2]), GameController.destroy)
router.get('/get-game', GameController.getGame)

module.exports = router