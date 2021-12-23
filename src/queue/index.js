import mongoose from 'mongoose'
import queue from 'mongo-queue'
import GameState from '../models/GameState'

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
  runGameJob(gameId) {
    const gameState = new GameState({
      game_id: gameId
    })
    return gameState.save().then(gameState => {
      return new Promise((resolve, reject) => {
        db.enqueue('GameJob', gameState._id, err => {
          if (err) {
            reject(err)
            return
          }
          /***/ console.log(`Game job added to queue`)
          resolve(gameState)
        })
      })
    })
  }
}
