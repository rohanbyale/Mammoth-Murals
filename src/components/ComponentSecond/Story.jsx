import React from "react";

const StorySection = () => {
  return (
    <section className="w-full bg-[#FBF2E1] px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div>
          <h2 className="nav text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-extrabold uppercase text-[#14000f] mb-8 sm:mb-10 md:mb-12">
            Where We Started
            <br />
            And Our Story
          </h2>

          <div className="nav2 space-y-4 sm:space-y-5 text-base sm:text-lg text-[#14000f] max-w-full md:max-w-[520px] leading-relaxed">
            <p>
              Mammoth Murals was built on an obsession with painting and getting it
              right. Co-founded by Andrew Tynes and Shane B, our roots blend
              old-school craft with real business sense.
            </p>

            <p>
              For us, a mural or sign serves as a lasting statement that feels
              authentically local and transforms any wall into something
              memorable. We select projects with intention, attend meticulously
              to every detail, and apply paint with the dedication that ensures
              our work endures for decades without losing its impact.
            </p>
          </div>
        </div>

        <div className="w-full h-80 sm:h-96 md:h-full">
          <img
            src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889a72fc39d50d03b6e7a19_wmremove-transformed%201.avif"
            alt="Mural painting process"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default StorySection;
