import React from 'react'

const Services = () => {
  return (
    <div className="h-auto w-full bg-[#47A0FF]">

      <div className="w-full px-4 sm:px-7 py-10">
        <div className="relative h-auto w-full flex flex-col lg:flex-row px-2 sm:px-10 gap-8">

    
          <div>
            <h1 className="nav text-2xl sm:text-4xl uppercase mb-2">
              25+ years
            </h1>
            <p className="nav3 text-sm sm:text-base">
              Of turning client's <br /> walls into landmarks
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <p className="nav3 text-xl sm:text-3xl lg:text-4xl text-center max-w-xl">
              Here’s how we help you
              transform <br /> empty walls
              into local landmarks <br /> and
              lasting brand impressions.
            </p>
          </div>

        </div>

   
        <div className="h-auto lg:h-[27vh] mt-8 border-t-4 sm:border-t-6 border-b-4 sm:border-b-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <h1 className="nav text-[18vw] sm:text-[12vw]">01</h1>
          <h2 className="nav text-[18vw] sm:text-[12vw] uppercase">murals</h2>
          <div className="h-[20vh] w-full sm:w-[30vw] lg:w-[15vw] bg-black rounded overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68847944bf4b436c842da242_IMG_2674%201.avif"
              alt=""
            />
          </div>
        </div>

       
        <div className="h-auto lg:h-[27vh] mt-6 border-b-4 sm:border-b-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <h1 className="nav text-[18vw] sm:text-[12vw]">02</h1>
          <h2 className="nav text-[18vw] sm:text-[12vw] uppercase">sign</h2>
          <div className="h-[20vh] w-full sm:w-[30vw] lg:w-[15vw] bg-black rounded overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/688479554933c2b4d5d8a363_TheCove2%201.avif"
              alt=""
            />
          </div>
        </div>

     
        <div className="h-auto lg:h-[27vh] mt-6 border-b-4 sm:border-b-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <h1 className="nav text-[18vw] sm:text-[12vw]">03</h1>
          <h2 className="nav text-[18vw] sm:text-[12vw] uppercase">ghost signs</h2>
          <div className="h-[20vh] w-full sm:w-[30vw] lg:w-[15vw] bg-black rounded overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68846aef020163d8a1e39d30_IMG_4225.avif"
              alt=""
            />
          </div>
        </div>

    
        <div className="h-auto sm:h-[15vh] w-full flex justify-center items-center mt-10">
          <div className="h-auto sm:h-[10vh] flex flex-col sm:flex-row items-center gap-4 border-b-4 pb-4">
            <h4 className="nav text-4xl sm:text-7xl">→ → →</h4>
            <h4 className="nav uppercase text-3xl sm:text-6xl text-center">
              learn about our services
            </h4>
            <h4 className="nav text-4xl sm:text-7xl">→ → →</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
