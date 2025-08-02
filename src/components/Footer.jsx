import React from "react";

function Footer() {
  return (
    <div className="p-5 relative">
      <div className=" absolute left-1/2 top-30 -translate-x-1/2 bg-white px-16 py-5 rounded-full z-50 ">
        <h1
          //  bg-gradient-to-b from-green-700 bg-white to-white bg-clip-text text-transparent"

          className="text-5xl text-green-600 "
        >
          Reach Us
        </h1>
      </div>
      <div className="relative w-full rounded-2xl  mt-36  h-[80vh] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          playsInline
          muted
          src="/assets/videos/vid14.mp4"
          className="absolute  top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bg-green-900/50 w-full h-full left-0 top-0"></div>
      </div>
    </div>
  );
}

export default Footer;
