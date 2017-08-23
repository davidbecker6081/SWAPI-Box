import React from 'react';
import './DisplayButton.css';

const DisplayButton = ({ clickEvent, btnText }) => {

  return(
    <button onClick={() => clickEvent() }>
      {btnText}
    </button>
  )
}

export default DisplayButton
