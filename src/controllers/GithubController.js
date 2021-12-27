import githubApi from '../utils/githubApi'
import User from '../models/User'

const getRepositories = (req, res) => {
  return User.findOne({ _id: req.user.id })
    .select('+github_access_token')
    .lean()
    .then(user => {
      return githubApi.repos(user.github_access_token)
    })
    .then(list => {
      res.json({
        list
      })
    })
    .catch(err => {
      /***/ console.log(err)
      res.json({
        status: 'error'
      })
    })
}

const getRepositoryBranches = (req, res) => {
  return User.findOne({ _id: req.user.id })
    .select('+github_access_token')
    .lean()
    .then(user => {
      return githubApi.branches(user.github_access_token, req.query.repo)
    })
    .then(list => {
      res.json({
        list
      })
    })
    .catch(err => {
      /***/ console.log(err)
      res.json({
        status: 'error'
      })
    })
}

export default {
  getRepositories,
  getRepositoryBranches
}
