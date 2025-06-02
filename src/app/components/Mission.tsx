"use client";

import { useEffect, useRef, useState } from "react";
import { HoverArrowLink } from "./hover-arrow-link";
import { Poppins } from "next/font/google";
import RotatingText, {
  type RotatingTextRef,
} from "@/TextAnimations/RotatingText/RotatingText";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function Mission() {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);
  const rotatingTextRef = useRef<RotatingTextRef>(null);
  const textObserverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsArrowVisible(!!entry && entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        const isVisible = !!entry && entry.isIntersecting;
        setIsTextVisible(isVisible);

        if (isVisible && rotatingTextRef.current) {
          rotatingTextRef.current.reset();
        }
      },
      {
        threshold: 0.3,
      },
    );

    const currentArrowRef = arrowRef.current;
    const currentTextRef = textObserverRef.current;

    if (currentArrowRef) {
      observer.observe(currentArrowRef);
    }

    if (currentTextRef) {
      textObserver.observe(currentTextRef);
    }

    return () => {
      if (currentArrowRef) {
        observer.unobserve(currentArrowRef);
      }
      if (currentTextRef) {
        textObserver.unobserve(currentTextRef);
      }
    };
  }, []);

  return (
    <section
      id="mission"
      className="relative flex h-full flex-col items-center justify-center overflow-x-hidden bg-white py-24 sm:px-8 md:h-screen md:px-16 md:py-8 lg:px-24"
    >
      {/* Text Container - Full width on mobile, positioned for desktop */}
      <div className="flex w-full flex-col items-center md:flex-row md:items-center md:justify-between">
        <h2
          className={`w-full text-center text-3xl font-semibold text-black md:text-left md:text-7xl lg:text-8xl ${poppins.className}`}
        >
          <span
            className="flex flex-wrap items-center justify-center md:justify-start"
            ref={textObserverRef}
          >
            eleven
            <RotatingText
              ref={rotatingTextRef}
              texts={["pay", "board", "auth", " times better!", "hats"]}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              loop={false}
              auto={isTextVisible}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden "
              transition={{
                type: "tween",
                ease: [0.77, 0, 0.175, 1],
                duration: 0.6,
              }}
              rotationInterval={2000}
            />
          </span>
        </h2>

        {/* Arrow Container - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <HoverArrowLink text="Scopri chi siamo" href="/chi-siamo" />
        </div>
      </div>

      {/* Arrow Container for Mobile - Below text, with intersection observer */}
      <div
        ref={arrowRef}
        className="relative mt-24 flex h-32 w-full justify-center md:hidden"
      >
        <HoverArrowLink
          text="Scopri chi siamo"
          href="/chi-siamo"
          isMobileVisible={isArrowVisible}
        />
      </div>
    </section>
  );
}
