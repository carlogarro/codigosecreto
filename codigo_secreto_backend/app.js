const config = require('./utils/config')
const express = require('express')
// require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const roomsRouter = require('./controllers/rooms')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const path = require('path')

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/rooms', roomsRouter)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// app.use(middleware.unknownEndpoint)

app.use(middleware.errorHandler)

module.exports = app
