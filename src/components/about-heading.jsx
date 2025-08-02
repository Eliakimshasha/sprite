import React from "react";

function AboutHeading() {
  return (
    <div className="tracking-[0.02em] flex flex-col items-center justify-center min-h-screen gap-9 px-8 mt-16 ">
      {/* <div className='w-full h-[1px] bg-green-600'></div> */}
      <div className="relative overflow-hidden min-w-[500px]  flex-1 flex flex-col  gap-8 justify-center items-center">
        <h1 className="font-bold uppercase text-8xl text-center text-green-600 tracking-tighter">
          Stir up your <br/> fearless past and
        </h1>
        <div className="absolute top-1/2  -translate-y-1/2 left-1/2 min-w-fit -rotate-4 border-3 bg-yellow-300 border-white  px-4 py-2  -translate-x-1/2 ">
          <h1 className="font-bold uppercase  text-8xl text-white   tracking-tighter">
            Fuel Up
          </h1>
        </div>
        <h1 className="font-bold uppercase text-center text-8xl text-green-600 tracking-tighter">
         your future with every <br/> gulp of Cool Hydration
        </h1>
      </div>
      <div className='text-center'>
        Rev up your rebel spirit and feed the adventure <br/> of life
with SPRITE  where you’re one chug away from epic nostalgia <br/> and fearless fun.
      </div>

    </div>
  );
}

export default AboutHeading;
