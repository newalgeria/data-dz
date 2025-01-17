import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { DataSearch } from "@/components/DataSearch";
import { Statistics } from "@/components/Statistics";
import { Supporters } from "@/components/Supporters";
import { DatasetCard } from "@/components/DatasetCard";

const datasets = [
  {
    title: "Pharmacies de Garde",
    description: "Accédez en temps réel aux pharmacies de garde dans toute l'Algérie",
    organization: "Ministère de la Santé",
    organizationLogo: "/placeholder.svg",
    keywords: ["santé", "pharmacie", "urgence"],
    lastUpdate: "2024-03-15",
    downloads: 1245,
    views: 5890,
    price: 2,
    category: "Santé"
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
    category: "Géographie"
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
    category: "Adresses"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <HeroParallaxDemo />

      {/* Datasets Section */}
      <section className="py-16 container relative z-10 bg-white/80 backdrop-blur-lg mt-[200vh]">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Jeux de Données</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((dataset) => (
            <motion.div
              key={dataset.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <DatasetCard {...dataset} />
            </motion.div>
          ))}
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