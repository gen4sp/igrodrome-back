import github from 'octonode'

github.auth.config({
  id: process.env.GITHUB_CLIENT_ID,
  secret: process.env.GITHUB_CLIENT_SECRET
})

const auth = code => {
  return new Promise((resolve, reject) => {
    github.auth.login(code, function(err, token) {
      if (err) {
        /***/ console.log(err)
        reject(err)
        return
      }
      resolve(token)
    })
  })
}

const userInfo = accessToken => {
  const client = github.client(accessToken)
  return new Promise((resolve, reject) => {
    client.get('/user', {}, function(err, status, data) {
      if (err) {
        /***/ console.log(err)
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

const repos = accessToken => {
  const client = github.client(accessToken)
  const ghme = client.me()
  return new Promise((resolve, reject) => {
    ghme.repos(0, 100, function(err, data) {
      if (err) {
        /***/ console.log(err)
        reject(err)
        return
      }
      resolve(
        data.map(item => ({
          id: item.id,
          name: item.full_name,
          default_branch: item.default_branch
        }))
      )
    })
  })
}

const branches = (accessToken, repoName) => {
  const client = github.client(accessToken)
  const ghrepo = client.repo(repoName)
  return new Promise((resolve, reject) => {
    ghrepo.branches(0, 100, function(err, data) {
      if (err) {
        /***/ console.log(err)
        reject(err)
        return
      }
      resolve(
        data.map(item => ({
          name: item.name
        }))
      )
    })
  })
}

export default {
  auth,
  userInfo,
  repos,
  branches
}
