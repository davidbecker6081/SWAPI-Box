import React from 'react';
import './Header.css'
import Button from '../Button/Button'

const Header = ({ showPeople, showPlanets, showVehicles, showFavorites, favLength }) => {

  return (
    <div className='header'>
      <div className='nav-btns btns-top'>
        <Button givenClass={'people-btn'}
          clickEvent={ showPeople } />
        <Button givenClass={'planet-btn'}
          clickEvent={ showPlanets } />
      </div>
      <h1>SWAPI-BOX</h1>
      <div className='nav-btns btns-bottom'>
        <Button givenClass={'vehicle-btn'}
        clickEvent={ showVehicles } />
        <Button givenClass={'favorite-btn'}
        clickEvent={ showFavorites } favLength={ favLength }/>
      </div>
    </div>
  )
}

export default Header;
