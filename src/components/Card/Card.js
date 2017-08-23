import React from 'react';
import './Card.css';
import FavButton from '../FavButton/FavButton'

const Card = ({ item, addToFavorites, removeFromFavorites, hasBeenSelected }) => {

console.log(hasBeenSelected)
let favoriteClickEvent = hasBeenSelected ? () => removeFromFavorites()
                                         : () => addToFavorites()

let buttonText = hasBeenSelected ? 'Remove' : 'Add'

  const returnCard = () => {
    if (item.gender) {
      return (
        <div>
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
        <div>
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
        <div>
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
      <FavButton cardObj={item} clickEvent={favoriteClickEvent} btnText={buttonText} />
    </div>
  )
}

export default Card;
