import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card'

const CardContainer = ({ info, addRemoveFavs }) => {

    const items = info.map((item, i) => {
        return <Card key={i} item={item} addRemoveFavs={addRemoveFavs} />
    })

    return(
      <div className="container">
        { items }
      </div>
    )
}

export default CardContainer;
