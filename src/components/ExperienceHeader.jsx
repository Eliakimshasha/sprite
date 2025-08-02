'use client'
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ExperienceHeader() {
  // polygon(0 0, 100% 0, 100% 100%, 0 100%);
   useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.text-content',
        start:'top 60%',
        end:'bottom 60%',
      
      scrub: 1.5,

      }

    })

    tl.to('.heading-1',{
      clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease:'power1.inOut'
    }).to('.heading-2',{
      clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease:'power1.inOut'
    }).to('.heading-3',{
      clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease:'power1.inOut'
    }).to('.heading-4',{
      clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease:'power1.inOut'
    })
  })

  return (
    <div className="bg-green-600 w-full">
      <div className="text-center text-white mt-16 text-2xl">
        <p>Unlock the Advantages:</p>
        <p>Explore the Key Benefits of Choosing SPRITE</p>
      </div>
      <div className=" h-screen text-content flex items-center justify-center  px-8 mt-4 ">
        <div className="relative  min-w-[500px]  p-4 h-full w-full  flex flex-col gap-28  justify-center items-center">
          <h1 style={{clipPath:'polygon(0 0, 0 0, 0 100%, 0 100%)'}} className="font-bold heading-1 text-[7rem]  text-green-600 bg-white mb-6 rotate-3 tracking-tighter">
            Always Refreshing
          </h1>
          <div className="absolute top-1/2 z-5 xl:-mt-3 -rotate-1  -translate-y-1/2 left-1/2 min-w-full  ">
            <h1 style={{clipPath:'polygon(0 0, 0 0, 0 100%, 0 100%)'}} className="font-bold heading-2  border-t-black/10 w-fit px-2 text-[7rem] border-b-black/30  bg-yellow-300   border-t-2 border-b-2 -translate-x-1/2    tracking-tighter">
              Natural Zest + Energy
            </h1>
          </div>
          {/* 
         */}
          <h1 style={{clipPath:'polygon(0 0, 0 0, 0 100%, 0 100%)'}} className="font-bold heading-3 text-[7rem] z-10 px-2 border-black/10 text-white bg-green-600 -yellow-300 rotate-2 xl:rotate-3 tracking-tighter">
            100% Recyclable
          </h1>
          <h1 style={{clipPath:'polygon(0 0, 0 0, 0 100%, 0 100%)'}} className="font-bold heading-4 absolute text-[7rem] text-green-600 bg-yellow-300 xl:bottom-4 lg:-bottom-16 -rotate-2   tracking-tighter">
         Sugar-Free Options Available
        </h1>
        </div>
      </div>

      <div className="text-center text-white my-16 mt-34 text-2xl">
        <p>And much more ...</p>
      </div>
    </div>
  );
}

export default ExperienceHeader;
