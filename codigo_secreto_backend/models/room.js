const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  startingTeam: Boolean,
  cards: [{ word: String, team: Boolean, visible: Boolean }],
})

roomSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Room', roomSchema)
