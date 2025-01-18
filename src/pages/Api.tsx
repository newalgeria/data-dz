import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Marquee } from "@/components/ui/marquee";
import { Lock, Unlock } from "lucide-react";

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

const apis = [
  {
    title: "Pharmacies API",
    description: "API complète des pharmacies de garde",
    availability: 99.9,
    requiresCredits: true,
    documentation: "/api/docs/pharmacies",
    version: "v1.0",
  },
  {
    title: "Wilayas API",
    description: "Données géographiques des wilayas",
    availability: 100,
    requiresCredits: false,
    documentation: "/api/docs/wilayas",
    version: "v2.1",
  },
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
            <h2 className="text-xl font-semibold mb-4">Technologies Supportées</h2>
            <Marquee className="py-4">
              {technologies.map((tech) => (
                <span key={tech} className="mx-8 text-primary-foreground">
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>

          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Nos APIs</h2>
              <Input
                placeholder="Rechercher une API..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-xs dark:bg-gray-800"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {apis
                .filter((api) =>
                  api.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((api) => (
                  <div key={api.title} className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{api.title}</h3>
                      {api.requiresCredits ? (
                        <Lock className="text-yellow-500" />
                      ) : (
                        <Unlock className="text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">{api.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">
                        Disponibilité: {api.availability}%
                      </span>
                      <span className="text-gray-400">{api.version}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="mx-auto">
              Proposer une API
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;