import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { DataSearch } from "@/components/DataSearch";
import { Statistics } from "@/components/Statistics";
import { Supporters } from "@/components/Supporters";
import { DatasetCard } from "@/components/DatasetCard";
import { AuroraText } from "@/components/AuroraText";
import { SparklesText } from "@/components/ui/sparkles-text";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { GraphDataMovement } from "@/components/GraphDataMovement";
import ReactCountryFlag from "react-country-flag";

const datasets = [
  {
    title: "Pharmacies de Garde",
    description:
      "Accédez en temps réel aux pharmacies de garde dans toute l'Algérie",
    organization: "Ministère de la Santé",
    organizationLogo: "/placeholder.svg",
    keywords: ["santé", "pharmacie", "urgence"],
    lastUpdate: "2024-03-15",
    downloads: 1245,
    views: 5890,
    price: 2,
    category: "Santé",
  },
  {
    title: "Wilayas",
    description: "Données détaillées sur les 58 wilayas d'Algérie",
    organization: "Ministère de l'Intérieur",
    organizationLogo: "/placeholder.svg",
    keywords: ["géographie", "administration", "territoire"],
    lastUpdate: "2024-03-10",
    downloads: 3456,
    views: 12890,
    price: 1,
    category: "Géographie",
  },
  {
    title: "Codes Postaux",
    description: "Base de données complète des codes postaux algériens",
    organization: "Algérie Poste",
    organizationLogo: "/placeholder.svg",
    keywords: ["adresse", "postal", "localisation"],
    lastUpdate: "2024-03-12",
    downloads: 2789,
    views: 8900,
    price: 1,
    category: "Adresses",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <Navbar />

      {/* Hero Section with Parallax */}
      <HeroParallaxDemo />

      {/* Datasets Section */}
      <section className=" z-10 backdrop-blur-lg mt-[170vh] ">
        <div className="flex flex-col  lg:flex-row ">
          <HeroHighlight className="-mt-60 md:-mt-36 lg:-mt-24">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Hi👋, you are in the right place to find{" "}
              <Highlight className="text-black dark:text-white">
                the best datasets of <ReactCountryFlag countryCode="DZ" svg />{" "}
                Algeria .
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          {/* Data Section */}
          <GraphDataMovement className="-mt-72 px-20 md:-mt-36 lg:-mt-0" />
        </div>
      </section>

      {/* Data Search Section */}
      <DataSearch />

      {/* Statistics Section */}
      <Statistics />

      {/* Supporters Section */}
      <Supporters />
    </div>
  );
};

export default Index;
