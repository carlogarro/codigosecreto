var _ = require('underscore')
const roomsRouter = require('express').Router()
const Room = require('../models/room')

roomsRouter.get('/', (request, response) => {
  Room.find({}).then((rooms) => {
    response.json(rooms.map((room) => room.toJSON()))
  })
})

roomsRouter.get('/:id', (request, response, next) => {
  Room.findById(request.params.id)
    .then((room) => {
      if (room) {
        response.json(room.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

roomsRouter.post('/', (request, response, next) => {
  const words = [
    'gato',
    'perro',
    'pájaro',
    'avión',
    'casa',
    'montaña',
    'pez',
    'mar',
    'verano',
    'otoño',
    'canción',
    'pirata',
    'pierna',
    'cabeza',
    'brazo',
    'ordenador',
    'mesa',
    'silla',
    'invierno',
    'primavera',
    'armario',
    'cocina',
    'ascensor',
    'corazón',
    'hoja',
    'árbol',
  ]
  startingTeam = Math.floor(Math.random() * 2) // blue 0 red 1

  let teams = Array(25)

  if (startingTeam === 0) {
    teams.fill(0, 0, 13).fill(1, 13)
  } else {
    teams.fill(1, 0, 13).fill(0, 13)
  }

  mixedTeams = _.shuffle(teams)
  sampledWords = _.sample(words, 25)
  const room = new Room({
    startingTeam: startingTeam,
    cards: _.zip(sampledWords, mixedTeams).map(([word, team]) => ({
      word: word,
      team: team,
      visible: 0,
    })),
  })

  room
    .save()
    .then((savedRoom) => {
      response.json(savedRoom.toJSON())
    })
    .catch((error) => next(error))
})

// app.put('/:id/:id', (request, response, next) => {
//   const body = request.body

//   const note = {
//     content: body.content,
//     important: body.important,
//   }

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedNote) => {
//       response.json(updatedNote.toJSON())
//     })
//     .catch((error) => next(error))
// })

module.exports = roomsRouter
