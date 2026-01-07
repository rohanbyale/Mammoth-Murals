import React from 'react'

const OurWork = () => {
  return (
<div data-scroll  className="relative h-[60vh] w-full bg-[#FFF6E5] overflow-hidden flex items-center ">


  <h1 className="uppercase px-10 text-black nav text-[35vw] leading-none whitespace-nowrap">
    Our work
  </h1>

  <div className="absolute inset-0 flex items-center justify-center">

   
    <div
      className="
        absolute
        w-[65%]
        h-[30%]
        bg-white
        blur-2xl
        opacity-90
        rounded-full
      "
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 60%, transparent 100%)",
      }}
    />

    <p className="nav2  relative text-center max-w-[42rem] text-3xl font-medium text-black px-6">
      Don’t let blank walls waste potential.
      <br />
      See how our clients turn empty space into <br /> buzz, foot traffic,
      and business results.
    </p>

  </div>
</div>



  )
}

export default OurWork