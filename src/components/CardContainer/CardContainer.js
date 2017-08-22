import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card'

const CardContainer = ({ people }) => {
  if(people) {
    const characters = people.map((person, i) => <Card key={i}name={person.name} age={person.birth_year} gender={person.gender} height={person.height}/>)
    return(
      <div>
        {characters}
      </div>
    )
  }
  return(
    <div>
    </div>
  )
}

export default CardContainer;
