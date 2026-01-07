import React, { useState, useEffect } from 'react'

// Sub-component for individual logo slots to handle the "slight change" animation
const LogoSlot = ({ logo1, logo2, index }) => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    // Offset the start time based on index so they don't all flip at the exact same moment
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setShowFirst((prev) => !prev);
      }, 2000); 
      return () => clearInterval(interval);
    }, index * 500); 

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative h-14 sm:h-16 lg:h-20 w-full flex justify-center items-center">
      <img
        src={logo1}
        alt="Partner Logo A"
        className={`absolute h-full object-contain transition-all duration-1000 ease-in-out ${
          showFirst ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
      <img
        src={logo2}
        alt="Partner Logo B"
        className={`absolute h-full object-contain transition-all duration-1000 ease-in-out ${
          showFirst ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />
    </div>
  );
};

const Showcase = () => {
  // Define your image pairs here
  const partners = [
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9ba590ae9b10c971d19_id8zsrKH_Y_1755499798838%201.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9d94efd22af34c8e835_image%204.avif" 
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9a9d965e48cb21a59d0_The_Cheesecake_Factory_(logo%2C_stacked)%202.png",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2da04e8631e54be19c841_image%203.avif"
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2da114f772123c81d4b2f_image%202.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9c9a7681f6518c32c41_image%205.avif"
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d95cbedc5aa90e57738f_Axel-Row-Horiz%201.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d94dd39a1a3d6cba159b_LP-FOXRC-SKU-12-3-IMG-14-en-us-1627660864564%201.avif"
    }
  ];

  return (
    <section
      data-scroll
      className="bg-[#FFD900] w-full px-5 sm:px-10 lg:px-16 py-12"
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          data-scroll
          data-scroll-speed="-0.3"
          src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68820f0ab20497c5cbd8c39f_BlueSushiBham-4%201.avif"
          alt="Showcase"
          className="w-full h-[60vh] sm:h-[70vh] lg:h-[110vh] object-cover"
        />
      </div>

      <div className="nav3 mt-10 flex justify-center">
        <h3 className="text-center text-base sm:text-lg lg:text-xl font-medium">
          Partners That Trust Our Work
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {partners.map((pair, index) => (
          <LogoSlot 
            key={index} 
            logo1={pair.img1} 
            logo2={pair.img2} 
            index={index} 
          />
        ))}
      </div>
    </section>
  )
}

export default Showcase