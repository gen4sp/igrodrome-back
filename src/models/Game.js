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
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    data: { type: String },
    source_type: { type: String, enum: ['file', 'github'], default: 'github' },
    github_repo: { type: String },
    github_branch: { type: String },
    file: { type: String }
  },
  { timestamps: true }
)

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
