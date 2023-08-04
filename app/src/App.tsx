import React, { useState } from 'react';
import Button from './components/Button';
import ImageColumn from './components/ImageColumn';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleButtonClick = () => {
    // Simulating image generation (replace this with your actual image URLs)
    const newImages: string[] = [
      'https://via.placeholder.com/150',
    ];
    setImages(newImages);
  };

  return (
    <div>
      <ImageColumn></ImageColumn>
    </div>
  );
};

export default App;
