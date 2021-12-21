import mongoose from 'mongoose'

export const CREATED = 'CREATED'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const INTERRUPTED = 'INTERRUPTED'

const Schema = mongoose.Schema

const gameJobSchema = new Schema(
  {
    game_id: { type: Schema.Types.ObjectId, ref: 'Game' },
    state: { type: String, enum: [CREATED, FETCHING, FETCHED, INTERRUPTED], default: CREATED },
    state_history: [{ type: String }],
    log: [{ type: String }],
    error: { type: String, default: null },
    interrupt: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export default mongoose.model('GameJob', gameJobSchema)