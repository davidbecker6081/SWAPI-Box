import React from 'react';
import './Button.css';

const Button = ({ clickEvent, btnText, cardObj }) => {
  let buttonClass = 'display-btn'

  if (cardObj) {
    buttonClass = cardObj.hasBeenSelected ? 'selected-favorite default-fav-btn' : 'default-fav-btn'
  }

  return (
    <button onClick={() => clickEvent()} className={buttonClass}>
      {btnText}
    </button>
  )
}

export default Button
