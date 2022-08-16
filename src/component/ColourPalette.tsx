import React, { useContext } from 'react';

import { ColourContext } from '../context/ColourContext';
import Colour from './Colour';


const ColourPalette = () => {
  const {
    colour1, setColour1,
    colour2, setColour2,
    colour3, setColour3,
  } = useContext(ColourContext);

  return (
    <>
      <Colour colour={colour1} setColour={setColour1} />
      <Colour colour={colour2} setColour={setColour2} />
      <Colour colour={colour3} setColour={setColour3} />
    </>
  );
};

export default ColourPalette;