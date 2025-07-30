import React, { useState } from 'react';
import './App.css';

const imagePaths = [
  `${process.env.PUBLIC_URL}/images/Christina1.webp`,
  `${process.env.PUBLIC_URL}/images/Christina2.webp`,
  `${process.env.PUBLIC_URL}/images/Christina3.webp`,
  `${process.env.PUBLIC_URL}/images/Christina4.webp`,
  `${process.env.PUBLIC_URL}/images/Christina5.webp`,
  `${process.env.PUBLIC_URL}/images/Christina6.webp`,
  `${process.env.PUBLIC_URL}/images/Christina7.jpeg`,
  `${process.env.PUBLIC_URL}/images/Christina8.webp`,
  `${process.env.PUBLIC_URL}/images/Christina9.webp`,
  `${process.env.PUBLIC_URL}/images/Christina10.webp`,
  `${process.env.PUBLIC_URL}/images/Christina11.webp`,
  `${process.env.PUBLIC_URL}/images/Christina12.webp`,
  `${process.env.PUBLIC_URL}/images/Christina13.webp`,
  `${process.env.PUBLIC_URL}/images/Christina14.webp`,
  `${process.env.PUBLIC_URL}/images/Christina16.webp`,
  `${process.env.PUBLIC_URL}/images/Christina17.webp`,
  `${process.env.PUBLIC_URL}/images/Christina18.webp`,
  `${process.env.PUBLIC_URL}/images/Christina19.webp`,
  `${process.env.PUBLIC_URL}/images/Christina20.webp`,
  `${process.env.PUBLIC_URL}/images/Christina21.webp`,
  `${process.env.PUBLIC_URL}/images/Christina22.webp`,
  `${process.env.PUBLIC_URL}/images/Christina23.webp`,
  `${process.env.PUBLIC_URL}/images/Christina24.webp`,
  `${process.env.PUBLIC_URL}/images/Christina25.webp`,
  `${process.env.PUBLIC_URL}/images/Christina26.webp`,
  `${process.env.PUBLIC_URL}/images/Christina27.webp`,
  `${process.env.PUBLIC_URL}/images/Christina28.webp`,
  `${process.env.PUBLIC_URL}/images/Christina29.webp`,
  `${process.env.PUBLIC_URL}/images/Christina30.webp`,
  `${process.env.PUBLIC_URL}/images/Christina31.webp`,
  `${process.env.PUBLIC_URL}/images/Christina32.webp`,
  `${process.env.PUBLIC_URL}/images/Christina33.webp`,
  `${process.env.PUBLIC_URL}/images/Christina34.webp`,
  `${process.env.PUBLIC_URL}/images/Christina35.webp`,
  `${process.env.PUBLIC_URL}/images/Christina36.webp`,
  `${process.env.PUBLIC_URL}/images/Christina37.webp`,
  `${process.env.PUBLIC_URL}/images/Christina38.webp`,
  `${process.env.PUBLIC_URL}/images/Christina39.webp`,
  `${process.env.PUBLIC_URL}/images/Christina40.webp`,
  `${process.env.PUBLIC_URL}/images/Christina41.webp`,
  `${process.env.PUBLIC_URL}/images/Christina42.webp`,
  `${process.env.PUBLIC_URL}/images/Christina43.webp`,
];


function App() {
  const [images] = useState(imagePaths);

  return (
    <div className="photo-page">
      <h1 className="grid-header">Christina’s Saves</h1>
      <p className="writing-link">
        <a href="/writing.html" target="_blank" rel="noopener noreferrer">
          more you can lurk coming soon →
        </a>
      </p>

      <div className="grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`img-${idx}`}
            className="grid-img"
          />
        ))}
      </div>
    </div>
  );
}
{imagePaths.map((path, index) => (
  <img key={index} src={path} alt={`Christina ${index + 1}`} />
))}


export default App;
