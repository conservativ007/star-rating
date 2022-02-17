import React from 'react';

import  "./colors.css";
import Starrating from './StarRating';
import { useColors } from "../hooks/ColorProvider";  


const Colors = () => {

  const { colors } = useColors();

  return (
    <div className='colors-container'>
      {
        colors.map(color => 
          <div key={color.id}>
            <h1>{color.title}</h1>
            <div className='color' style={{backgroundColor: color.color}}></div>
            <Starrating id={color.id} selected={color.rating} />
          </div>
        )
      }
    </div>
  );
}

export default Colors;
