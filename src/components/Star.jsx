import React from 'react';
import { FaStar } from "react-icons/fa"; 

const Star = ({ selected = false }) => {
  return (
    <FaStar color={selected ? "grey" : "red"} />
  );
}

export default Star;
