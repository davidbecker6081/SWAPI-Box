import React from 'react';
import './Card.css';
import Button from '../Button/Button'

const Card = ({ item, addToFavorites, removeFromFavorites }) => {

let favoriteClickEvent = item.hasBeenSelected ? () => removeFromFavorites(item)
                                         : () => addToFavorites(item)
let buttonText = item.hasBeenSelected ? 'Remove' : 'Add'
let cardClass = item.hasBeenSelected ? 'selected-card default-card' : 'default-card'

  const returnCard = () => {
    if (item.gender) {
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p>Species: {item.species}</p>
          <p>Height: {item.height}</p>
          <p>Homeworld: {item.planet}</p>
          <p>Population: {item.population}</p>
        </div>
      )
    }
    else if(item.gravity) {
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p>Terrain:</p>
          <p className="card-info">{item.terrain}</p>
          <p>Population:</p>
          <p className="card-info">{item.population}</p>
          <p>Climate:</p>
          <p className="card-info">{item.climate}</p>
          <p>Residents:</p>
          <p className="card-info">{item.residents}</p>
        </div>
      )
    }
    else if (item.crew){
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p>Model: </p>
          <p>{item.model}</p>
          <p>Class: </p>
          <p>{item.vehicle_class}</p>
          <p>Crew Size: </p>
          <p>{item.crew}</p>
          <p>Passengers: </p>
          <p>{item.passengers}</p>
        </div>
      )
    }

  }
  return(
    <div className="card-area">
      {returnCard()}
      <Button className="fav-btn"cardObj={item} clickEvent={favoriteClickEvent} btnText={buttonText} />
    </div>
  )
}

export default Card;
