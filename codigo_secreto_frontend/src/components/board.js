import React from 'react'
import Square from './square'
const Board = ({ cards, flipCard }) => {
  const items = cards.map((card, index) => (
    <Square key={index} card={card} flipCard={() => flipCard(card.id)} />
  ))

  return <div className="board">{items}</div>
}

export default Board
