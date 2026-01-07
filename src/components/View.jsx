import React, { useState, useEffect } from 'react';

const View = () => {
  
  const images = [
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68820f0ab20497c5cbd8c39f_BlueSushiBham-4%201.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a3dd192f1ff3ba63f1ad50_cocacolaamphitheater-1%206.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c2655200bb7ad08f7060f_CleanShot%202024-11-09%20at%2015.00.44.avif",
    "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a92151af03744c150497cd_68846ad87aae78d41d075d31_Mountaintop3.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557ae981f7e2564ffa_CleanShot%202024-11-09%20at%2015.00.44-4.avif",
    "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a92151af03744c150497de_68846aef020163d8a1e39d30_IMG_4225.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557112b0b4ad079ab3_CleanShot%202024-11-09%20at%2015.00.44-3.avif"
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="relative view"
      className="relative px-5 py-5 min-h-[60vh] w-full bg-[#FFF6E5]"
    >
      <div className="absolute lg:right-0 w-full lg:w-1/2 mt-3 px-5 min-h-[50vh]">
        
       
        <div className="h-auto sm:h-[14vh] w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 px-2 sm:px-5 border-b-4 gap-4">
          <h1 className="nav font-light text-3xl sm:text-5xl lg:text-7xl uppercase text-black">
            view all work
          </h1>
          <h1 className="nav text-4xl sm:text-6xl lg:text-8xl">
            → → →
          </h1>
        </div>

        
        <div className="relative h-[25vh] sm:h-[30vh] w-full sm:w-[40vw] lg:w-[20vw] bg-black mt-6 rounded-2xl overflow-hidden shadow-xl">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Work ${index}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default View;