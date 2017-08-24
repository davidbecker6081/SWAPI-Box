import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({ scrollArray }) => {

  // const creeper = scrollArray.map((scrollObj, i) => <div className="title" key={i}><p className="crawl">{scrollObj.opening_crawl}</p></div>);

  // console.log('ep 4', scrollArray[0].opening_crawl)
  console.log('scroll')
  console.log(scrollArray)

  const creeper = <div className="title" key={0}>
  <p className="crawl">{scrollArray.opening_crawl}</p></div>


  return (
    <div className='fade'>
      <div className="star-wars">
        { creeper }
      </div>
    </div>
  )
}

Scroll.propTypes = {
  scrollArray: PropTypes.array
}

export default Scroll;
