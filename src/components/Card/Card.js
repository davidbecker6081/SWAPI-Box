import React from 'react';
import './Card.css';


const Card = ({name, age, gender, height }) => {

  return(
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{height}</p>
    </div>
  )
}

export default Card
