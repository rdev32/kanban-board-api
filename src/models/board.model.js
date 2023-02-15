import { Schema, model } from 'mongoose'

const boardSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  columns: [
    {
      name: {
        type: String,
        required: true
      },
      cards: {
        type: Array,
      }
    }
  ],
  versionKey: false
})

export default model('Board', boardSchema)