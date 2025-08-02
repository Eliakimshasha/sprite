"use client";
import Image from "next/image";
import React from "react";
import ExperienceHeader from "@/components/ExperienceHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Experience() {
useGSAP(() => {
  gsap.set(".video-box", { height: "50vh" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-box",
      start: "top 50%",
      end: "bottom top", // more scroll distance
      scrub: 1.5,
    },
  });

  tl.to(".video-box", {
    height: "100vh",
    ease: "power2.out",
  }).to(".video", {
    clipPath: "circle(80% at 50% 50%)",
    ease: "power2.out",
  }, "<");
});

  return (
    <div className="bg-green-600 main relative overflow-hidden">
      <ExperienceHeader />
      <div className="relative video-box  w-full mt-16  ">
        <video
          autoPlay
          loop
          playsInline
          muted
          src="/assets/videos/vid7.mp4"
          className="absolute video   top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: "circle(7.5% at 50% 50%)" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <img
            src="/assets/images/circle-text.svg"
            alt="image"
            className="absolute"
          />
          <div className="absolute">
            <img
              src="/assets/images/play.svg"
              alt="image"
              className="bg-green-600/50 p-9 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
