import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "./components/Header";

import { TRPCReactProvider } from "@/trpc/react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  // Basic
  title: "elevenhats",
  description: "La prima boutique del software in Italia",
  applicationName: "elevenhats",
  authors: [{ name: "ElevenHats Team", url: "https://www.elevenhats.it" }],
  creator: "ElevenHats Team",
  publisher: "ElevenHats S.r.l.",
  generator: "Next.js",

  // Icons and Manifest
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
  ],
  manifest: "/site.webmanifest",

  // Viewport & Referrer
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph - Single page uses favicon.svg for preview
  openGraph: {
    title: "elevenhats",
    description: "La prima boutique del software in Italia",
    url: "https://www.elevenhats.it",
    siteName: "elevenhats",
    images: [
      {
        url: "https://www.elevenhats.it/meta/og_logo.png",
        width: 1200,
        height: 630,
        alt: "elevenhats logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@elevenhats",
    creator: "@elevenhats",
    title: "elevenhats",
    description: "La prima boutique del software in Italia",
    images: ["https://www.elevenhats.it/meta/twitter_logo.png"],
  },

  // Alternate - only canonical for single page
  alternates: {
    canonical: "https://www.elevenhats.it",
  },

  // Verification tokens
  verification: {
    google: "ufRO8PtGWD-CzaaMwJvAGj4-Kvy48BO0MsBRqceJivM",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-black">
        <Header />
        <TRPCReactProvider>
          {children}

          <Contact />
        </TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
