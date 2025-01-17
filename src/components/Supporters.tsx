import { motion } from "framer-motion";

const supporters = [
  {
    name: "Sonatrach",
    logo: "/placeholder.svg",
    type: "enterprise"
  },
  {
    name: "Sonelgaz",
    logo: "/placeholder.svg",
    type: "enterprise"
  },
  {
    name: "Algérie Télécom",
    logo: "/placeholder.svg",
    type: "enterprise"
  }
];

export const Supporters = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{supporter.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};