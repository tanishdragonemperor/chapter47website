
import React, { useState } from "react";
import p1 from '../assets/PhotoGalleryPhotos/IMG_1006.png'
import p2 from '../assets/PhotoGalleryPhotos/IMG_1007.png'
import p3 from '../assets/PhotoGalleryPhotos/IMG_1864.png'
import p4 from '../assets/PhotoGalleryPhotos/IMG_1991.png'
import p5 from '../assets/PhotoGalleryPhotos/IMG_3345.png'

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const veterans = [
    {
      name: "John Doe",
      image:
        p1,
    },
    {
      name: "Jane Smith",
      image:
        p2,
    },
    {
      name: "Mike Johnson",
      image:
        p3,
    },
    {
      name: "Mike Johnson",
      image:
        p4,
    },
    {
      name: "Mike Johnson",
      image:
        p5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? veterans.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === veterans.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (

    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      
      {veterans.map((veteran, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ${
            index === currentIndex
              ? "translate-x-0 opacity-100 z-10"
              : index < currentIndex
              ? "-translate-x-full opacity-0 z-0"
              : "translate-x-full opacity-0 z-0"
          }`}
        >
          <img
            src={veteran.image}
            alt={veteran.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 px-8 py-4 rounded-lg">
            <h2 className="text-3xl font-bold">{veteran.name}</h2>
            <p className="text-lg mt-2">Dedicated Veteran of the Chapter</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-5 z-20 bg-black/60 hover:bg-black px-4 py-2 rounded-full text-white text-lg transition-transform hover:scale-110"
        onClick={handlePrev}
      >
        ◀
      </button>
      <button
        className="absolute right-5 z-20 bg-black/60 hover:bg-black px-4 py-2 rounded-full text-white text-lg transition-transform hover:scale-110"
        onClick={handleNext}
      >
        ▶
      </button>
    </div>
  );
};

export default PhotoGallery;
