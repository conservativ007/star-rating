import React from 'react';
import dataColors from "../data/colors.json";
import  "./colors.css";
import Starrating from './StarRating';


const Colors = () => {
  return (
    <div className='colors-container'>
      {
        dataColors.map(color => 
          <div key={color.id}>
            <h1>{color.title}</h1>
            <div className='color' style={{backgroundColor: color.color}}></div>
            <Starrating selected={color.rating} />
          </div>
        )
      }
    </div>
  );
}

export default Colors;
