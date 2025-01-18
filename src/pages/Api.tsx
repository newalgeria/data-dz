import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Marquee } from "@/components/ui/marquee";
import { Lock, Unlock } from "lucide-react";
import { apis } from "@/data/FakeApi";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { ApiSearch } from "@/components/ApiSearch";

const technologies = [
  "REST API",
  "GraphQL",
  "WebSocket",
  "gRPC",
  "OAuth 2.0",
  "JWT",
  "OpenAPI",
  "Swagger",
];

const Api = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container relative pt-32 pb-16">
          <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Technologies Supportées
            </h2>
            <Marquee className="py-4">
              {technologies.map((tech) => (
                <span key={tech} className="mx-8 text-primary-foreground">
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>

          <ApiSearch />

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="mx-auto text-slate-900 dark:text-white dark:hover:bg-gray-800"
              onClick={() =>
                window.open(
                  `mailto:new-algeria.org@gmail.com?subject=Proposition%20d%27API&body=Bonjour%2C%0A%0AJe%20souhaite%20proposer%20une%20API%20pour%20votre%20plateforme.%20Voici%20les%20d%C3%A9tails%20%3A%0A%0ANom%20de%20l%27API%20%3A%20%0A%0ADescription%20%3A%20%0A%0AURL%20de%20l%27API%20%3A%20%0A%0ACordialement%2C%0AVotre%20Nom`
                )
              }
            >
              Proposer une API
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Api;
