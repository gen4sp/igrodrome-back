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

const getUserInfo = accessToken => {
  const client = github.client(accessToken)
  return new Promise((resolve, reject) => {
    client.get('/user', {}, function(err, status, data) {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

export default {
  auth,
  getUserInfo
}
