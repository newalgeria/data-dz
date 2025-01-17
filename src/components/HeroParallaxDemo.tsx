import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Pharmacies de Garde",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Wilayas",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Codes Postaux",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Communes",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Hôpitaux",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Universités",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Écoles",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Banques",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Administrations",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Transport",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Météo",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Entreprises",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Marchés",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Sports",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Culture",
    link: "/api",
    thumbnail: "/placeholder.svg",
  },
];

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}