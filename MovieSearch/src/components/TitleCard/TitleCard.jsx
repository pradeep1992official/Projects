import React, { useEffect, useRef } from 'react'
import "./TitleCard.css"
import cards_data from "../../assets/cards/Cards_data"

function TitleCard({title, category}) {
  const cardsRef = useRef();

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  return (
    <div className='titlecard'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image}></img>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCard