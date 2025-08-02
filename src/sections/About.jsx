"use client";
import AboutHeading from "@/components/about-heading";
import image from "../../public/assets/images/sprite1.jpg";
import lemon from "../../public/assets/images/lemon2.png";
import Image from "next/image";
import Ingredients from "@/components/Ingredients";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: "-40% top",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(".image1", {
      rotate: "21deg",
    }).to(".image2", {
      scale: 1.4,
    });
  });
  return (
    <div>
      <div>
        <AboutHeading />
      </div>
      <div className="flex content items-center mt-16 px-8">
        <div className="flex-1 image1 -rotate-45 relative z-10">
          <Image src={image} alt="image" className="w-[90%] h-auto" />
        </div>
        <div className="flex-1 relative z-20 ">
          <Image
            src={lemon}
            alt="image"
            className="h-44 w-auto absolute right-0 -top-40"
          />

          <h1 className="text-6xl uppercase tracking-[0.02em] font-bold text-green-600 mb-4">
            Refreshingly Real
          </h1>

          <div className="text-xl " style={{ fontWeight: "200" }}>
            From our first sip to your latest can, Sprite has always been about
            keeping it real. No artificial colors, no nonsense, just pure
            refreshment.
          </div>

          {/* <div className="flex justify-start pr-8">
            <button className="border-2 border-green-600 text-green-700 px-9 py-3 rounded-full text-xl mt-5">Read More</button>
          </div> */}
          <div>
            <Ingredients />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
