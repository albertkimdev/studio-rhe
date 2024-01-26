import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Playfair_Display } from "next/font/google";
import SplitType from "split-type";
import NextImage from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const IntroScreen = () => {
  const app = useRef();

  useGSAP(
    () => {
      const mainText = new SplitType("#main-text");

      const logoText = new SplitType("#logo-text");

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.easeOut",
        },
      });

      tl.to("#one", {
        height: 0,
        delay: 1,
        ease: "power3.easeOut",
        duration: 1,
        stagger: {
          each: 0.2,
        },
      })
        .fromTo(
          "#img",
          {
            scale: 1.2,
          },
          {
            scale: 1,
            ease: "power3.easeOut", // You might want to include an easing function
            duration: 1, // And a duration for the animation
          },
          "-=0.5"
        )
        .fromTo(
          mainText.chars,
          {
            opacity: 0,
            yPercent: 105,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            stagger: function (index, total) {
              return index * 0.025;
            },
          }
        )
        .fromTo(
          logoText.chars,
          {
            opacity: 0,
            yPercent: 105,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            stagger: function (index, total) {
              return index * 0.025;
            },
          }
        );
    },
    { scope: app }
  );

  return (
    <div
      className={`${playfair.className} overflow-x-hidden h-screen w-screen relative`}
      ref={app}
    >
      <div className="absolute h-full w-full ">
        <div className="relative h-full w-full inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gray-950 z-20 opacity-25"></div>
          <NextImage
            id="img"
            src="/phuketbg.jpg"
            className="absolute w-full h-full"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative h-full w-full-inset-0 bg-transparent px-10 py-4 flex flex-col justify-between z-30">
            <div className="flex justify-between">
              <img className="h-16 w-auto" src="/phuketlogo.png" alt="" />
              <p
                id="logo-text"
                className="text-white max-w-[300px] text-2xl mr-20"
              >
                Welcome to Phuket: Sun, Sea, Culture, and Fun. Experience the
                Magic of Island Life!
              </p>
            </div>
            <div className="">
              <p
                id="main-text"
                className="text-white text-[10rem] text-center font-bold"
              >
                Explore Paradise
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full flex z-40">
        <div id="one" className="w-1/3  h-full bg-orange-500"></div>
        <div id="one" className="w-1/3  h-full bg-orange-500"></div>
        <div id="one" className="w-1/3  h-full bg-orange-500"></div>
      </div>
    </div>
  );
};

export default IntroScreen;
