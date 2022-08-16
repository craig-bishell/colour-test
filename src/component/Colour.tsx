import React from 'react';


type Props = {
  colour: string;
  setColour: React.Dispatch<React.SetStateAction<string>>;
}
const Colour: React.FC<Props> = ({ colour, setColour }) => {
  return (
    <>
      <p style={{ backgroundColor: colour }}>Test</p>
      <button onClick={() => setColour('red')}>Red</button>
      <button onClick={() => setColour('green')}>Green</button>
      <button onClick={() => setColour('blue')}>Blue</button>
      <button onClick={() => setColour('black')}>Black</button>
    </>
  );
};

export default Colour;