const config = require('./utils/config')
const express = require('express')
const app = express()

const cors = require('cors')
const logger = require('./utils/logger')

// Routers
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const signinRouter = require('./controllers/signin')

// Middleware
const errorHandler = require('./middleware/handleErrors')
const unknownEndpoint = require('./middleware/notFound')
const requestLogger = require('./middleware/requestLogger')

const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/signin', signinRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
