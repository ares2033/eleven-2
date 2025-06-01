"use client";

import { useEffect, useState } from "react";

import { Tomorrow } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface VerticalBarChartProps {
  value: number;
  maxValue: number;
  delay?: number;
  label: string;
  suffix: string;
  decimals?: number;
}

export function VerticalBarChart({
  value,
  maxValue,
  delay = 0,
  label,
  suffix,
  decimals = 0,
}: VerticalBarChartProps) {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedHeight(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="relative h-96 w-full bg-gray-200">
        <div
          className="absolute bottom-0 w-full border border-white/20 bg-black transition-all duration-2000 ease-out"
          style={{ height: `${animatedHeight}%` }}
        />

        {/* Static stat inside the black bar */}
        <div
          className="absolute flex w-full flex-col items-center justify-center text-white transition-all duration-2000 ease-out"
          style={{
            height: `${animatedHeight}%`,
            bottom: 0,
          }}
        >
          <div className={`text-3xl font-light ${tomorrow.className}`}>
            {value.toFixed(decimals)}
            {suffix}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-light text-gray-600">{label}</p>
      </div>
    </div>
  );
}
