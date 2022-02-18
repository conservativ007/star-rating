import React, { useState, createContext, useContext } from 'react';
import dataColors from "../data/colors.json";

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

  return (
    <ColorContext.Provider value={{colors, changeRating, deleteColor}}>
      {children}
    </ColorContext.Provider>
  );
}

export default Colorprovider;
