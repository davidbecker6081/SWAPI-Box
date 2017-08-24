import React from 'react';
import './Card.css';
import Button from '../Button/Button'
import PeopleImage from '../Header/assets/people-background2.jpg'
import PlanetImage from '../Header/assets/planet-background2.jpeg'
import VehicleImage from '../Header/assets/vehicle-background2.jpg'
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Card = ({ item, addRemoveFavs}) => {

let buttonText = item.hasBeenSelected ? 'Remove' : 'Add To Faves'
let cardClass = item.hasBeenSelected ? 'selected-card default-card' : 'default-card'
let peopleImage = ''

  const returnCard = () => {
    if (item.gender) {
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p className="info-type">Species </p>
          <p className="card-info">{item.species}</p>
          <p className="info-type">Height </p>
          <p className="card-info">{item.height}</p>
          <p className="info-type">Homeworld </p>
          <p className="card-info">{item.planet}</p>
          <p className="info-type">Population </p>
          <p className="card-info"> {item.population}</p>
          <img className="card-img" src={PeopleImage} alt='person image'/>
        </div>
      )
    }
    else if(item.gravity) {
      let newResidents = item.residents.splice(0, 3)
      let residentList = newResidents.length > 0 ? newResidents.map((resident) => {
        return (
          <p className="card-info resident">{resident}</p>
        )
      }) : <p className="card-info resident">No Residents</p>
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p className="info-type">Terrain </p>
          <p className="card-info">{item.terrain}</p>
          <p className="info-type">Population </p>
          <p className="card-info">{item.population}</p>
          <p className="info-type">Climate </p>
          <p className="card-info">{item.climate}</p>
          <p className="info-type">Residents </p>
          {residentList}
          <img className="card-img" src={PlanetImage} alt='planet image'/>
        </div>
      )
    }
    else if (item.crew){
      return (
        <div className={cardClass}>
          <h3>{item.name}</h3>
          <p className="info-type">Model </p>
          <p className="card-info">{item.model}</p>
          <p className="info-type">Class </p>
          <p className="card-info">{item.vehicle_class}</p>
          <p className="info-type">Crew Size  </p>
          <p className="card-info">{item.crew}</p>
          <p className="info-type">Passengers </p>
          <p className="card-info">{item.passengers}</p>
          <img className="card-img" src={VehicleImage} alt='person image'/>
        </div>
      )
    }

  }
  return(
    <div className="card-area">
      {returnCard()}
      <Button cardObj={item} clickEvent={addRemoveFavs} btnText={buttonText} />
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  addRemoveFavs: PropTypes.func.isRequired
}

export default Card;
