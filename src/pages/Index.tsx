import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DatasetCard } from "@/components/DatasetCard";
import { Button } from "@/components/ui/button";

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
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-16 container"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            La plus grande base de données d'Algérie
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Accédez à des données fiables et à jour sur l'Algérie via notre API simple et puissante
          </p>
          <Button size="lg" className="bg-primary text-white">
            Explorer l'API
          </Button>
        </div>
      </motion.section>

      {/* Datasets Section */}
      <section className="py-16 container">
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