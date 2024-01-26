import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import IntroScreen from "@/components/IntroScreen";
import { useRef } from "react";
import { Playfair_Display } from "next/font/google";
import Content from "@/components/Content";
gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const container = useRef();
  const scrollContainer = useRef();

  useGSAP(
    () => {
      const scrollWidth = scrollContainer.current.scrollWidth;

      const theScrollDistance = -(scrollWidth - window.innerWidth);

      gsap.to(scrollContainer.current, {
        x: theScrollDistance,
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${theScrollDistance * -1}`,
          invalidateOnRefresh: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container, dependencies: [scrollContainer.current] }
  );

  return (
    <div ref={container} id="viewport" className={`${playfair.className}`}>
      <div
        ref={scrollContainer}
        id="scroll-container"
        className="flex h-full w-[fit-content] flex-nowrap"
      >
        <IntroScreen />
        <Content />
      </div>
    </div>
  );
}
