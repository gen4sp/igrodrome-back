import mongoose from 'mongoose'
import queue from 'mongo-queue'
import GameJob from '../models/GameJob'

const db = new queue.Connection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME
})

db.on('error', err => {
  console.log(err)
})

db.on('connected', () => {
  /***/ console.log('Queue connected')
})

export default {
  createGameJob(gameId) {
    const gameJob = new GameJob({
      game_id: gameId
    })
    return gameJob.save().then(gameJob => {
      return new Promise((resolve, reject) => {
        db.enqueue('GameJob', gameJob._id, err => {
          if (err) {
            reject(err)
            return
          }
          /***/ console.log(`Queue job added`)
          resolve(gameJob)
        })
      })
    })
  }
}
