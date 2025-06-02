"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";
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

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeMethod, setActiveMethod] = useState(0);

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Consulenza Gratuita",
      description:
        "Prenota una chiamata di 30 minuti per discutere il tuo progetto",
      action: "Prenota ora",
      details: [
        "Analisi preliminare gratuita",
        "Stima tempi e costi",
        "Roadmap personalizzata",
        "Nessun impegno",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Phone,
      title: "Supporto Immediato",
      description: "Per clienti esistenti con necessità urgenti",
      action: "Chiama ora",
      details: [
        "Supporto tecnico 24/7",
        "Risoluzione problemi critici",
        "Assistenza deployment",
        "SLA garantito",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      title: "Richiesta Dettagliata",
      description: "Invia una descrizione completa del tuo progetto",
      action: "Scrivi ora",
      details: [
        "Analisi approfondita",
        "Proposta commerciale",
        "Timeline dettagliata",
        "Risposta in 24h",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo richiede lo sviluppo di un progetto?",
      answer:
        "I tempi variano in base alla complessità. Un MVP può richiedere 2-4 mesi, mentre progetti enterprise possono necessitare 6-12 mesi. Durante la consulenza gratuita forniamo una stima precisa.",
    },
    {
      question: "Offrite supporto post-lancio?",
      answer:
        "Sì, offriamo diversi piani di supporto che includono manutenzione, aggiornamenti di sicurezza, monitoraggio e assistenza tecnica 24/7 per garantire il funzionamento ottimale della tua soluzione.",
    },
    {
      question: "Lavorate con startup o solo con aziende consolidate?",
      answer:
        "Lavoriamo con realtà di ogni dimensione, dalle startup innovative alle enterprise consolidate. Adattiamo il nostro approccio e i nostri servizi alle specifiche esigenze e budget di ogni cliente.",
    },
    {
      question: "Utilizzate tecnologie moderne e scalabili?",
      answer:
        "Assolutamente. Utilizziamo sempre le tecnologie più moderne e comprovate come Next.js, TypeScript, cloud-native solutions e architetture microservizi per garantire scalabilità e performance.",
    },
    {
      question: "Fornite documentazione e training?",
      answer:
        "Ogni progetto include documentazione completa, guide utente e sessioni di training per il vostro team. Offriamo anche workshop personalizzati per massimizzare l'adozione della soluzione.",
    },
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CTO, TechFlow Solutions",
      content:
        "ElevenHats ha trasformato la nostra visione in una piattaforma SaaS di successo. La loro competenza tecnica e attenzione ai dettagli sono eccezionali.",
      rating: 5,
    },
    {
      name: "Laura Bianchi",
      role: "Founder, GreenMarket",
      content:
        "Professionalità e risultati concreti. Il nostro marketplace ha superato ogni aspettativa grazie al loro lavoro. Consiglio vivamente.",
      rating: 5,
    },
    {
      name: "Alessandro Verdi",
      role: "Product Manager, FinanceFlow",
      content:
        "Collaborazione eccellente dall'inizio alla fine. Hanno rispettato tempi e budget, consegnando una soluzione che ha rivoluzionato il nostro business.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-black">
      {/* Hero Section */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`mb-8 text-4xl font-light text-white md:text-6xl lg:text-8xl ${tomorrow.className}`}
              >
                Iniziamo insieme
              </h1>
              <p
                className={`mx-auto max-w-4xl text-xl text-white/70 md:text-2xl ${poppins.className}`}
              >
                Trasformiamo le tue idee in soluzioni digitali innovative.
                Scegli il metodo di contatto più adatto alle tue esigenze e
                iniziamo a costruire il futuro del tuo business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-20">
            <div className="px-8 md:px-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-16 text-center text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
              >
                Come possiamo aiutarti?
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    onMouseEnter={() => setActiveMethod(index)}
                    onMouseLeave={() => setActiveMethod(-1)}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      className="h-full border border-white/20 p-8"
                      animate={{
                        backgroundColor:
                          activeMethod === index ? "#ffffff" : "#000000",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="mb-6 flex items-center">
                        <motion.div
                          className="mr-4 flex h-16 w-16 items-center justify-center border"
                          animate={{
                            borderColor:
                              activeMethod === index
                                ? "rgba(0,0,0,0.2)"
                                : "rgba(255,255,255,0.2)",
                          }}
                        >
                          <method.icon
                            className="h-8 w-8"
                            style={{
                              color:
                                activeMethod === index ? "#000000" : "#ffffff",
                            }}
                            strokeWidth={1}
                          />
                        </motion.div>
                        <motion.h3
                          className={`text-xl font-light md:text-2xl ${tomorrow.className}`}
                          animate={{
                            color:
                              activeMethod === index ? "#000000" : "#ffffff",
                          }}
                        >
                          {method.title}
                        </motion.h3>
                      </div>

                      <motion.p
                        className={`mb-6 text-sm leading-relaxed md:text-base ${poppins.className}`}
                        animate={{
                          color: activeMethod === index ? "#374151" : "#e5e7eb",
                        }}
                      >
                        {method.description}
                      </motion.p>

                      <div className="mb-8">
                        <ul className="space-y-3">
                          {method.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              className="flex items-center text-sm"
                              animate={{
                                color:
                                  activeMethod === index
                                    ? "#374151"
                                    : "#e5e7eb",
                              }}
                            >
                              <CheckCircle
                                className="mr-3 h-4 w-4"
                                style={{
                                  color: "#10b981",
                                }}
                              />
                              <span className={poppins.className}>
                                {detail}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full rounded-none border font-light transition-all duration-300 hover:cursor-pointer ${tomorrow.className}`}
                          style={{
                            borderColor:
                              activeMethod === index
                                ? "rgba(0,0,0,0.2)"
                                : "rgba(255,255,255,0.2)",
                            backgroundColor: "transparent",
                            color:
                              activeMethod === index ? "#000000" : "#ffffff",
                          }}
                        >
                          {method.action}
                          <motion.div
                            animate={{
                              rotate: activeMethod === index ? 45 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowUpRight viewBox="4 4 16 16" strokeWidth={1} />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-20">
            <div className="px-8 md:px-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-16 text-center text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
              >
                Domande frequenti
              </motion.h2>

              <div className="mx-auto max-w-4xl space-y-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-white/20 pb-8"
                  >
                    <h3
                      className={`mb-4 text-lg font-light text-white md:text-xl ${tomorrow.className}`}
                    >
                      {faq.question}
                    </h3>
                    <p
                      className={`leading-relaxed text-white/70 ${poppins.className}`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-20">
            <div className="px-8 md:px-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-16 text-center text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
              >
                Cosa dicono i nostri clienti
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="border border-white/20 p-8"
                  >
                    <div className="mb-4 flex">
                      {Array.from({ length: Number(testimonial.rating) }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p
                      className={`mb-6 leading-relaxed text-white/80 ${poppins.className}`}
                    >
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <h4
                        className={`font-medium text-white ${tomorrow.className}`}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`text-sm text-white/60 ${poppins.className}`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-20">
            <div className="grid gap-12 px-8 md:grid-cols-2 md:px-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
                >
                  Chi siamo
                </h2>
                <p
                  className={`mb-6 leading-relaxed text-white/70 ${poppins.className}`}
                >
                  ElevenHats è un team di sviluppatori e designer appassionati
                  che trasforma idee innovative in soluzioni digitali di
                  successo. Con oltre 8 anni di esperienza, abbiamo aiutato più
                  di 150 aziende a digitalizzare i loro processi e raggiungere i
                  loro obiettivi.
                </p>
                <p
                  className={`leading-relaxed text-white/70 ${poppins.className}`}
                >
                  La nostra missione è semplice: creare tecnologia che funziona,
                  che scala e che genera valore reale per il business dei nostri
                  clienti.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3
                    className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                  >
                    Informazioni aziendali
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-white/60" />
                      <span className={`text-white/70 ${poppins.className}`}>
                        Via Vittorio Veneto 22, Bresso (MI), Italia
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-white/60" />
                      <span className={`text-white/70 ${poppins.className}`}>
                        info@elevenhats.it
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-white/60" />
                      <span className={`text-white/70 ${poppins.className}`}>
                        +39 324 530 5977
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                  >
                    Orari di lavoro
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-white/70 ${poppins.className}`}>
                        Lunedì - Venerdì:
                      </span>
                      <span className={`text-white/70 ${poppins.className}`}>
                        9:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-white/70 ${poppins.className}`}>
                        Sabato:
                      </span>
                      <span className={`text-white/70 ${poppins.className}`}>
                        9:00 - 13:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-white/70 ${poppins.className}`}>
                        Supporto 24/7:
                      </span>
                      <span className={`text-white/70 ${poppins.className}`}>
                        Sempre attivo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-4 md:px-24">
        <div className="border border-white/20">
          <div className="border-b border-white/20 px-4 py-16 text-center md:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className={`mb-6 text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
              >
                Non aspettare, iniziamo oggi
              </h2>
              <p
                className={`mx-auto mb-8 max-w-3xl font-light text-white/70 ${poppins.className}`}
              >
                Il momento migliore per iniziare è adesso. Contattaci per una
                consulenza gratuita e scopri come possiamo trasformare la tua
                visione in realtà.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#contact">
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`hover:bg-accent/20 mt-6 rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white ${tomorrow.className}`}
                  >
                    Inizia la tua trasformazione digitale
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
