import React from "react";
import { Star } from "lucide-react";

const GoogleReview = () => {
  return (
    <section className="w-full bg-[#FFF6E5] py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="bg-[#120011] text-[#FFF6E5] mx-auto text-center px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <p className="nav3 uppercase py-6 sm:py-10 text-xs sm:text-sm tracking-widest">
          5/5 Rating on Google Reviews
        </p>

        <div className="flex justify-center gap-1 mb-10 sm:mb-14">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              className="fill-yellow-400 text-yellow-400 sm:w-7 sm:h-7"
            />
          ))}
        </div>

        <h2 className="nav3 text-[clamp(22px,5vw,48px)] font-semibold leading-tight max-w-5xl mx-auto px-2">
          “Fantastic artistry topped off with great communication and service.
          Andrew, Shane, and the team were very professional and obviously
          extremely talented.”
        </h2>

        <div className="mt-14 sm:mt-20">
          <p className="nav3 uppercase text-xs tracking-widest mb-6">
            Featured On
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-80">
            <img
              src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a71ab1974ffa7896cfa556_cropped-WebsiteFooter_logo-2.webp"
              alt="Bham Now"
              className="h-6 sm:h-8 w-auto object-contain invert"
            />

            <img
              src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a718e341443ea60562c4c3_Header-Plain-e1470599322158.avif"
              alt="News 19"
              className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
            />

            <img
              src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a810933e2695f00f7f559c_cropped-cbs204220logo20for20website20cbs42.com_1541089550527.png_60904154_ver1.0.webp"
              alt="CBS 42"
              className="h-6 sm:h-7 w-auto object-contain invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReview;
