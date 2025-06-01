"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Tomorrow, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [shouldInvert, setShouldInvert] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections and check which one the header is over
      const sections = document.querySelectorAll("section");
      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 80;

      let currentSection: Element | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if header is overlapping this section
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const computedStyle = window.getComputedStyle(currentSection);
        const bgColor = computedStyle.backgroundColor;

        console.log("Current section background:", bgColor); // Debug log

        // More comprehensive light color detection
        const isLight = isLightColor(bgColor);
        console.log("Is light background:", isLight); // Debug log
        setShouldInvert(isLight);
      }
    };

    const isLightColor = (color: string): boolean => {
      // Handle transparent/initial backgrounds
      if (
        color === "rgba(0, 0, 0, 0)" ||
        color === "transparent" ||
        color === "initial"
      ) {
        // Check parent elements or assume white
        return true;
      }

      // Handle rgb/rgba colors
      const rgbMatch = RegExp(/rgba?\((\d+),\s*(\d+),\s*(\d+)/).exec(color);
      if (rgbMatch && rgbMatch.length >= 4) {
        const r = Number(rgbMatch[1] ?? 0);
        const g = Number(rgbMatch[2] ?? 0);
        const b = Number(rgbMatch[3] ?? 0);
        // Calculate relative luminance using proper formula
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        console.log("Luminance:", luminance, "RGB:", r, g, b); // Debug log
        return luminance > 0.5;
      }

      // Handle named colors
      const lightColors = [
        "white",
        "lightgray",
        "lightgrey",
        "silver",
        "gainsboro",
        "whitesmoke",
        "snow",
        "ivory",
        "beige",
        "linen",
      ];
      const darkColors = [
        "black",
        "darkgray",
        "darkgrey",
        "gray",
        "grey",
        "dimgray",
        "dimgrey",
      ];

      if (lightColors.some((lightColor) => color.includes(lightColor)))
        return true;
      if (darkColors.some((darkColor) => color.includes(darkColor)))
        return false;

      // Default to light for unknown colors
      return true;
    };

    // Initial check
    setTimeout(handleScroll, 100); // Small delay to ensure DOM is ready

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const textColorClass = shouldInvert ? "text-black" : "text-white";
  const borderColorClass = shouldInvert ? "border-black/20" : "border-white/20";

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
        isScrolled ? "h-14" : "h-20"
      } ${borderColorClass} ${tomorrow.className}`}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* Logo - Left side */}
        <div className="flex items-center ps-8">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`font-sans text-lg font-bold transition-colors duration-300 ${textColorClass} ${poppins.className}`}
            >
              elevenhats
            </span>
          </Link>
        </div>

        {/* Navigation - Right side */}
        <div className="flex h-full items-center">
          {/* Mobile menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                onClick={() => setIsSheetOpen(true)}
              >
                <Menu
                  className={`h-5 w-5 transition-colors duration-300 ${textColorClass}`}
                />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-l border-white/20 bg-black p-0 [&>button]:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header area */}
                <div className="border-b border-white/20 p-6">
                  <h2
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    Menu
                  </h2>
                </div>

                {/* Navigation links */}
                <div className="flex-1">
                  <Link
                    href="/solutions"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/solutions"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Solutions
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/solutions" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/products"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/products"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Products
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/products" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/pricing"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/pricing"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Pricing
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/pricing" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/docs"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/docs"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Docs
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/docs" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>
                </div>

                {/* Footer area */}
                <div className="border-t border-white/20 p-6">
                  <p className={`text-sm text-white/70 ${poppins.className}`}>
                    elevenhats
                  </p>
                  <p className={`text-xs text-white/50 ${poppins.className}`}>
                    La prima boutique del software in Italia
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden h-full md:flex">
            <div className="flex h-full items-stretch">
              <Link
                onMouseEnter={() => setHoveredLink("solutions")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/solutions"
                className={`group hover:bg-accent/20 inline-flex h-full w-48 items-end justify-between border-s bg-transparent px-4 py-2 text-sm font-light transition-colors ${
                  pathname === "/solutions"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                <p>Solutions</p>
                <motion.div
                  animate={{ rotate: hoveredLink === "solutions" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`transition-colors duration-300 ${
                      pathname === "/solutions" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("products")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/products"
                className={`group hover:bg-accent/20 inline-flex h-full w-48 items-end justify-between border-s bg-transparent px-4 py-2 text-sm font-light transition-colors focus:outline-none ${
                  pathname === "/products"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                Products
                <motion.div
                  animate={{ rotate: hoveredLink === "products" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`transition-colors duration-300 ${
                      pathname === "/products" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("pricing")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/pricing"
                className={`group hover:bg-accent/20 inline-flex h-full w-48 items-end justify-between border-s bg-transparent px-4 py-2 text-sm font-light transition-colors focus:outline-none ${
                  pathname === "/pricing"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                Pricing
                <motion.div
                  animate={{ rotate: hoveredLink === "pricing" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`transition-colors duration-300 ${
                      pathname === "/pricing" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("docs")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/docs"
                className={`group hover:bg-accent/20 inline-flex h-full w-48 items-end justify-between border-s bg-transparent px-4 py-2 text-sm font-light transition-colors focus:outline-none ${
                  pathname === "/docs"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                Docs
                <motion.div
                  animate={{ rotate: hoveredLink === "docs" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`transition-colors duration-300 ${pathname === "/docs" ? "text-black" : textColorClass}`}
                  />
                </motion.div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
