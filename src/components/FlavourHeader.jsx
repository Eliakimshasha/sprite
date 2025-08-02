import React from "react";

function FlavourHeader() {
  return (
    <div className="tracking-[0.02em] flex items-center justify-center gap-9 px-8 mt-16 ">
      {/* <div className='w-full h-[1px] bg-green-600'></div> */}
      <div className="relative overflow-hidden min-w-[500px]  flex-1 flex flex-col  gap-8 justify-center items-center">
        <h1 className="font-bold text-8xl text-green-600 tracking-tighter">
          EXPLORE OUR
        </h1>
        <div className="absolute top-1/2  -translate-y-1/2 left-1/2 min-w-fit -rotate-4 border-3 bg-yellow-300 border-white  px-4 py-2  -translate-x-1/2 ">
          <h1 className="font-bold  text-6xl text-white    tracking-tighter">
            Delicious
          </h1>
        </div>
        <h1 className="font-bold text-8xl text-green-600 tracking-tighter">
          FLAVOURS
        </h1>
      </div>
      {/* <div className='w-full h-[1px] bg-green-600'></div> */}
    </div>
  );
}

export default FlavourHeader;
