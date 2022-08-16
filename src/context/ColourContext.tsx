import React, { useState } from 'react';


export interface IColourContext {
  colour1: string;
  setColour1: React.Dispatch<React.SetStateAction<string>>;
  colour2: string;
  setColour2: React.Dispatch<React.SetStateAction<string>>;
  colour3: string;
  setColour3: React.Dispatch<React.SetStateAction<string>>;
}

const defaultColourContext: IColourContext = {
  colour1: 'red', setColour1: () => {},
  colour2: 'blue', setColour2: () => {},
  colour3: 'green', setColour3: () => {},
};

const ColourContext = React.createContext<IColourContext>(defaultColourContext);

const ColourProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [colour1, setColour1] = useState<string>(defaultColourContext.colour1);
  const [colour2, setColour2] = useState<string>(defaultColourContext.colour2);
  const [colour3, setColour3] = useState<string>(defaultColourContext.colour3);

  return (
    <ColourContext.Provider
      value={{
        colour1, setColour1,
        colour2, setColour2,
        colour3, setColour3,
      }}
    >
      {children}
    </ColourContext.Provider>
  );
};

export { ColourContext, ColourProvider };
