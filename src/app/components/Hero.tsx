import { ElevenGlobe } from "../animations/eleven-globe";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Tomorrow, Poppins } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-5rem)] w-full overflow-hidden bg-black px-6 md:px-24"
    >
      {/* Background Globe */}
      <div className="absolute inset-0 z-0">
        <ElevenGlobe />
      </div>

      {/* Content Grid */}
      <div className="pointer-events-none relative z-10 grid h-full grid-cols-1 content-end md:grid-cols-2">
        {/* Left Column - Main Title and Button */}
        <div className="flex flex-col justify-end md:justify-end md:pb-12">
          <div className="space-y-8 md:space-y-12">
            <h1
              className={`text-4xl font-light text-white md:text-7xl ${tomorrow.className}`}
            >
              Il Partner che <br /> ti semplifica la vita
            </h1>
            <Button
              size={"wide"}
              variant={"outline"}
              className={`hover:bg-accent/20 pointer-events-auto w-full rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white md:w-fit ${tomorrow.className}`}
            >
              Scopri di più
              <ArrowUpRight
                viewBox="4 4 16 16"
                strokeWidth={1}
                className="transition-colors duration-300"
              />
            </Button>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="pointer-events-none flex h-min pt-12 pb-12 align-bottom md:h-full md:items-end md:justify-end md:pt-0">
          <div className="max-w-sm">
            <h2
              className={`border-l border-white/20 pl-4 text-sm font-light text-white md:text-base ${tomorrow.className}`}
            >
              La prima boutique del software in Italia. <br />
              L&apos;alleato per uno sviluppo conveniente, rapido e di qualità.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
