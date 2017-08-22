import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card'

const CardContainer = ({ info }) => {
    
    const items = info.map((item, i) => {
        return <Card key={i} item={item}/>
    })
    
    
    return(
      <div>
        { items } 
      </div>
    )
}

export default CardContainer;
