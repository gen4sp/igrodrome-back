const express = require('express')
const router = express.Router()

const GithubController = require('../controllers/GithubController')
const authenticate = require('../middleware/authenticate')
const role = require('../middleware/role')

router.get('/repos', authenticate, role([2]), GithubController.default.getRepositories)
router.get('/branches', authenticate, role([2]), GithubController.default.getRepositoryBranches)

module.exports = router
