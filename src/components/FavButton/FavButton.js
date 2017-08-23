import React from 'react';
import './FavButton.css';

const FavButton = ({ item, clickEvent, btnText }) => {

  return(
    <button onClick={() => clickEvent(item) }>
      {btnText}
    </button>
  )
}

export default FavButton
