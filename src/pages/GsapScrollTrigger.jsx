import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  // TODO: Implement the gsap scroll trigger
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: 50,
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );
  return (
    <div className="mt-20 w-full h-screen" ref={scrollRef}>
      <div
        id="scroll-pink"
        className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
      />
      <div
        id="scroll-orange"
        className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
      />
    </div>
  );
};

export default GsapScrollTrigger;
