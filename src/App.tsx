import React from 'react';

import ColourPalette from './component/ColourPalette';
import { ColourProvider } from './context/ColourContext';


const App: React.FC<React.PropsWithChildren> = () => (
  <>
    <ColourProvider>
      <ColourPalette />
    </ColourProvider>
  </>
);

export default App;
