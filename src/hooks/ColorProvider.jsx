import React, { useState, createContext, useContext } from 'react';
import dataColors from "../data/colors.json";
import { v4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const Colorprovider = ({ children }) => {

  const [colors, setColors] = useState(dataColors);

  function changeRating(id, rating) {
    setColors(
      colors.map(color => color.id === id ? {...color, rating} : {...color})
    )
  }

  function deleteColor(id) {
    setColors(
      colors.filter(color => color.id !== id)
    )
  }

  function addColor(title, color) {
    const newColor = {
      id: v4(),
      title: title,
      color: color,
      rating: 1
    }

    setColors([...colors, newColor]);
  }

  return (
    <ColorContext.Provider value={{colors, changeRating, deleteColor, addColor}}>
      {children}
    </ColorContext.Provider>
  );
}

export default Colorprovider;
