import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({ scrollArray }) => {

  const creeper = scrollArray.map((scrollObj, i) => <div className="title" key={i}><p className="crawl">{scrollObj.opening_crawl}</p></div>)

  return (
    <div className='fade'>
      <div className="star-wars">
        { creeper }
      </div>
    </div>
  )
}

Scroll.propTypes = {
  scrollArray: PropTypes.array.isRequired
}

export default Scroll;
