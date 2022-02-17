import React from 'react';
import { FaStar } from "react-icons/fa"; 

const Star = ({ selected = false, changeRating }) => {
  return (
    <FaStar color={selected ? "grey" : "red"} onClick={changeRating} />
  );
}

export default Star;
