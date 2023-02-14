import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import posit from './routes/posit.routes'
import user from './routes/user.routes'

const app = express()

app.set('port', process.env.PORT || 5000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(posit)
app.use(user)

export default app