import React, { useState, useEffect } from 'react'
import roomService from '../services/rooms'
import { useRouteMatch } from 'react-router-dom'
import Board from './board'
import io from 'socket.io-client'

const ENDPOINT = 'http://raspberrypi2:3001'
// const ENDPOINT = '/'
const socket = io.connect(ENDPOINT)

const Room = () => {
  const match = useRouteMatch('/rooms/:id')
  const roomId = match.params.id

  const drawCards = Array(25).fill({})
  const [cards, setCards] = useState(drawCards)

  //5ec0e1eca442f10378bf5982
  useEffect(() => {
    console.log('effect')
    roomService.get(roomId).then((response) => {
      console.log('promise fulfilled')

      setCards(
        response.data.cards.map((card) => ({
          word: card.word,
          flipped: card.visible,
          team: card.team,
          id: card._id,
        }))
      )
    })
  }, [])

  // useEffect(() => {
  //   const onFlip = (id) => {
  //     setCards(
  //       cards.map((card) =>
  //         card.id !== id ? card : { ...card, flipped: true }
  //       )
  //     )
  //   }
  //   socket.on('flippedCard', onFlip)
  // }, [])

  const printId = (id) => {
    console.log('id:', id)
    const card = cards.find((card) => card.id === id)
    const flippedCard = {
      ...card,
      flipped: true,
    }

    console.log(flippedCard)

    setCards(cards.map((card) => (card.id !== id ? card : flippedCard)))
  }

  socket.on('flippedCard', printId)

  const flipCard = async (id) => {
    setCards(
      cards.map((card) =>
        card.id !== id
          ? card
          : {
              ...card,
              flipped: true,
            }
      )
    )
    socket.emit('flippedCard', id)
    socket.off(printId)
  }

  return (
    <div className="game">
      <div className="header">
        <h1>Código Secreto</h1>
      </div>
      <div className="game-board">
        <Board cards={cards} flipCard={flipCard} />
      </div>
    </div>
  )
}

export default Room
