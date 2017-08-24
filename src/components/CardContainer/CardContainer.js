import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

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

CardContainer.propTypes = {
  info: PropTypes.array.isRequired,
  addRemoveFavs: PropTypes.func.isRequired
}

export default CardContainer;
