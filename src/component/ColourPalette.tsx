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
      <Colour colour={colour1} />
      <button onClick={() => setColour1('0x0f0f0f')}>set colour1</button>
      <Colour colour={colour2} />
      <button onClick={() => setColour2('0x0f0f0f')}>set colour2</button>
      <Colour colour={colour3} />
      <button onClick={() => setColour3('0x0f0f0f')}>set colour3</button>
    </>
  );
};

export default ColourPalette;