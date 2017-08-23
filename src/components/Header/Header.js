import React from 'react';
import './Header.css'

const Header = ({ showPeople, showPlanets, showVehicles, showFavorites, btnText, cardObj }) => {

  return (
    <div className='header'>
      <h1>SWAPI-BOX</h1>
      <div className='nav-btns'>
        <button className='nav-btn people-btn'
          onClick={ showPeople }></button>
        <button className='nav-btn planet-btn'
          onClick={ showPlanets }></button>
        <button className='nav-btn vehicle-btn'
          onClick={ showVehicles }></button>
        <button className='nav-btn favorite-btn'
          onClick={ showFavorites }></button>
      </div>
    </div>
  )
}

export default Header;
