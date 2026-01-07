import React from "react";

const HeroSection = () => {
  return (
    <section className="nav2 relative w-full min-h-screen bg-[#14000f] overflow-hidden px-4 sm:px-6 py-16 sm:py-20">
      
      {/* Scribble lines */}
      <div className="absolute top-20 sm:top-32 left-6 sm:left-16 rotate-[-20deg] space-y-2 sm:space-y-3">
        <span className="block w-10 sm:w-14 h-1 bg-yellow-400 rounded-full" />
        <span className="block w-8 sm:w-10 h-1 bg-yellow-400 rounded-full" />
        <span className="block w-6 h-1 bg-yellow-400 rounded-full" />
      </div>

      <div className="absolute top-28 sm:top-40 right-6 sm:right-24 rotate-[15deg] space-y-2 sm:space-y-3">
        <span className="block w-8 sm:w-10 h-1 bg-yellow-400 rounded-full" />
        <span className="block w-10 sm:w-14 h-1 bg-yellow-400 rounded-full" />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto text-center">
        <h1 className="nav text-[#fff7e6] font-extrabold uppercase leading-[0.95] 
          text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem]">
          Let’s Paint Somethingtight
          <br />
          Unforgettable
        </h1>

        <p className="mt-6 text-[#fff7e6]/80 max-w-md sm:max-w-xl mx-auto text-xs sm:text-sm md:text-base px-2">
          Let’s talk strategy, locations, and how a mural can give your brand a
          powerful local presence.
        </p>

        <button className="mt-8 inline-flex items-center gap-3 bg-[#fff7e6] text-black font-semibold px-5 sm:px-6 py-3 rounded-md shadow-lg hover:scale-105 transition">
          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/688995b78786bb6f8df3b6ef_1753282172963.avif"
            alt="profile"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-sm"
          />
          <span className="text-xs sm:text-sm">
            BOOK A DISCOVERY CALL
          </span>
        </button>
      </div>

      {/* Image strip */}
      <div className="absolute bottom-[-40px] sm:bottom-[-60px] left-1/2 -translate-x-1/2 w-full flex justify-center gap-3 sm:gap-6 px-4 sm:px-10">
        {[
          { src: "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c2655200bb7ad08f7060f_CleanShot%202024-11-09%20at%2015.00.44.avif", rotate: "-rotate-12" },
          { src: "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c265532bfdc3016bc5c8f_CleanShot%202024-11-09%20at%2015.00.44-2.avif", rotate: "-rotate-6" },
          { src: "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557112b0b4ad079ab3_CleanShot%202024-11-09%20at%2015.00.44-3.avif", rotate: "rotate-3" },
          { src: "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557ae981f7e2564ffa_CleanShot%202024-11-09%20at%2015.00.44-4.avif", rotate: "rotate-6" },
          { src: "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c265532bfdc3016bc5c8f_CleanShot%202024-11-09%20at%2015.00.44-2.avif", rotate: "rotate-12" },
        ].map((img, i) => (
          <div
            key={i}
            className={`w-[140px] h-[110px] sm:w-[200px] sm:h-[160px] lg:w-[260px] lg:h-[200px] bg-white shadow-2xl overflow-hidden ${img.rotate}`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
