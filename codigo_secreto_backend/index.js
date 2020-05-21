const app = require('./app')
const http = require('http')

const config = require('./utils/config')
const logger = require('./utils/logger')
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log(
    'User',
    socket.id,
    'connected,',
    'total clients:',
    io.engine.clientsCount
  )

  socket.on('flippedCard', (id) => {
    socket.broadcast.emit('flippedCard', id)
    // console.log('id:', id)
  })
  // socket.on('flippedCard', (id) => {
  //
  //   console.log('id:', id)
  // })
  socket.on('disconnect', () => {
    console.log('client disconnect...', socket.id)
  })
})
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
