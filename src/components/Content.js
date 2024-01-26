import React, { useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Content = () => {
  const wrapper = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to("#content-img", {
  //       scale: 1.2,
  //       scrollTrigger: {
  //         trigger: (self) => {
  //           console.log(self);
  //         },
  //       },
  //     });
  //   },
  //   {
  //     scope: wrapper,
  //   }
  // );

  return (
    <div className="flex">
      <div className="h-screen w-[600px] border-r-[1px] p-8 flex flex-col justify-between">
        <div className=" flex justify-between">
          <p className="font-bold text-sm">Introduction</p>
          <div className="relative h-[250px] w-[200px]">
            <NextImage
              src="/phangnga.jpg"
              className="absolute w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2 max-w-[75%]">
          <p className="font-bold text-2xl">Established in 1767.</p>

          <p>
            Welcome to Phuket - an island where every experience is an
            exploration. Embrace the bold and beautiful in a place where the
            extraordinary becomes everyday. From the serene embrace of azure
            waters to the vibrant thrum of cultural richness, Phuket is where
            memories are built and adventures await.
          </p>

          <p className="italic underline cursor-pointer">Learn more.</p>
        </div>
      </div>

      <div ref={wrapper} className="p-8 h-screen flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex-[9] relative w-[350px] sm:w-[600px]">
            <NextImage
              id="content-img"
              src="/content-1.jpg"
              className="absolute w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-[1] flex flex-col gap-1 justify-end">
            <p className="font-bold text-sm">Phangnam</p>
            <p className="italic underline font-thin">View project</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-[9] relative w-[350px] sm:w-[600px]">
            <NextImage
              id="content-img"
              src="/content-2.jpg"
              className="absolute w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-[1] flex flex-col gap-1 justify-end">
            <p className="font-bold text-sm">Rawai</p>
            <p className="italic underline font-thin">View project</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-[9] relative w-[350px] sm:w-[600px]">
            <NextImage
              id="content-img"
              src="/content-3.jpg"
              className="absolute w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-[1] flex flex-col gap-1 justify-end">
            <p className="font-bold text-sm">Kamala</p>
            <p className="italic underline font-thin">View project</p>
          </div>
        </div>
      </div>

      {/* <WhatWeDo />

      <ContentImage />

      <Journal />

      <Articles /> */}
    </div>
  );
};

export default Content;

const WhatWeDo = () => (
  <div className="p-8 h-screen">
    <p>one</p>
  </div>
);

const ContentImage = () => (
  <div className="p-8 h-screen">
    <p>image</p>
  </div>
);

const Journal = () => (
  <div className="p-8 h-screen">
    <p>journal</p>
  </div>
);

const Articles = () => (
  <div className="p-8 h-screen">
    <p>articles</p>
  </div>
);
