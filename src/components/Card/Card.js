import React from 'react';
import './Card.css';


const Card = ({ item }) => {
  
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
      <button>Favs</button>
    </div>
  )
}

export default Card;






