"use client";
import FlavourHeader from "@/components/FlavourHeader";
import React from "react";
import image from "../../public/assets/images/lemon.png";
import lemon from "../../public/assets/images/lemon.png";
import cherry from "../../public/assets/images/cherry.jpg";
import zero from "../../public/assets/images/zero.jpg";
import tea from "../../public/assets/images/tea.png";
import chill from "../../public/assets/images/chill.jpg";
import blast from "../../public/assets/images/blast.png";
import cranberry from "../../public/assets/images/cranberry.jpg";
import cucumber from "../../public/assets/images/cucumber.png";
import water from "../../public/assets/images/water2.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Flavours() {
  useGSAP(() => {


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavour-contents",
        start: "top 70%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // Move each image to its final position
    tl.to(".image11", { left: "31%" })
      .to(".image22", { left: "26%" }, "<")
      .to(".image3", { left: "18%" }, "<")
      .to(".image4", { left: "15%" }, "<")
      .to(".image5", { right: "31%" }, "<")
      .to(".image6", { right: "26%" }, "<")
      .to(".image7", { right: "18%" }, "<")
      .to(".image9", { top: "-33%", yPercent: 0 }, "<")
      .to(".image8", { right: "15%" }, "<");
  });

  return (
    <div className="">
      <FlavourHeader />

      <div className="relative flavour-contents w-full h-[500px] mt-16 flex justify-center items-center">
        {/* Left Side */}
        <Image
          src={image}
          alt="image"
          className="absolute w-[80px] image4 z-10"
        />
        <Image
          src={cranberry}
          alt="cranberry"
          className="absolute w-[120px] image3 z-20"
        />
        <Image
          src={zero}
          alt="zero"
          className="absolute w-[160px] image22 z-30"
        />
        <Image
          src={blast}
          alt="blast"
          className="absolute w-[200px] image11 z-40"
        />

        {/* Center (largest) */}
        <Image
          src={lemon}
          alt="lemon"
          className="absolute w-[230px] z-50 left-1/2 -translate-x-1/2"
        />

        {/* Right Side */}
        <Image
          src={cucumber}
          alt="cucumber"
          className="absolute w-[200px] image5 z-40"
        />
        <Image
          src={cherry}
          alt="cherry"
          className="absolute w-[160px] image6 z-30"
        />
        <Image src={tea} alt="tea" className="absolute w-[120px] image7 z-20" />
        <Image
          src={chill}
          alt="chill"
          className="absolute w-[80px] image8 z-10"
        />

        <Image
          src={water}
          alt="water"
          className="absolute w-[200px] image9  z-49  left-1/2 -ml-5 -translate-x-1/2 "
        />
      </div>
    </div>
  );
}

export default Flavours;
