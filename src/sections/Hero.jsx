'use client'
import Image from "next/image";
import bg from "../../public/assets/images/sprite4.png";
import sprite from "../../public/assets/images/sprite10.webp";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.video-container',
        start:'top top',
        end:'bottom 40%',
        pin:true,
      scrub: 2,

      }

    })

    tl.to('.second',{
      clipPath:'circle(100% at 50% 50%)'
    })
  })
  return (
    <div className="video-container  relative  h-[100vh] mx-w-screen overflow-hidden">
    

     <div className="absolute h-full w-full left-0 top-0 z-20 ">
       <div
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        className="absolute second bg-white h-full w-full left-0 top-0 z-20 lg:px-9"
      >
        <div className="w-full h-full bg-red-50/10 relative flex flex-row">
         
          <div className="relative overflow-hidden z-20 flex flex-1 flex-col gap-2 justify-center items-center">
            <h1 className="experience-text font-bold text-[8rem] text-green-600 tracking-tighter">
              EXPERIENCE
            </h1>

            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <h1 className="font-bold text-[5rem] text-white bg-green-600 px-4 pt-0 pb-[4px] -rotate-4 border-3 border-white tracking-tighter">
                Freaking
              </h1>
            </div>
            <h1 className="font-bold experience-text text-[8rem] text-green-600 tracking-tighter">
              DELICIOUS TASTE
            </h1>
          </div>

          <Image
            src={sprite}
            alt="background image z-10"
            className="w-auto h-full top-0 left-1/2 -translate-x-1/2 absolute z-[1]"
          />

        
        </div>
      </div>
     </div>

      <div className="relative z-10 h-full w-full flex justify-center items-center">
        <Image
          src={bg}
          alt="background image"
          className="w-full h-full object-cover absolute left-0 top-0 z-[1px]"
        />
        <div className="relative z-[3px] mt- text-white ">
          <h1
            className="text-8xl tracking-tighter font-bold"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}
          >
            Refresh Your World with Sprite
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
