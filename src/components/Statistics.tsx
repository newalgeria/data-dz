import { motion } from "framer-motion";
import { Users, Database, Building2, Download } from "lucide-react";

const stats = [
  {
    label: "Utilisateurs actifs",
    value: "2,500+",
    icon: Users,
  },
  {
    label: "Jeux de données",
    value: "150+",
    icon: Database,
  },
  {
    label: "Organisations",
    value: "45+",
    icon: Building2,
  },
  {
    label: "Téléchargements",
    value: "10,000+",
    icon: Download,
  },
];

export const Statistics = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos chiffres clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};