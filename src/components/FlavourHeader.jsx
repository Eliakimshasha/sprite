import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function FlavourHeader() {
  // useGSAP(() => {
  //   gsap.set(".paths1", {
  //     clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
  //   });

   

  //   gsap.to(".paths1", {
  //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //     ease: "power2.inOut",
  //     duration: 1,
  //      scrollTrigger: {
  //       trigger: ".pathcontent1",
  //       start: "top 50%",
  //       end: "bottom 60%",
  //       scrub: 1,
  //       markers: true
  //     }
  //   });
  // });

  return (
    <div className="tracking-[0.02em] pathcontent1 flex items-center justify-center gap-9 px-8 mt-16">
      <div className="relative overflow-hidden min-w-[500px] flex-1 flex flex-col gap-8 justify-center items-center">
        <h1 className="font-bold text-8xl text-green-600">EXPLORE OUR</h1>
        <div
          className="absolute top-1/2 paths1 -translate-y-1/2 left-1/2 min-w-fit -rotate-4 border-3 bg-yellow-300 border-white px-4 py-2 -translate-x-1/2"
        >
          <h1 className="font-bold text-6xl  text-white">Delicious</h1>
        </div>
        <h1 className="font-bold text-8xl text-green-600">FLAVOURS</h1>
      </div>
    </div>
  );
}

export default FlavourHeader;
