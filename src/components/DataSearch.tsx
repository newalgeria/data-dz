import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatasetCard } from "./DatasetCard";
import { motion } from "framer-motion";

const datasets = [
  {
    title: "Pharmacies de Garde",
    description: "Base de données des pharmacies de garde en Algérie",
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
    title: "Registre du Commerce",
    description: "Données des entreprises inscrites au registre du commerce",
    organization: "Ministère du Commerce",
    organizationLogo: "/placeholder.svg",
    keywords: ["commerce", "entreprises", "économie"],
    lastUpdate: "2024-03-10",
    downloads: 3456,
    views: 12890,
    price: 3,
    category: "Économie"
  },
  {
    title: "Données Météorologiques",
    description: "Historique et prévisions météorologiques par wilaya",
    organization: "Office National de la Météorologie",
    organizationLogo: "/placeholder.svg",
    keywords: ["météo", "climat", "prévisions"],
    lastUpdate: "2024-03-14",
    downloads: 2789,
    views: 8900,
    price: 1,
    category: "Environnement"
  }
];

export const DataSearch = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Rechercher des données</h2>
        
        <div className="flex gap-4 mb-8">
          <Input 
            placeholder="Ex: élection présidentielle 2024" 
            className="flex-grow"
          />
          <Button>
            <Search className="mr-2" />
            Rechercher
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{datasets.length} résultats</p>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Pertinence</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="popularity">Popularité</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((dataset) => (
            <motion.div
              key={dataset.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DatasetCard {...dataset} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};