"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Database, Shield } from "lucide-react";
import { Tomorrow, Poppins } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Products() {
  const [isHovered, setIsHovered] = useState(false);

  const products = [
    {
      id: "elevenauth",
      name: "elevenauth",
      description:
        "Sistema di autenticazione e gestione utenti completo per applicazioni moderne.",
      longDescription:
        "Una soluzione robusta per gestire l'autenticazione, la registrazione e la gestione degli utenti nella tua applicazione. Include funzionalità avanzate di sicurezza e un'interfaccia intuitiva.",
      icon: Code,
      features: [
        "Autenticazione sicura con JWT",
        "Registrazione e login utenti",
        "Gestione profili utente",
        "Reset password automatico",
        "Integrazione social login",
        "Dashboard amministrativa",
        "API RESTful complete",
        "Documentazione dettagliata",
      ],
      benefits: [
        "Riduce i tempi di sviluppo",
        "Sicurezza enterprise-grade",
        "Scalabilità garantita",
        "Supporto multi-piattaforma",
      ],
      href: "/products/elevenauth",
    },
    {
      id: "elevenboard",
      name: "elevenboard",
      description:
        "Piattaforma di gestione progetti e collaborazione per team di sviluppo.",
      longDescription:
        "Un ambiente completo per la gestione di progetti software, con strumenti per il tracking, la collaborazione e il monitoraggio delle performance del team.",
      icon: Database,
      features: [
        "Gestione progetti agile",
        "Tracking tempo e attività",
        "Collaborazione in tempo reale",
        "Dashboard analytics",
        "Integrazione Git",
        "Notifiche personalizzate",
        "Reporting automatico",
        "API per integrazioni",
      ],
      benefits: [
        "Migliora la produttività del team",
        "Visibilità completa sui progetti",
        "Processi standardizzati",
        "Decisioni basate sui dati",
      ],
      href: "/products/elevenboard",
    },
    {
      id: "elevenpay",
      name: "elevenpay",
      description:
        "Sistema di pagamenti sicuro e flessibile per e-commerce e applicazioni.",
      longDescription:
        "Una soluzione completa per gestire pagamenti online, con supporto per multiple gateway, gestione abbonamenti e strumenti avanzati di analytics finanziaria.",
      icon: Shield,
      features: [
        "Gateway pagamenti multipli",
        "Gestione abbonamenti",
        "Fatturazione automatica",
        "Fraud detection",
        "Analytics finanziaria",
        "Compliance PCI DSS",
        "Webhook personalizzabili",
        "Dashboard merchant",
      ],
      benefits: [
        "Transazioni sicure al 100%",
        "Riduzione abbandoni carrello",
        "Gestione automatizzata",
        "Conformità normative",
      ],
      href: "/products/elevenpay",
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Section */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`mb-8 text-4xl font-light text-white md:text-6xl lg:text-8xl ${tomorrow.className}`}
              >
                I nostri prodotti
              </h1>
              <p
                className={`mx-auto max-w-4xl text-xl text-white/70 md:text-2xl ${poppins.className}`}
              >
                Soluzioni software innovative progettate per semplificare e
                potenziare il tuo business digitale.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="px-8 py-20 md:px-24">
            <div className="space-y-20">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`${index < products.length - 1 ? "border-b border-white/20 pb-20" : ""}`}
                >
                  {/* Product Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-6 flex items-center">
                      <div className="mr-6 flex h-16 w-16 items-center justify-center border border-white/20">
                        <product.icon
                          className="h-8 w-8 text-white"
                          strokeWidth={1}
                        />
                      </div>
                      <h2
                        className={`text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
                      >
                        {product.name}
                      </h2>
                    </div>

                    <p
                      className={`mb-6 text-xl text-white/80 ${poppins.className}`}
                    >
                      {product.description}
                    </p>

                    <p
                      className={`mb-8 leading-relaxed text-white/60 ${poppins.className}`}
                    >
                      {product.longDescription}
                    </p>

                    <div className="mb-8">
                      <h3
                        className={`mb-4 text-lg font-light text-white ${tomorrow.className}`}
                      >
                        Vantaggi chiave
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center text-white/70"
                          >
                            <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                            <span className={`text-sm ${poppins.className}`}>
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={product.href}>
                      <Button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`hover:bg-accent/20 mt-6 rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white ${tomorrow.className}`}
                      >
                        Scopri {product.name}
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
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="border border-white/20 p-8">
                      <h3
                        className={`mb-6 text-xl font-light text-white ${tomorrow.className}`}
                      >
                        Caratteristiche principali
                      </h3>
                      <div className="space-y-4">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start border-b border-white/10 py-2 last:border-b-0"
                          >
                            <div className="mt-2 mr-4 h-1 w-1 flex-shrink-0 rounded-full bg-white" />
                            <span
                              className={`text-white/80 ${poppins.className}`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 md:px-24">
        <div className="border border-white/20">
          <div className="border-b border-white/20 px-4 py-16 text-center md:px-24">
            <h2
              className={`mb-6 text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
            >
              Hai bisogno di qualcosa di specifico?
            </h2>
            <p
              className={`mx-auto mb-8 max-w-3xl font-light text-white/70 ${poppins.className}`}
            >
              Ogni progetto è unico. Contattaci per discutere come possiamo
              adattare le nostre soluzioni alle tue esigenze specifiche.
            </p>
            <Link href="#contact">
              <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`hover:bg-accent/20 mt-6 rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white ${tomorrow.className}`}
              >
                Parliamo del tuo progetto
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
