"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Tomorrow, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Servizi() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial value
      setIsMobile(window.innerWidth < 768);

      // Add event listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const servizi = [
    {
      name: "elevenauth",
      description:
        "Il pacchetto Starter che ti accompagna passo dopo passo, dalla consulenza iniziale alla consegna di un MVP funzionante, scalabile e pronto per essere validato sul mercato.",
      features: [
        "Analisi approfondita dei requisiti e definizione della roadmap di progetto",
        "Progettazione UI/UX responsive centrata sull'esperienza utente",
        "Sviluppo completo dell'MVP con tecnologie moderne e best practice",
        "Integrazione con sistemi di hosting affidabili e configurazione della pipeline di deployment",
        "Supporto via email durante e dopo il rilascio",
      ],
      cta: "Scopri cosa possiamo fare per te",
    },
    {
      name: "elevenboard",
      description:
        "L'ambiente di sviluppo API pensato per team in crescita che vogliono scalare in modo strutturato e sicuro.",
      features: [
        "Tutte le funzionalità del pacchetto Starter",
        "Endpoint RESTful scalabili e sicuri",
        "Automazione CI/CD con test e release continuo",
        "Monitoraggio performance in tempo reale (APM)",
        "Supporto prioritario via Slack",
      ],
      cta: "Scopri di più",
    },
    {
      name: "elevenpay",
      description:
        "La soluzione enterprise per gestire identità, accessi e sicurezza sulla tua piattaforma.",
      features: [
        "Tutte le funzionalità del pacchetto Pro",
        "Single Sign-On (OAuth2, SAML, OpenID Connect)",
        "Gestione ruoli e permessi granulari",
        "Autenticazione multi-fattore integrata",
        "Supporto dedicato 24/7",
      ],
      cta: "Scopri come espandere il tuo servizio",
    },
  ];

  return (
    <section
      id="features"
      className="flex flex-col bg-black px-4 md:flex-row md:px-24"
    >
      <div className="flex h-full w-full flex-col border-s border-e border-white/20">
        <h2
          className={`border-b border-white/20 py-8 text-center text-xl font-light text-white md:py-12 md:text-2xl lg:text-5xl ${tomorrow.className}`}
        >
          I nostri servizi
        </h2>

        {/* Three column flexbox layout */}
        <div className="flex min-h-[600px] flex-col border-b border-white/20 md:flex-row">
          {servizi.map((servizio, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer border-white/20 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } `}
              initial={false}
              animate={{
                flex: activeService === index && !isMobile ? 2 : 1,
                backgroundColor: isMobile
                  ? "#ffffff"
                  : activeService === index
                    ? "#ffffff"
                    : "#000000",
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              onMouseEnter={() => setActiveService(index)}
              whileHover={{
                backgroundColor:
                  activeService === index ? "#ffffff" : "#1a1a1a",
              }}
            >
              <div className="flex h-full flex-col justify-between p-4 md:p-8">
                <div>
                  <motion.h3
                    className={`mb-4 text-xl md:text-2xl lg:text-3xl ${tomorrow.className}`}
                    animate={{
                      color: isMobile
                        ? "#000000"
                        : activeService === index
                          ? "#000000"
                          : "#ffffff",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    {servizio.name}
                  </motion.h3>

                  <motion.p
                    className={`mb-6 text-sm md:text-base lg:text-lg ${poppins.className}`}
                    animate={{
                      color: isMobile
                        ? "#374151"
                        : activeService === index
                          ? "#374151"
                          : "#e5e7eb",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    {servizio.description}
                  </motion.p>

                  {/* Features - show all on mobile, animated on desktop */}
                  {isMobile ? (
                    <div className="mb-6">
                      <ul className={`${poppins.className} space-y-2`}>
                        {servizio.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="mr-2 text-gray-600">✓</span>
                            <span className="text-sm text-gray-600 md:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <AnimatePresence>
                      {activeService === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                          }}
                          className="mb-6 overflow-hidden"
                        >
                          <ul className={`${poppins.className} space-y-2`}>
                            {servizio.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: featureIndex * 0.1,
                                  ease: "easeOut",
                                }}
                                className="flex items-start"
                              >
                                <span className="mr-2 text-black">✓</span>
                                <span className="text-sm text-black md:text-base">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full rounded-none border font-light transition-all duration-300 hover:cursor-pointer ${tomorrow.className} `}
                    style={{
                      borderColor: isMobile
                        ? "rgba(0,0,0,0.2)"
                        : activeService === index
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(255,255,255,0.2)",
                      backgroundColor: "transparent",
                      color: isMobile
                        ? "#000000"
                        : activeService === index
                          ? "#000000"
                          : "#ffffff",
                    }}
                  >
                    {servizio.cta}
                    <motion.div
                      animate={{
                        rotate: (isMobile ? false : activeService === index)
                          ? 45
                          : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight viewBox="4 4 16 16" strokeWidth={1} />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-b border-white/20 px-8 py-8 text-center md:px-24">
          <p
            className={`text-lg font-light text-white md:text-xl lg:text-2xl ${tomorrow.className}`}
          >
            Hai bisogno di informazioni per il servizio che ti serve?
          </p>
          <p
            className={`text-sm font-light text-white md:text-base lg:text-lg ${tomorrow.className}`}
          >
            Contattaci per una soluzione su misura per la tua azienda
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`hover:bg-accent/20 mt-6 rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white ${tomorrow.className}`}
            >
              Contattaci
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight
                  viewBox="4 4 16 16"
                  strokeWidth={1}
                  className="text-white transition-colors duration-300"
                />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
