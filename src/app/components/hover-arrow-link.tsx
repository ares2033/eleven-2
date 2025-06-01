"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Tomorrow } from "next/font/google";
import { motion } from "framer-motion";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface HoverArrowLinkProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  isMobileVisible?: boolean;
}

export function HoverArrowLink({
  text = "Scopri chi siamo",
  href = "#about",
  onClick,
  isMobileVisible = false,
}: Readonly<HoverArrowLinkProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // Smooth scroll to section if it's an anchor link
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  // On mobile, use isMobileVisible; on desktop, use isHovered
  const shouldShowAnimation = isMobile ? isMobileVisible : isHovered;

  return (
    <button
      type="button"
      className="group absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ outline: "none" }}
    >
      {/* Black stripe that slides in from right */}
      <div
        className={`absolute right-0 bottom-0 flex h-full items-center justify-start overflow-hidden bg-black transition-all duration-500 ease-out ${
          shouldShowAnimation ? "w-screen" : "w-0"
        }`}
      >
        <span
          className={`ps-8 text-2xl font-light whitespace-nowrap text-white transition-opacity delay-200 duration-300 md:ps-24 md:text-7xl ${
            shouldShowAnimation ? "opacity-100" : "opacity-0"
          } ${tomorrow.className}`}
        >
          {text}
        </span>
      </div>

      {/* Arrow icon */}
      <motion.div
        animate={{ rotate: shouldShowAnimation ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="py-4"
      >
        <ArrowUpRight
          viewBox="4 4 16 16"
          strokeWidth={1}
          size={128}
          className={`relative z-10 transition-colors duration-300 ${
            shouldShowAnimation ? "text-white" : "text-black"
          }`}
        />
      </motion.div>
    </button>
  );
}
