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
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { SparklesText } from "./ui/sparkles-text";
import { datasets } from "@/data/FakeDataset";
import { DatasetCard } from "./DatasetCard";

const placeholders = [
  "Election présidentielle 2024",
  "Covid-19 Algérie",
  "Statistiques économiques",
  "Météo Oran",
];

export const DataSearch = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="py-6 px-4 mt-5 bg-accent dark:bg-inherit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/*  <h2 className="text-2xl font-bold mb-2">Rechercher des données</h2> */}
        <SparklesText
          className="text-2xl font-bold mb-2 text-center"
          text="Rechercher des données"
        />

        <div className="flex justify-start">
          {/* <Input
            placeholder="Ex: élection présidentielle 2024"
            className="flex-grow"
          />
          <Button>
            <Search className="mr-2" />
            Rechercher
          </Button> */}
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
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
