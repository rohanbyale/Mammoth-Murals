import React from "react";

const MammothMurals = () => {
  return (
    <section   className="nav w-full h-[130vh] bg-[#FBF2E1] relative overflow-hidden flex items-center justify-center">

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute inset-0 flex flex-col justify-center text-center leading-[0.82]">
        <h1 className="text-[39vw] mr-2 ml-2 font-extrabold uppercase text-[#14000f] tracking-tight">
          Mammoth
        </h1>
        <h1 className="text-[47vw] mr-2 ml-2 font-extrabold uppercase text-[#14000f] ">
          Murals
        </h1>
      </div>

      {/* HANDWRITTEN OVERLAY TEXT */}
      <div className="relative z-10 text-yellow-400 font-handwritten text-5xl md:text-9xl uppercase rotate-[-4deg] text-center leading-tight">
        <p>Never Go</p>
        <p>Extinct</p>
      </div>

    </section>
  );
};

export default MammothMurals;
