import React, { useState } from "react";
import BlUE6 from "../assets/images/Blue_6.png"; //

interface ImageColumnProps {
  images: string[];
}

const ImageColumn: React.FC<ImageColumnProps> = ({ images }) => {
    return (
      <div className="column">
        {images.map((url, index) => (
          <img key={index} src={BlUE6} alt={`Image ${index + 1}`} />
        ))}
      </div>
    );
  };

export default ImageColumn;
