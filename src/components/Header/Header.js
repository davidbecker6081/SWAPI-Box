import React from 'react';
import './Header.css'
import Button from '../Button/Button'

const Header = ({ showPeople, showPlanets, showVehicles, showFavorites, favLength }) => {

  return (
    <div className='header'>
      <h1>SWAPI-BOX</h1>
      <div className='nav-btns'>
        <Button givenClass={'people-btn'}
          clickEvent={ showPeople } />
        <Button givenClass={'planet-btn'}
          clickEvent={ showPlanets } />
        <Button givenClass={'vehicle-btn'}
          clickEvent={ showVehicles } />
        <Button givenClass={'favorite-btn'}
          clickEvent={ showFavorites } favLength={ favLength }/>
      </div>
    </div>
  )
}

export default Header;
