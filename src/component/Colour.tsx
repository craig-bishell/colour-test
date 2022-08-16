import React from 'react';


type Props = {
  colour: string;
}
const Colour: React.FC<Props> = ({ colour }) => (<p style={{ color: colour }}>Test</p>);

export default Colour;