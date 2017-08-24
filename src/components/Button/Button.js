import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ clickEvent, btnText, cardObj, givenClass, favLength }) => {
  let buttonClass = `${givenClass} nav-btn`

  if (cardObj) {
    buttonClass = cardObj.hasBeenSelected ? 'selected-favorite default-fav-btn' : 'default-fav-btn'
    }

  return (
    <button onClick={() => clickEvent(cardObj)}   className={buttonClass}>
      {btnText}
      {favLength}
    </button>
  )
}

Button.propTypes = {
  clickEvent: PropTypes.func,
  btnText: PropTypes.string,
  cardObj: PropTypes.object,
  givenClass: PropTypes.string,
  favLength: PropTypes.number
}

export default Button
