import React from "react";

const CraftedSection = () => {
  return (
    <section className="w-full bg-[#FBF2E1] px-4 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20 md:py-24">
      <div className="max-w-[1700px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-16">

       
        <div className="nav2 text-[#14000f] text-base sm:text-lg leading-relaxed max-w-full lg:max-w-[360px] italic mb-8 lg:mb-0">
          <p>
            “Mammoth Murals is one of my favorite commercial artists to work
            with. Andrew and Shane are the perfect dream team. They are able
            to help further visualize rough concept ideas and take it to
            another level that exceeds my expectations.”
          </p>
        </div>

        
        <div className="relative w-full">
          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e96d1443e0fe12d71eff_CleanShot%202024-11-09%20at%2015.00.44-11.avif"
            alt="Main mural artwork"
            className="w-full h-auto object-cover rounded-md"
          />

       
          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e9c52c0d897b9c42c1c4_CleanShot%202024-11-09%20at%2015.00.44-12.avif"
            alt="Detail process 1"
            className="absolute -top-8 sm:-top-12 right-0 sm:right-[-120px] w-[140px] sm:w-[220px] rotate-[-6deg] shadow-lg"
          />

          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e9d762f84d507b9fe888_ShaneBinAction%201.avif"
            alt="Detail process 2"
            className="absolute top-[120px] sm:top-[180px] right-0 sm:right-[-160px] w-[180px] sm:w-[260px] rotate-[4deg] shadow-lg"
          />
        </div>

      
        <div className="flex items-start lg:items-end mt-8 lg:mt-0">
          <h3 className="nav text-2xl sm:text-3xl md:text-[2.5rem] leading-snug sm:leading-tight font-extrabold uppercase text-[#14000f]">
            Every Mural And Sign Is Crafted To Reflect Your Vision With
            Precision And Care.
          </h3>
        </div>

      </div>
    </section>
  );
};

export default CraftedSection;
