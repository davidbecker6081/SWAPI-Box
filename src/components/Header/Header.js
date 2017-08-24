import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Header = ({ showPeople, showPlanets, showVehicles, showFavorites, favLength }) => {

  return (
    <div className='header'>
      <h1>SWAPI-BOX</h1>
      <div className='nav-btns'>
        <div className="left-btns">
          <Button givenClass={'people-btn'}
          clickEvent={ showPeople } />
          <Button givenClass={'planet-btn'}
          clickEvent={ showPlanets } />
        </div>
        <div className="right-btns">
          <Button givenClass={'vehicle-btn'}
            clickEvent={ showVehicles } />
          <Button givenClass={'favorite-btn'}
            clickEvent={ showFavorites } favLength={ favLength }/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  showPeople: PropTypes.func.isRequired,
  showPlanets: PropTypes.func.isRequired,
  showVehicles: PropTypes.func.isRequired,
  showFavorites: PropTypes.func.isRequired,
  favLength: PropTypes.number.isRequired
}

export default Header;
