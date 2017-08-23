import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card'

const CardContainer = ({ info, addToFavorites, removeFromFavorites }) => {

    const items = info.map((item, i) => {
        return <Card key={i} item={item} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
    })


    return(
      <div>
        { items }
      </div>
    )
}

export default CardContainer;
