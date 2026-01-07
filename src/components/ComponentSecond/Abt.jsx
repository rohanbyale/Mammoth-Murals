import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#FBF2E1] relative overflow-hidden px-4 sm:px-8 md:px-16 py-30 sm:py-36">

      <div className="nav relative text-center">
        <h1 className="text-[15vw] sm:text-[18vw] md:text-[20vw] leading-[0.85] font-extrabold uppercase text-[#14000f]">
          Never Go Extinct
        </h1>

        <span className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-yellow-400 font-handwritten text-4xl sm:text-5xl md:text-6xl rotate-[-4deg] uppercase">
          About Us
        </span>
      </div>

      <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-3 items-center gap-8 sm:gap-12">

        <div className="text-center sm:text-left text-2xl sm:text-3xl font-extrabold uppercase text-[#14000f]">
          Est. 1997
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889a13ae911e0ae33e0600a_IMG_2674%201.avif"
            alt="Mural Art"
            className="w-[250px] sm:w-[300px] md:w-[380px] h-[250px] sm:h-[300px] md:h-[380px] object-cover rounded"
          />
        </div>

        <div className="text-center sm:text-right text-2xl sm:text-3xl font-extrabold uppercase text-[#14000f]">
          Birmingham, AL
        </div>

      </div>

    </section>
  );
};

export default AboutSection;
