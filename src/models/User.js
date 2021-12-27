const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String, select: false },
    role_id: { type: Number, required: true, default: 3 },
    github_id: { type: 'String', select: false },
    github_access_token: { type: 'String', select: false }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
