"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Code,
  CheckCircle,
  Users,
  Zap,
  FileText,
} from "lucide-react";
import { Tomorrow, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ElevenAuth() {
  return (
    <section className="bg-black">
      <div className="flex h-full w-full flex-col">
        {/* Hero Section */}
        <div className="border-b border-white/20 py-16">
          <div className="text-center">
            <h1
              className={`mb-6 text-4xl font-light text-white md:text-5xl lg:text-7xl ${tomorrow.className}`}
            >
              elevenauth
            </h1>
            <p
              className={`mb-8 text-xl text-white/70 md:text-2xl ${poppins.className}`}
            >
              La soluzione per trasformare la tua idea in realtà
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-b border-white/20 bg-white py-16">
          <div className="px-8 md:px-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`mb-8 text-2xl font-light text-black md:text-3xl ${tomorrow.className}`}
              >
                La soluzione completa per il tuo progetto digitale
              </h2>
              <div className={`space-y-6 text-black/80 ${poppins.className}`}>
                <p className="text-lg leading-relaxed">
                  ElevenAuth è il nostro pacchetto completo progettato per
                  trasformare la tua visione in un prodotto digitale funzionante
                  in tempi rapidi. <br /> Combinando competenze di design,
                  sviluppo e strategia, creiamo soluzioni su misura che
                  rispondono alle esigenze specifiche del tuo business.
                </p>
                <p className="text-lg leading-relaxed">
                  Il nostro approccio si basa sulla creazione di un Minimum
                  Viable Product (MVP) che ti permette di validare la tua idea
                  sul mercato con un investimento iniziale contenuto.
                  <br /> Attraverso un processo strutturato e trasparente, ti
                  guidiamo dalla fase di ideazione fino al lancio del prodotto,
                  garantendo risultati di qualità e rispetto delle tempistiche.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border-b border-white/20">
          <div className="grid grid-cols-1 gap-12 px-8 md:grid-cols-2 md:px-24">
            <div className="border-e border-white/20 py-16">
              <h2
                className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
              >
                Cosa include
              </h2>
              <ul className={`space-y-4 ${poppins.className}`}>
                {[
                  "Analisi approfondita dei requisiti e definizione della roadmap di progetto",
                  "Progettazione UI/UX responsive centrata sull'esperienza utente",
                  "Sviluppo completo dell'MVP con tecnologie moderne e best practice",
                  "Integrazione con sistemi di hosting affidabili e configurazione della pipeline di deployment",
                  "Supporto via email durante e dopo il rilascio",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-white/80"
                  >
                    <CheckCircle
                      className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-white"
                      strokeWidth={1}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="py-16">
              <h2
                className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
              >
                Perfetto per
              </h2>
              <div className={`space-y-4 text-white/80 ${poppins.className}`}>
                <p>
                  • Startup che vogliono validare rapidamente la loro idea sul
                  mercato
                </p>
                <p>
                  • Imprenditori che hanno bisogno di un MVP funzionante in
                  tempi brevi
                </p>
                <p>• Aziende che vogliono testare nuovi prodotti digitali</p>
                <p>• Team che necessitano di supporto tecnico specializzato</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="border-b border-white/20 bg-white py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`mb-12 text-center text-2xl font-light text-black md:text-3xl ${tomorrow.className}`}
            >
              Il nostro processo
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="border border-black/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/20">
                    <FileText className="h-6 w-6 text-black" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-black ${tomorrow.className}`}
                  >
                    1. Analisi e Pianificazione
                  </h3>
                </div>
                <p className={`text-black/80 ${poppins.className}`}>
                  Iniziamo con un&apos;analisi approfondita delle tue esigenze e
                  obiettivi. Definiamo insieme il perimetro del progetto,
                  identifichiamo le funzionalità chiave e creiamo una roadmap
                  dettagliata che guiderà l&apos;intero processo di sviluppo.
                  Questa fase è fondamentale per allineare le aspettative e
                  stabilire metriche di successo chiare.
                </p>
              </div>

              <div className="border border-black/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/20">
                    <Users className="h-6 w-6 text-black" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-black ${tomorrow.className}`}
                  >
                    2. Design e Prototipazione
                  </h3>
                </div>
                <p className={`text-black/80 ${poppins.className}`}>
                  Creiamo wireframe e prototipi interattivi che visualizzano
                  l&apos;interfaccia utente e il flusso di navigazione. Questo
                  ti permette di vedere e testare il prodotto prima che venga
                  sviluppato, riducendo il rischio di modifiche costose in fasi
                  successive. Il nostro approccio al design è minimalista,
                  funzionale e centrato sull&apos;utente.
                </p>
              </div>

              <div className="border border-black/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/20">
                    <Code className="h-6 w-6 text-black" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-black ${tomorrow.className}`}
                  >
                    3. Sviluppo e Testing
                  </h3>
                </div>
                <p className={`text-black/80 ${poppins.className}`}>
                  Implementiamo il tuo prodotto utilizzando tecnologie moderne e
                  scalabili. Adottiamo un approccio iterativo con cicli di
                  sviluppo brevi che ti permettono di vedere i progressi
                  regolarmente. Ogni funzionalità viene rigorosamente testata
                  per garantire stabilità, sicurezza e prestazioni ottimali su
                  tutti i dispositivi.
                </p>
              </div>

              <div className="border border-black/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/20">
                    <Zap className="h-6 w-6 text-black" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-black ${tomorrow.className}`}
                  >
                    4. Lancio e Supporto
                  </h3>
                </div>
                <p className={`text-black/80 ${poppins.className}`}>
                  Gestiamo il processo di deployment e configuriamo
                  l&apos;infrastruttura necessaria per il lancio. Dopo il
                  rilascio, forniamo supporto tecnico per risolvere eventuali
                  problemi e implementare miglioramenti basati sul feedback
                  degli utenti. Il nostro obiettivo è garantire che il tuo
                  prodotto continui a funzionare senza intoppi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="border-b border-white/20 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`mb-8 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Stack tecnologico
            </h2>
            <p
              className={`mb-12 text-center text-lg text-white/80 ${poppins.className}`}
            >
              Utilizziamo tecnologie all&apos;avanguardia per garantire che il
              tuo prodotto sia veloce, sicuro e scalabile.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Frontend
                </h3>
                <p className={`text-white/80 ${poppins.className}`}>
                  React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                </p>
              </div>

              <div className="border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Backend
                </h3>
                <p className={`text-white/80 ${poppins.className}`}>
                  Node.js, Express, NestJS, GraphQL, REST API
                </p>
              </div>

              <div className="border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Database & Cloud
                </h3>
                <p className={`text-white/80 ${poppins.className}`}>
                  PostgreSQL, MongoDB, Firebase, AWS, Vercel
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="border-b border-white/20 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`mb-8 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Casi studio
            </h2>

            <div className="space-y-12">
              <div className="border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Piattaforma di prenotazione per studio medico
                </h3>
                <p className={`mb-6 text-white/80 ${poppins.className}`}>
                  Abbiamo sviluppato un sistema completo di prenotazione online
                  per uno studio medico specializzato, permettendo ai pazienti
                  di prenotare appuntamenti 24/7 e ai medici di gestire il
                  proprio calendario in modo efficiente. La soluzione ha incluso
                  un sistema di notifiche automatiche e integrazione con il
                  software gestionale esistente.
                </p>
                <div className={`space-y-2 ${poppins.className}`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span>{" "}
                    Ridurre il carico di lavoro del personale di reception e
                    migliorare l&apos;esperienza dei pazienti.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    Interfaccia intuitiva con calendario dinamico e sistema di
                    gestione degli slot disponibili.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Riduzione del 70% delle chiamate per prenotazioni e aumento
                    del 30% dell&apos;efficienza operativa.
                  </p>
                </div>
              </div>

              <div className="border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  App di delivery per ristorante locale
                </h3>
                <p className={`mb-6 text-white/80 ${poppins.className}`}>
                  Per un ristorante che voleva espandere il proprio business
                  durante la pandemia, abbiamo creato un&apos;applicazione di
                  food delivery personalizzata che ha permesso loro di gestire
                  gli ordini direttamente, senza dipendere da piattaforme terze
                  con commissioni elevate. L&apos;app include funzionalità di
                  tracciamento in tempo reale e pagamenti online sicuri.
                </p>
                <div className={`space-y-2 ${poppins.className}`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span>{" "}
                    Creare un canale di vendita diretto evitando le commissioni
                    delle piattaforme di delivery.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    App mobile con sistema di ordini, pagamenti e gestione delle
                    consegne integrato.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Aumento del 40% del fatturato e miglioramento della
                    fidelizzazione dei clienti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-b border-white/20 py-16">
          <div className="">
            <h2
              className={`mb-12 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Domande frequenti
            </h2>

            <Accordion type="single" collapsible className="space-y-0">
              <AccordionItem
                value="item-1"
                className="border border-white/20 px-8 md:px-24"
              >
                <AccordionTrigger
                  className={`px-6 py-4 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Quanto tempo ci vuole per sviluppare un MVP?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 pb-6 text-white/80 ${poppins.className}`}
                >
                  I tempi di sviluppo variano in base alla complessità del
                  progetto, ma generalmente un MVP richiede da 6 a 12 settimane.
                  Durante la fase di analisi iniziale, definiremo insieme una
                  timeline realistica basata sulle tue esigenze specifiche e
                  priorità. Il nostro approccio iterativo ti permette di vedere
                  progressi tangibili fin dalle prime settimane.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-white/20 px-8 md:px-24"
              >
                <AccordionTrigger
                  className={`px-6 py-4 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Come gestite le modifiche durante lo sviluppo?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 pb-6 text-white/80 ${poppins.className}`}
                >
                  Comprendiamo che le esigenze possono evolvere durante lo
                  sviluppo. Utilizziamo metodologie agili che ci permettono di
                  adattarci ai cambiamenti in modo efficiente. Per modifiche
                  significative che esulano dall&apos;ambito iniziale,
                  discutiamo insieme l&apos;impatto su tempi e costi prima di
                  procedere. La trasparenza è un valore fondamentale per noi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-white/20 px-8 md:px-24"
              >
                <AccordionTrigger
                  className={`px-6 py-4 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Chi possiede il codice e la proprietà intellettuale?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 pb-6 text-white/80 ${poppins.className}`}
                >
                  Tu mantieni la piena proprietà di tutto il codice, design e
                  contenuti sviluppati durante il progetto. Al completamento, ti
                  forniamo l&apos;accesso completo ai repository di codice e a
                  tutta la documentazione tecnica. Utilizziamo quando possibile
                  tecnologie open source per evitare costi di licenza
                  ricorrenti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-white/20 px-8 last:border md:px-24"
              >
                <AccordionTrigger
                  className={`px-6 py-4 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Offrite supporto continuo dopo il lancio?
                </AccordionTrigger>
                <AccordionContent
                  className={`px-6 pb-6 text-white/80 ${poppins.className}`}
                >
                  Sì, offriamo diversi livelli di supporto post-lancio. Ogni
                  progetto include un periodo di supporto base per risolvere
                  eventuali problemi iniziali. Per esigenze a lungo termine,
                  proponiamo contratti di manutenzione mensili o trimestrali che
                  includono aggiornamenti, ottimizzazioni e implementazione di
                  nuove funzionalità in base al feedback degli utenti.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-b border-white/20 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2
              className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Pronto a iniziare?
            </h2>
            <p
              className={`mx-auto mb-8 max-w-2xl text-white/70 ${poppins.className}`}
            >
              Contattaci per discutere il tuo progetto e ricevere un preventivo
              personalizzato. Il primo colloquio di consulenza è gratuito e
              senza impegno.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`rounded-none bg-white font-light text-black hover:bg-white/90 ${tomorrow.className}`}
                  >
                    Richiedi preventivo
                    <ArrowUpRight viewBox="4 4 16 16" strokeWidth={1} />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
