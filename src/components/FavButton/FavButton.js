import React from 'react';
import './FavButton.css';

const FavButton = ({  }) => {



  return (
    <button className={buttonClass} onClick={() => clickEvent(item) }>
      {btnText}
    </button>
  )
}

export default FavButton
