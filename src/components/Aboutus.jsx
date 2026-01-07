import React from 'react';

const MammothMuralsSection = () => {
  return (
    <section className="bg-[#FFDE00] min-h-screen font-sans text-black p-4 sm:p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
 
        <div className="flex flex-col space-y-8 sm:space-y-12">
          <header className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4">
              Why Work With Us
            </p>
            <h1 className="nav3 text-xl sm:text-2xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight">
              Mammoth Murals exists to help brands, developers, and institutions stand out with work that lasts. 
              Our obsession with craft, detail, and bold ideas comes from a simple belief: 
              great paint should outlive trends and make a place impossible to forget.
            </h1>
          </header>

          <div className="w-full h-[50vh] sm:h-[80vh] lg:h-[80vh]">
            <img 
              src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6888581071282636a166e99c_TheCove2%201.avif" 
              alt="The Cove Mural on Building" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end justify-start lg:justify-end lg:pb-24">
          <div className="max-w-md w-full sm:w-[70vw] md:w-[55vw] lg:w-[40vw] ml-0 lg:ml-auto">
            <div className="mb-8">
              <img 
                src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/688857ed7f22f3268e80576a_wmremove-transformed%20(2)%201.avif" 
                alt="Artist working on mural" 
                className="w-full h-auto shadow-xl rounded"
              />
            </div>

            <div className="space-y-6">
              <p className="nav2 px-4 sm:px-6 font-bold text-sm md:text-base text-center lg:text-left">
                People judge your business the second they see it.
              </p>

              <p className="nav2 text-sm sm:text-[15px] leading-relaxed text-center max-w-xs mx-auto lg:mx-0 lg:text-left">
                Cheap, printed signs fade fast and blend in, costing you trust and attention. 
                Real paint and true craft do the opposite. When your brand shows up with care 
                and quality, people notice and remember.
              </p>
              
              <div className="flex justify-center lg:justify-start px-4 sm:px-6 pt-4">
                <button className="bg-black text-white px-5 sm:px-6 py-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
                  <span className="bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-[8px]">
                    ➔
                  </span>
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MammothMuralsSection;
