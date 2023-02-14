import { Schema, model } from 'mongoose'

const positSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  versionKey: false
})

export default model('Posit', positSchema)