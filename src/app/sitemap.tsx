import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/favicon.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_ade.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_azienda.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_dark_cropped.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/iot.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_light_cropped.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_psd2.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_text_dark.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_text_light.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/logo_pagopa.svg"],
    },
    {
      url: "https://www.elevenhats.it",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.elevenhats.it/logo/spid_logo.svg"],
    },
  ];
}
