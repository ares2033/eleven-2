"use client";

import { Tomorrow, Poppins } from "next/font/google";
import { VerticalBarChart } from "./vertical-bar-chart";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Statistics() {
  const stats = [
    {
      title: "Velocità",
      value: 40,
      maxValue: 100,
      suffix: "%",
      delay: 0,
      decimals: 0,
    },
    {
      title: "Precisione",
      value: 97,
      maxValue: 100,
      suffix: "%",
      delay: 200,
      decimals: 0,
    },
    {
      title: "Fiducia",
      value: 4.9,
      maxValue: 5,
      suffix: "/5",
      delay: 400,
      decimals: 1,
    },
    {
      title: "Simpatia",
      value: 100,
      maxValue: 100,
      suffix: "%",
      delay: 600,
      decimals: 0,
    },
  ];

  return (
    <section className="h-full bg-white">
      {/* Header - Full width at the top */}
      <div className="w-full border-b border-black/20 py-12">
        <h1
          className={`text-center text-4xl leading-tight font-light text-black md:text-5xl lg:text-6xl ${tomorrow.className}`}
        >
          We deliver
        </h1>
      </div>

      {/* Content - Charts and Text */}
      <div className="flex flex-1 flex-col border-b border-black/20 md:flex-row">
        {/* Charts Section - Full width on mobile, 1/2 width on desktop */}
        <div className="w-full px-4 py-8 sm:px-8 md:flex md:w-1/2 md:items-end md:px-12 md:py-8 lg:px-24">
          <div className="flex w-full items-center justify-between md:justify-start md:gap-0">
            {stats.map((stat, index) => (
              <VerticalBarChart
                key={index}
                value={stat.value}
                maxValue={stat.maxValue}
                delay={stat.delay}
                label={stat.title}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            ))}
          </div>
        </div>

        {/* Text Section - Full width on mobile, 1/2 width on desktop */}
        <div className="flex w-full flex-col justify-center border-t border-black/20 p-4 sm:p-8 md:w-1/2 md:border-t-0 md:border-l md:p-12">
          <div className="space-y-4 md:space-y-6">
            <div>
              <p
                className={`text-xl font-medium text-black md:text-2xl ${tomorrow.className}`}
              >
                Velocità
              </p>
              <p
                className={`text-base font-light text-gray-600 md:text-lg ${poppins.className}`}
              >
                Consegna il 40% più veloce rispetto alla media.
              </p>
            </div>

            <div>
              <p
                className={`text-xl font-medium text-black md:text-2xl ${tomorrow.className}`}
              >
                Affidabilità
              </p>
              <p
                className={`text-base font-light text-gray-600 md:text-lg ${poppins.className}`}
              >
                97% dei progetti consegnati puntuali.
              </p>
            </div>

            <div>
              <p
                className={`text-xl font-medium text-black md:text-2xl ${tomorrow.className}`}
              >
                Soddisfazione
              </p>
              <p
                className={`text-base font-light text-gray-600 md:text-lg ${poppins.className}`}
              >
                4.9/5 la valutazione media dei nostri clienti.
              </p>
            </div>

            <div>
              <p
                className={`text-xl font-medium text-black md:text-2xl ${tomorrow.className}`}
              >
                Simpatia
              </p>
              <p
                className={`text-base font-light text-gray-600 md:text-lg ${poppins.className}`}
              >
                Siamo quelli che rendono le call leggere e i progetti
                entusiasmanti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
