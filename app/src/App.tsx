// src/App.tsx


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>UNO Game</h1>
//       <Dealer />
//     </div>
//   );
// };



import React, { useState } from 'react';
import Dealer from './components/Dealer';
import ImageColumn from './components/ImageColumn';

const App: React.FC = () => {
  const [columns, setColumns] = useState<string[][]>([[]]);

  const handleAddImage = () => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[0].push(`https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg`);
      return newColumns;
    });
  };

  return (
    <div>
      <button onClick={handleAddImage}>Add Image</button>
      {columns.map((column, index) => (
        <ImageColumn key={index} images={column} />
      ))}
    </div>
  );
};

export default App;
