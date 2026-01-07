import React from 'react'

const Herosection = () => {
  return (
    <div
      data-scroll
      className="py-20 min-h-screen w-full bg-[#FFD900] flex flex-col lg:flex-row"
    >
      <div className="py-2 px-6 sm:px-10 w-full lg:w-3/4">
        <div className="head">
          <h1 className="uppercase  text-[12vw] sm:text-[10vw] lg:text-[10.5rem]">
            murals that make
          </h1>
          <h1 className="uppercase leading-6 text-[12vw] sm:text-[10vw] lg:text-[10.5rem]">
            your business
          </h1>
          <h1 className="uppercase text-[12vw] sm:text-[10vw] lg:text-[10.5rem]">
            impossible to ignore.
          </h1>
        </div>

        <div className="para text-base sm:text-lg lg:text-2xl mt-8 lg:mt-14">
          <p>
            We paint bold, hand-crafted walls for real <br />
            estate developers, and design-driven <br />
            brands that stop traffic, spark conversation, <br />
            and turn every space into a landmark.
          </p>
        </div>

        <div className="nav3 flex flex-wrap mt-8 lg:mt-10 gap-4">
          <div className="nav3 inline-flex items-center gap-3 bg-black border border-black text-white uppercase rounded-[5px] px-5 py-3">
            <div className="h-6 w-7 bg-amber-600 flex items-center justify-center overflow-hidden rounded">
              <img
                src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/688995b78786bb6f8df3b6ef_1753282172963.avif"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs whitespace-nowrap">
              book a discovery call
            </p>
          </div>

          <h4 className="font-light px-4 py-3 border uppercase rounded-[5px] border-black text-sm sm:text-base">
            see our work
          </h4>
        </div>
      </div>

      <div className="relative w-full lg:w-[25vw] mt-12 lg:mt-0 flex justify-center">
        <div className="absolute lg:top-96 w-[70vw] sm:w-[50vw] lg:w-full h-[40vw] sm:h-[30vw] lg:h-[15vw] bg-red-700 overflow-hidden rounded-lg">
          <video
            src="/e22379bd.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <h3 className="nav3 absolute top-[calc(2rem+40vw)] sm:top-[calc(2rem+30vw)] lg:top-[calc(2rem+40vw)] mt-4 text-xs sm:text-sm font-medium">
          showreel (2023 - 2025)
        </h3>
      </div>
    </div>
  )
}

export default Herosection
