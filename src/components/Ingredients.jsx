import React from "react";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import image from '../../public/assets/images/spil1.png'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, SplitText);


function Ingredients() {

  return (
    <div className="flex gap-5">
      <div>
        <div>
          <div className="relative overflow-hidden  w-fit my-7  gap-12 justify-center items-center">
            <h1 className="font-bold h-24 -otate-[45deg] w-fit px-1 text-7xl text-white bg-green-600 tracking-tighter">
              Ingredients
            </h1>
            <Image
              src={logo}
              alt="background image"
              className="w-auto  h-16 object-cover absolute right-0 -bottom-0 z-[1px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-xl text-gry-700" style={{ fontWeight: "300" }}>
            -Natural lemon-lime flavor
          </div>
          <div className="text-xl text-gry-700" style={{ fontWeight: "300" }}>
            -No artificial colors
          </div>
          <div className="text-xl text-gry-700" style={{ fontWeight: "300" }}>
            -Real cane sugar / zero sugar options
          </div>
        </div>
      </div>
      <div className="">
          <Image
              src={image}
              alt="background image"
              className="w-full image2 h-auto object-cover"
            />
      </div>

    </div>
  );
}

export default Ingredients;
