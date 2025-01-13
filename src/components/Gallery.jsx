'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Gallery({ images }) {
  if (!images || !Array.isArray(images)) {
    return null;
  }  
  const [current, setCurrent] = useState(0)
  
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div id="gallery" className="relative w-full h-full" data-carousel="slide">
      <div className="relative w-full h-full overflow-hidden rounded-lg ">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/assets/past-events/${img}.jpg`}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
            />
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          ←
        </span>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          →
        </span>
      </button>
    </div>
  );
}