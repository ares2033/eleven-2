"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Tomorrow, Poppins } from "next/font/google";
import { useState } from "react";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const footerLinks = [
    {
      title: "Azienda",
      links: [
        { name: "Servizi", href: "#features" },
        { name: "Contattaci", href: "#contact" },
      ],
    },
    {
      title: "Legale",
      links: [
        {
          name: "Privacy Policy",
          href: "https://www.iubenda.com/privacy-policy/35267073",
        },
        {
          name: "Cookie Policy",
          href: "https://www.iubenda.com/privacy-policy/35267073/cookie-policy",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="flex flex-col border-s border-e border-black/10">
        <div className="border-b border-black/10 pt-16 pb-8">
          <div className="mb-8 grid grid-cols-1 gap-8 border-b border-black/10 px-4 md:grid-cols-2 md:px-24 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3
                className={`mb-4 text-2xl font-semibold text-black ${poppins.className}`}
              >
                elevenhats
              </h3>
              <p className={`mb-6 max-w-md text-black/70 ${poppins.className}`}>
                La prima boutique del software in Italia.
                <br />
                L&apos;alleato per uno sviluppo conveniente, rapido e di
                qualità.
              </p>
            </div>

            {footerLinks.map((column, columnIndex) => (
              <div key={columnIndex}>
                <h4
                  className={`mb-4 text-lg font-light text-black ${tomorrow.className}`}
                >
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className={`text-black/70 transition-colors hover:text-black ${poppins.className}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="max-w-fit">
              <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                size={"wide"}
                className={`hover:bg-accent/20 mb-8 rounded-none border border-black/20 bg-transparent text-lg font-light text-black hover:cursor-pointer hover:text-black ${tomorrow.className}`}
              >
                Contattaci
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className="text-black transition-colors duration-300"
                  />
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Informazioni legali */}
          <div
            className={`px-4 text-sm text-black/50 md:px-24 ${poppins.className}`}
          >
            <p className="mb-1">Ragione sociale: elevenhats S.R.L.</p>
            <p className="mb-1">P.IVA: 14223650962</p>
            <p>Sede Legale: Via Vittorio Veneto 22, Bresso (MI), Italia</p>
          </div>
        </div>

        <div
          className={`border-b border-black/10 px-4 py-8 text-center md:flex md:justify-between md:px-24 md:text-left ${poppins.className}`}
        >
          <p className="text-black/50">
            &copy; {new Date().getFullYear()} elevenhats. All rights reserved.
          </p>
          <p className="mt-2 text-black/50 md:mt-0">
            Designed with ❤️ by elevenhats
          </p>
        </div>
      </div>
    </footer>
  );
}
