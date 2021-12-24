import mongoose from 'mongoose'

export const CREATED = 'CREATED'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const PREPARING = 'PREPARING'
export const PREPARED = 'PREPARED'
export const BUILDING = 'BUILDING'
export const BUILDED = 'BUILDED'
export const DEPLOYING = 'DEPLOYING'
export const DEPLOYED = 'DEPLOYED'
export const INITING = 'INITING'
export const INITED = 'INITED'
export const INTERRUPTED = 'INTERRUPTED'
export const FAILED = 'FAILED'
export const DONE = 'DONE'

const Schema = mongoose.Schema

const gameStateSchema = new Schema(
  {
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    status: {
      type: String,
      enum: [
        CREATED,
        FETCHING,
        FETCHED,
        PREPARING,
        PREPARED,
        BUILDED,
        BUILDING,
        DEPLOYING,
        DEPLOYED,
        INITING,
        INITED,
        INTERRUPTED,
        FAILED,
        DONE
      ],
      default: CREATED
    },
    status_history: { type: Array, default: [], select: false },
    context: { type: Object, default: {}, select: false },
    log: { type: Array, default: [], select: false },
    error: { type: Schema.Types.Mixed, default: null, select: false }
  },
  { timestamps: true }
)

export default mongoose.model('GameState', gameStateSchema)
