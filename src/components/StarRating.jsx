import React from 'react';
import Star from './Star';
import {useColors} from "../hooks/ColorProvider";

const Starrating = ({ stars = 5, id, selected }) => {

  const  {changeRating}  = useColors();

  return ( 
    <div className='color-rating'>
      {
        [...Array(stars)].map((item, index) => 
        <Star 
          key={index} 
          selected={index + 1 > selected}
          changeRating={() => changeRating(id, index + 1)}
        />)
      }
    </div>
  );
}

export default Starrating;
