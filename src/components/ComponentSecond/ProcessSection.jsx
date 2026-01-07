import React from "react";

const ProcessSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#14000f] overflow-hidden text-white">

      <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none">
        <div className="absolute inset-0 bg-[#FFD400] blur-[120px] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,212,0,1),transparent_60%)]" />
      </div>

      <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-28 max-w-[1700px] mx-auto">

        <h1 className="nav uppercase font-extrabold leading-[1] text-3xl sm:text-4xl md:text-5xl lg:text-[6.5rem] max-w-full sm:max-w-[700px] md:max-w-[900px]">
          Our Process To High <br />
          Impact Murals
        </h1>

        <p className="nav2 mt-6 sm:mt-8 max-w-full sm:max-w-[420px] text-sm sm:text-base text-white/80">
          We work with brands, developers, and institutions to make bold ideas
          visible that are on time and with total precision.
        </p>

        <button className="nav2 mt-6 sm:mt-10 flex items-center gap-3 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold hover:scale-105 transition">
          <span className="nav2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white flex items-center justify-center text-[8px] sm:text-xs">
            <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/688995b78786bb6f8df3b6ef_1753282172963.avif" alt="" />
          </span>
          CHAT WITH US
        </button>

        <div className="nav2 mt-16 sm:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16">
          
          <div>
            <h4 className="uppercase font-bold mb-2 sm:mb-3">(01) Strategy & Scope</h4>
            <p className="text-sm sm:text-base text-white/70">
              We start by learning about your brand, project goals, timelines,
              and space. We align early on what success looks like.
            </p>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-2 sm:mb-3">(02) Concept & Design</h4>
            <p className="text-sm sm:text-base text-white/70">
              We leverage strategic and creative capabilities to identify the
              catalyst for the most compelling solutions.
            </p>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-2 sm:mb-3">(03) Planning & Prep</h4>
            <p className="text-sm sm:text-base text-white/70">
              Every execution detail is considered, bringing the solution to
              life in its most impactful form.
            </p>
          </div>

          <div>
            <h4 className="uppercase font-bold mb-2 sm:mb-3">(04) Execution & Delivery</h4>
            <p className="text-sm sm:text-base text-white/70">
              We track ROI in real time and collaborate to iterate, optimise,
              and double down where it counts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
