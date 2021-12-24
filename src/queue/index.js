import mongoose from 'mongoose'
import queue from 'mongo-queue'
import Game from '../models/Game'
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
  runGameBuild(gameId) {
    const gameState = new GameState({
      game: gameId
    })
    return gameState.save().then(gameState => {
      return Game.updateOne({ _id: gameId }, { state: gameState._id }).then(() => {
        return new Promise((resolve, reject) => {
          db.enqueue('BuildJob', gameState._id, err => {
            if (err) {
              reject(err)
              return
            }
            /***/ console.log(`Build job added to queue`)
            resolve(gameState)
          })
        })
      })
    })
  }
}
