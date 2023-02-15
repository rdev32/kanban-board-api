import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRouter from './routes/auth.routes'
import positsRouter from './routes/posit.routes'
import usersRouter from './routes/user.routes'

const app = express()

app.set('port', process.env.PORT || 5000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(authRouter)
app.use(positsRouter)
app.use(usersRouter)

export default app