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
          <h3>Name : {item.name}</h3>
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
          <h3>Name: {item.name}</h3>
          <p>Terrain: {item.terrain}</p>
          <p>Population: {item.population}</p>
          <p>Climate: {item.climate}</p>
          <p>Residents: {item.residents}</p>
        </div>
      )
    }
    else if (item.crew){
      return (
        <div className={cardClass}>
          <h3>Name: {item.name}</h3>
          <p>Model: {item.model}</p>
          <p>Class: {item.vehicle_class}</p>
          <p>Crew Size: {item.crew}</p>
          <p>Passengers: {item.passengers}</p>
        </div>
      )
    }

  }
  return(
    <div>
      {returnCard()}
      <Button cardObj={item} clickEvent={favoriteClickEvent} btnText={buttonText} />
    </div>
  )
}

export default Card;
