import { Marquee } from "@/components/ui/marquee";

const supporters = [
  {
    name: "Sonatrach",
    url: "/placeholder.svg",
  },
  {
    name: "Sonelgaz",
    url: "/placeholder.svg",
  },
  {
    name: "Algérie Télécom",
    url: "/placeholder.svg",
  },
  {
    name: "Air Algérie",
    url: "/placeholder.svg",
  },
  {
    name: "ENIE",
    url: "/placeholder.svg",
  },
  {
    name: "SNVI",
    url: "/placeholder.svg",
  },
];

export const Supporters = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ils nous font confiance</h2>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]" pauseOnHover>
            {supporters.map((supporter, idx) => (
              <img
                key={idx}
                src={supporter.url}
                className="h-20 w-40 mx-8 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                alt={supporter.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-gray-900"></div>
        </div>
      </div>
    </section>
  );
};