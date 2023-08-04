import React, { useState } from 'react';

interface ImageColumnProps {
  images: string[];
}

const ImageColumn: React.FC<ImageColumnProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageColumn;
