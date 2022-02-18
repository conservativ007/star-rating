import React from 'react';
import  "../styles/colors.css";
import Starrating from './StarRating';
import { useColors } from "../hooks/ColorProvider";

import { FaTrash } from 'react-icons/fa';

const Colors = () => {

  const { colors, deleteColor } = useColors();

  return (
    <div className='colors-container'>
      {
        colors.map(color => 
          <div key={color.id}>
            <h1>{color.title}</h1>
            <div className='color-background' style={{backgroundColor: color.color}}>
              <FaTrash className='color-trash' onClick={() => deleteColor(color.id)} />
            </div>
            <Starrating id={color.id} selected={color.rating} />
          </div>
        )
      }
    </div>
  );
}

export default Colors;
