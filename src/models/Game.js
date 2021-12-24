const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const gameSchema = new Schema(
  {
    title: { type: String },
    slug: { type: String, slug: 'title', unique: true },
    status: { type: Boolean },
    state: { type: Schema.Types.ObjectId, ref: 'GameState' },
    owner_id: { type: String },
    creator_id: { type: String },
    data: { type: String },
    file: { type: String }
  },
  { timestamps: true }
)

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
