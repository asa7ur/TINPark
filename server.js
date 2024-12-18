import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

// routers
import vehicleRouter from './routes/vehicleRouter.js'
import zoneRouter from './routes/zoneRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'

// public
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.static(path.resolve(__dirname, './client/dist')))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' })
})

// checking for errors

app.use('/api/v1/vehicles', authenticateUser, vehicleRouter)
app.use('/api/v1/zones', authenticateUser, zoneRouter)
app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/auth', authRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'))
})

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

// connecting to MongoDB

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(5100, () => {
    console.log(`server running on PORT ${port}`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
