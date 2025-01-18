import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { DataSearch } from "@/components/DataSearch";
import { Statistics } from "@/components/Statistics";
import { Supporters } from "@/components/Supporters";
import { AuroraText } from "@/components/AuroraText";
import { SparklesText } from "@/components/ui/sparkles-text";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { GraphDataMovement } from "@/components/GraphDataMovement";
import ReactCountryFlag from "react-country-flag";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section with Parallax */}
      <main className="flex-grow">
        <HeroParallaxDemo />

        {/* Datasets Section */}
        <section className="z-10 backdrop-blur-lg mt-[170vh]">
          <div className="flex flex-col lg:flex-row">
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
                className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
              >
                Hi👋, you are in the right place to find{" "}
                <Highlight className="text-gray-900 dark:text-white">
                  the best datasets of <ReactCountryFlag countryCode="DZ" svg />{" "}
                  Algeria.
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;