import React from 'react';
import Star from './Star';

const Starrating = ({ stars = 5, selected }) => {
  return ( 
    <div className='color-rating'>
      {
        [...Array(stars)].map((item, index) => 
        <Star key={index} selected={index + 1 > selected} />)
      }
    </div>
  );
}

export default Starrating;
