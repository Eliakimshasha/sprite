"use client";
import Image from "next/image";
import bg from "../../public/assets/images/sprite4.png";
import sprite from "../../public/assets/images/sprite10.webp";
import { useGSAP } from "@gsap/react";
import sprite2 from "../../public/assets/images/lemon.png";
import leaf1 from "../../public/assets/images/leaf.webp";
import leaf2 from "../../public/assets/images/leaf2.png";
import water from "../../public/assets/images/water.png";
import leaf3 from "../../public/assets/images/coconoutleaf.png";
import lemon from "../../public/assets/images/lemon.webp";
import orange from "../../public/assets/images/orange.webp";
import orange2 from "../../public/assets/images/orange2.png";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-container",
        start: "top top",
        end: "bottom 40%",
        pin: true,
        scrub: 2,
      },
    });

    tl.to(".second", {
      clipPath: "circle(100% at 50% 50%)",
    });
  });
  return (
    <div className="video-container  relative  h-[100vh] mx-w-screen overflow-hidden">
      <div className="absolute h-full w-full left-0 top-0 z-20 ">
        <div
          style={{
            clipPath: "circle(0% at 50% 50%)",
            background:
              "linear-gradient(150deg, rgb(0, 168, 89), rgb(191, 255, 0))",
          }}
          className="absolute second  h-full w-full left-0 top-0 z-20 lg:px-9"
        >
              <Image src={water} alt="fanta"  className="absolute  w-full h-screen left-0 right-0 z-1" />

          <section
            id="hero"
            className="h-screen max-h-screen flex items-center justify-center relativ"
          >
            <div>
              <h1
                style={{ fontWeight: "800", letterSpacing: "-30px" }}
                className="h1 text-[500px] relative z-7 uppercase  text-white text-center"
              >
                sprite
              </h1>
              <Image
                src={sprite2}
                alt="fanta"
                id="fanta"
                className="absolute z-8 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              />
              <Image src={leaf1} alt="fanta" id="leaf" className="absolute  " />
              <Image
                src={leaf2}
                alt="fanta"
                id="leaf2"
                className="absolute  "
              />
              <Image
                src={leaf3}
                alt="fanta"
                id="leaf3"
                className="absolute  "
              />
              <Image
                src={orange}
                alt="fanta"
                id="orange"
                className="absolute  "
              />
              <Image
                src={orange2}
                alt="fanta"
                id="orange-cut"
                className="absolute  "
              />
              <Image src={lemon} alt="fanta" id="lemon" className="absolute " />
            </div>
          </section>
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
            className="text-8xl text-center tracking-tighter font-bold"
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
