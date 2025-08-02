"use client";
import React from "react";
import image from "../../public/assets/images/spil2.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);


function Testimonials() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "90% top",
        end: "195% bottom",
        scrub: 1.5,
      },
    });

    tl.to(".text1", {
      right: 30,
    })
      .to(".text2", {
        left: '300px',
      })

      .to(".image", {
        top: 50,
        y: -50,
        ease: "power2.out",
       
      })
      .to(".text3", {
        left: 50,
      });
  });
  return (
    <div className="uppercase main  relative mt-28  overflow-hidden h-screen text-[13rem] leading-[13rem] font-black">
      <Image
        src={image}
        alt="image"
        className="absolute image z-10 -bottom-[700px] left-1/2 -translate-x-1/2 "
      />
      <div className="absolute text1 top-0 -right-9 ">
        <h1 className="w-fit text-green-600">What’s</h1>
      </div>

      {/* FIXED VERTICAL CENTER */}
      <div className="absolute text2 top-1/2 left-24 -translate-y-1/2  transform">
        <h1 className="w-fit">everyone</h1>
      </div>

      <div className="absolute text3 bottom-0 -left-28">
        <h1 className="w-fit text-green-600">talking</h1>
      </div>
    </div>
  );
}

export default Testimonials;
