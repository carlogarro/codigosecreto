import React from 'react'

const Square = ({ card, flipCard }) => {
  let flippedStyle = 'card'
  let colorStyle = 'card__face card__face--back'
  if (card.flipped) {
    flippedStyle = 'card is-flipped'
    console.log('team: ', card.team)

    if (card.team === false) {
      colorStyle = 'card__face card__face--back--blue'
    } else {
      colorStyle = 'card__face card__face--back--red'
    }
  }

  return (
    <div className="scene scene--card">
      <div className={flippedStyle} onClick={flipCard}>
        <div className="card__face card__face--front">{card.word}</div>
        <div className={colorStyle}>{card.word}</div>
      </div>
    </div>
  )
}

export default Square
