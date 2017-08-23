import React from 'react';
import './Scroll.css';

const Scroll = ({ scrollArray }) => {

  const creeper = scrollArray.map((scrollObj, i) => <div className="scroll-text fade" key={i}>{scrollObj.opening_crawl}</div>)

  return (
    <div className="scroll-container">
      { creeper }
    </div>
  )
}

export default Scroll
