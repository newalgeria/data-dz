import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DatasetCard } from "@/components/DatasetCard";
import { Button } from "@/components/ui/button";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";

const datasets = [
  {
    title: "Pharmacies de Garde",
    description: "Accédez en temps réel aux pharmacies de garde dans toute l'Algérie",
    price: 2,
    category: "Santé"
  },
  {
    title: "Wilayas",
    description: "Données détaillées sur les 58 wilayas d'Algérie",
    price: 1,
    category: "Géographie"
  },
  {
    title: "Codes Postaux",
    description: "Base de données complète des codes postaux algériens",
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
      <section className="py-16 container relative z-10 bg-white/80 backdrop-blur-lg rounded-lg mt-[200vh]">
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

      {/* How it Works */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Créez un compte</h3>
              <p>Inscrivez-vous gratuitement pour commencer</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Achetez des crédits</h3>
              <p>Choisissez le forfait qui vous convient</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Utilisez l'API</h3>
              <p>Intégrez nos données à vos applications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;