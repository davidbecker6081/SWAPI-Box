import React from 'react';
import './Button.css';

const Button = ({ clickEvent, btnText, cardObj, givenClass, favLength }) => {
  let buttonClass = `${givenClass} nav-btn`

  if (cardObj) {
    buttonClass = cardObj.hasBeenSelected ? 'selected-favorite default-fav-btn' : 'default-fav-btn'
  }

  return (
    <button onClick={() => clickEvent()} className={buttonClass}>
      {btnText}
      {favLength}
    </button>
  )
}

export default Button
