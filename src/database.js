import 'dotenv/config'
import mongoose from 'mongoose'

const url = process.env.MONGODB_URI;

(async () => {
  try {
    mongoose.set('strictQuery', false)
    const db = await mongoose.connect(url)
    console.log('Database connected to', db.connection.name)
  } catch (error) {
    console.error(error)
  }
})()