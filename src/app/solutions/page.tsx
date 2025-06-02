"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Calendar,
  Users,
  Zap,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Code,
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

export default function Solutions() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const progetti = [
    {
      id: 1,
      title: "EcoMarket Platform",
      client: "GreenTech Solutions",
      category: "E-commerce Sostenibile",
      year: "2024",
      duration: "8 mesi",
      team: "6 sviluppatori",
      description:
        "Piattaforma marketplace per prodotti eco-sostenibili con sistema di tracciabilità blockchain e carbon footprint calculator.",
      technologies: ["Next.js", "TypeScript", "Blockchain", "AI/ML"],
      metrics: [
        { label: "Venditori attivi", value: "500+" },
        { label: "Riduzione CO2", value: "30%" },
        { label: "Utenti registrati", value: "15K" },
      ],
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 2,
      title: "FinanceFlow Mobile",
      client: "BankTech Innovations",
      category: "Fintech App",
      year: "2024",
      duration: "12 mesi",
      team: "8 sviluppatori",
      description:
        "App mobile per gestione finanziaria personale con AI-powered insights e integrazione bancaria multi-istituto.",
      technologies: ["React Native", "AI/ML", "Microservices", "Security"],
      metrics: [
        { label: "Download", value: "100K+" },
        { label: "Rating App Store", value: "4.8/5" },
        { label: "Transazioni/mese", value: "2M+" },
      ],
      icon: Smartphone,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "HealthCare Dashboard",
      client: "MedTech Systems",
      category: "Healthcare SaaS",
      year: "2023",
      duration: "10 mesi",
      team: "5 sviluppatori",
      description:
        "Dashboard completa per la gestione di strutture sanitarie con monitoraggio real-time e analytics predittive.",
      technologies: ["Vue.js", "Python", "Analytics", "Real-time"],
      metrics: [
        { label: "Ospedali attivi", value: "50+" },
        { label: "Pazienti gestiti", value: "500K" },
        { label: "Efficienza", value: "+45%" },
      ],
      icon: Database,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 4,
      title: "LogiFlow Warehouse",
      client: "Supply Chain Pro",
      category: "Logistica IoT",
      year: "2023",
      duration: "6 mesi",
      team: "4 sviluppatori",
      description:
        "Sistema di gestione magazzino con IoT sensors, automazione robotica e ottimizzazione AI dei percorsi.",
      technologies: ["IoT", "Automation", "AI Optimization", "Real-time"],
      metrics: [
        { label: "Magazzini connessi", value: "25" },
        { label: "Efficienza picking", value: "+60%" },
        { label: "Errori ridotti", value: "-80%" },
      ],
      icon: ShoppingCart,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 5,
      title: "EduTech Platform",
      client: "Learning Innovations",
      category: "EdTech SaaS",
      year: "2024",
      duration: "14 mesi",
      team: "7 sviluppatori",
      description:
        "Piattaforma e-learning con VR integration, adaptive learning algorithms e sistema di valutazione automatica.",
      technologies: ["React", "VR/AR", "Machine Learning", "Cloud"],
      metrics: [
        { label: "Studenti attivi", value: "50K+" },
        { label: "Corsi disponibili", value: "1,200" },
        { label: "Completion rate", value: "85%" },
      ],
      icon: Code,
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      id: 6,
      title: "SecureAuth Enterprise",
      client: "CyberSec Corp",
      category: "Cybersecurity",
      year: "2023",
      duration: "9 mesi",
      team: "6 sviluppatori",
      description:
        "Sistema di autenticazione enterprise con biometria avanzata, zero-trust architecture e threat detection.",
      technologies: ["Security", "Biometrics", "Zero-Trust", "AI Detection"],
      metrics: [
        { label: "Aziende protette", value: "200+" },
        { label: "Minacce bloccate", value: "99.9%" },
        { label: "Compliance", value: "100%" },
      ],
      icon: Shield,
      color: "from-gray-500/20 to-slate-500/20",
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
                Progetti realizzati
              </h1>
              <p
                className={`mx-auto max-w-4xl text-xl text-white/70 md:text-2xl ${poppins.className}`}
              >
                Soluzioni digitali innovative che hanno trasformato il business
                dei nostri clienti, generando risultati misurabili e valore
                concreto.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="border-b border-white/20 py-16">
            <div className="grid grid-cols-2 gap-8 px-8 md:grid-cols-4 md:px-24">
              {[
                { icon: Calendar, label: "Anni di esperienza", value: "8+" },
                { icon: Users, label: "Progetti completati", value: "150+" },
                { icon: Zap, label: "Clienti soddisfatti", value: "95%" },
                { icon: Globe, label: "Paesi serviti", value: "12" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center border border-white/20">
                      <stat.icon
                        className="h-8 w-8 text-white"
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                  <h3
                    className={`mb-2 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
                  >
                    {stat.value}
                  </h3>
                  <p className={`text-sm text-white/60 ${poppins.className}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 md:px-24">
        <div className="border-s border-e border-white/20">
          <div className="px-8 py-20 md:px-24">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {progetti.map((progetto, index) => (
                <motion.div
                  key={progetto.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(progetto.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative cursor-pointer"
                >
                  <motion.div
                    className="h-full border border-white/20 p-8"
                    animate={{
                      backgroundColor:
                        hoveredProject === progetto.id ? "#ffffff" : "#000000",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {/* Project Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center">
                        <motion.div
                          className="mr-4 flex h-12 w-12 items-center justify-center border"
                          animate={{
                            borderColor:
                              hoveredProject === progetto.id
                                ? "rgba(0,0,0,0.2)"
                                : "rgba(255,255,255,0.2)",
                          }}
                        >
                          <progetto.icon
                            className="h-6 w-6"
                            style={{
                              color:
                                hoveredProject === progetto.id
                                  ? "#000000"
                                  : "#ffffff",
                            }}
                            strokeWidth={1}
                          />
                        </motion.div>
                        <div>
                          <motion.h3
                            className={`text-lg font-light md:text-xl ${tomorrow.className}`}
                            animate={{
                              color:
                                hoveredProject === progetto.id
                                  ? "#000000"
                                  : "#ffffff",
                            }}
                          >
                            {progetto.title}
                          </motion.h3>
                          <motion.p
                            className={`text-sm ${poppins.className}`}
                            animate={{
                              color:
                                hoveredProject === progetto.id
                                  ? "rgba(0,0,0,0.6)"
                                  : "rgba(255,255,255,0.6)",
                            }}
                          >
                            {progetto.client}
                          </motion.p>
                        </div>
                      </div>
                      <motion.span
                        className={`text-xs ${poppins.className}`}
                        animate={{
                          color:
                            hoveredProject === progetto.id
                              ? "rgba(0,0,0,0.5)"
                              : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {progetto.year}
                      </motion.span>
                    </div>

                    {/* Category Badge */}
                    <motion.div
                      className={`mb-4 inline-block border px-3 py-1 text-xs ${poppins.className}`}
                      animate={{
                        borderColor:
                          hoveredProject === progetto.id
                            ? "rgba(0,0,0,0.2)"
                            : "rgba(255,255,255,0.2)",
                        color:
                          hoveredProject === progetto.id
                            ? "#000000"
                            : "#ffffff",
                      }}
                    >
                      {progetto.category}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className={`mb-6 text-sm leading-relaxed ${poppins.className}`}
                      animate={{
                        color:
                          hoveredProject === progetto.id
                            ? "#374151"
                            : "#e5e7eb",
                      }}
                    >
                      {progetto.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <motion.h4
                        className={`mb-3 text-xs font-medium ${tomorrow.className}`}
                        animate={{
                          color:
                            hoveredProject === progetto.id
                              ? "#000000"
                              : "#ffffff",
                        }}
                      >
                        TECNOLOGIE
                      </motion.h4>
                      <div className="flex flex-wrap gap-2">
                        {progetto.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`border px-2 py-1 text-xs ${poppins.className}`}
                            animate={{
                              borderColor:
                                hoveredProject === progetto.id
                                  ? "rgba(0,0,0,0.2)"
                                  : "rgba(255,255,255,0.2)",
                              color:
                                hoveredProject === progetto.id
                                  ? "rgba(0,0,0,0.7)"
                                  : "rgba(255,255,255,0.7)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6">
                      <motion.h4
                        className={`mb-3 text-xs font-medium ${tomorrow.className}`}
                        animate={{
                          color:
                            hoveredProject === progetto.id
                              ? "#000000"
                              : "#ffffff",
                        }}
                      >
                        RISULTATI
                      </motion.h4>
                      <div className="grid grid-cols-3 gap-4">
                        {progetto.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <motion.div
                              className={`text-lg font-light ${tomorrow.className}`}
                              animate={{
                                color:
                                  hoveredProject === progetto.id
                                    ? "#000000"
                                    : "#ffffff",
                              }}
                            >
                              {metric.value}
                            </motion.div>
                            <motion.div
                              className={`text-xs ${poppins.className}`}
                              animate={{
                                color:
                                  hoveredProject === progetto.id
                                    ? "rgba(0,0,0,0.6)"
                                    : "rgba(255,255,255,0.6)",
                              }}
                            >
                              {metric.label}
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <motion.span
                          className={`block font-medium ${tomorrow.className}`}
                          animate={{
                            color:
                              hoveredProject === progetto.id
                                ? "#000000"
                                : "#ffffff",
                          }}
                        >
                          DURATA
                        </motion.span>
                        <motion.span
                          className={poppins.className}
                          animate={{
                            color:
                              hoveredProject === progetto.id
                                ? "rgba(0,0,0,0.6)"
                                : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {progetto.duration}
                        </motion.span>
                      </div>
                      <div>
                        <motion.span
                          className={`block font-medium ${tomorrow.className}`}
                          animate={{
                            color:
                              hoveredProject === progetto.id
                                ? "#000000"
                                : "#ffffff",
                          }}
                        >
                          TEAM
                        </motion.span>
                        <motion.span
                          className={poppins.className}
                          animate={{
                            color:
                              hoveredProject === progetto.id
                                ? "rgba(0,0,0,0.6)"
                                : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {progetto.team}
                        </motion.span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full rounded-none border font-light transition-all duration-300 hover:cursor-pointer ${tomorrow.className}`}
                        style={{
                          borderColor:
                            hoveredProject === progetto.id
                              ? "rgba(0,0,0,0.2)"
                              : "rgba(255,255,255,0.2)",
                          backgroundColor: "transparent",
                          color:
                            hoveredProject === progetto.id
                              ? "#000000"
                              : "#ffffff",
                        }}
                      >
                        Scopri il caso studio
                        <motion.div
                          animate={{
                            rotate: hoveredProject === progetto.id ? 45 : 0,
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

      {/* CTA Section */}
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
                Pronto per il tuo prossimo progetto?
              </h2>
              <p
                className={`mx-auto mb-8 max-w-3xl font-light text-white/70 ${poppins.className}`}
              >
                Trasformiamo le tue idee in soluzioni digitali innovative.
                Contattaci per discutere come possiamo aiutarti a raggiungere i
                tuoi obiettivi.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contacts">
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`hover:bg-accent/20 mt-6 rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white ${tomorrow.className}`}
                  >
                    Iniziamo a collaborare
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
