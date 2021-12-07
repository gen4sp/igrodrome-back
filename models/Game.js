const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: {
        type: String
    },
    status: {
        type: Boolean
    },
    owner_id: {
        type: String
    },
    creator_id: {
        type: String
    },
    data: {
        type: String
    },
    file: {
        type: String
    },
}, {timestamps: true})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game