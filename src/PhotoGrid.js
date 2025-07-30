import React, { useState } from 'react';
import './App.css';

const imagePaths = [
  "/images/Christina2.webp",
  "/images/Christina3.webp",
  "/images/Christina4.webp",
  "/images/Christina5.webp",
  "/images/Christina6.webp",
  "/images/Christina7.jpeg",
  "/images/Christina8.webp",
  "/images/Christina9.webp",
  "/images/Christina11.webp",
  "/images/Christina12.webp",
  "/images/Christina13.webp",
  "/images/Christina14.webp",
  "/images/Christina16.webp",
  "/images/Christina17.webp",
  "/images/Christina18.webp",
  "/images/Christina19.webp",
  "/images/Christina20.webp",
  "/images/Christina21.webp",
  "/images/Christina22.webp",
  "/images/Christina23.webp",
  "/images/Christina24.webp",
  "/images/Christina25.webp",
  "/images/Christina26.webp",
  "/images/Christina27.webp",
  "/images/Christina28.webp",
  "/images/Christina29.webp",
  "/images/Christina30.webp",
  "/images/Christina31.webp",
  "/images/Christina32.webp",
  "/images/Christina33.webp",
  "/images/Christina34.webp",
  "/images/Christina35.webp",
  "/images/Christina36.webp",
  "/images/Christina37.webp",
  "/images/Christina38.webp",
  "/images/Christina39.webp",
  "/images/Christina40.webp",
  "/images/Christina41.webp",
  "/images/Christina42.webp",
  "/images/Christina43.webp"
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

export default App;
