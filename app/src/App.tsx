// src/App.tsx

import React from 'react';
import Dealer from './components/Dealer';

const App: React.FC = () => {
  return (
    <div>
      <h1>UNO Game</h1>
      <Dealer />
    </div>
  );
};

export default App;
