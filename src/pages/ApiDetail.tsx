import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ApiDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  // Mock data - replace with actual API data fetching
  const apiData = {
    title: "API Pharmacies de Garde",
    description: `# API Pharmacies de Garde
    
Cette API permet d'accéder aux informations sur les pharmacies de garde en Algérie.

## Fonctionnalités principales

- Liste des pharmacies de garde par wilaya
- Recherche par commune
- Informations détaillées sur chaque pharmacie
- Mise à jour en temps réel`,
    documentation: `# Documentation technique

## Endpoints

GET /api/pharmacies/garde
GET /api/pharmacies/garde/{wilaya}
GET /api/pharmacies/garde/{wilaya}/{commune}

## Authentication

Bearer token requis pour tous les endpoints.`,
    availability: 99.9,
    requiresCredits: true,
    provider: {
      name: "Ministère de la Santé",
      contact: "contact@sante.gov.dz"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative">
          <AuroraBackground className="absolute top-0 left-0 right-0 h-[500px] -z-10" />
          
          <div className="container mx-auto px-4 pt-32">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {apiData.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                {apiData.availability}% disponibilité
              </span>
              {apiData.requiresCredits ? (
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Nécessite des crédits
                </span>
              ) : null}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="documentation">Documentation</TabsTrigger>
                  <TabsTrigger value="test">Tester l'API</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="prose dark:prose-invert max-w-none">
                  <div className="markdown-content">
                    {apiData.description}
                  </div>
                </TabsContent>

                <TabsContent value="documentation" className="prose dark:prose-invert max-w-none">
                  <div className="markdown-content">
                    {apiData.documentation}
                  </div>
                </TabsContent>

                <TabsContent value="test">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Testez l'API</h3>
                    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
                      <pre className="text-sm">
                        curl -X GET https://api.data-dz.com/pharmacies/garde \
                        -H "Authorization: Bearer YOUR_TOKEN"
                      </pre>
                    </div>
                    <Button>Essayer</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Contacter le fournisseur</h3>
              <p className="mb-4">
                Fournisseur: {apiData.provider.name}
              </p>
              <Button variant="outline">
                <a href={`mailto:${apiData.provider.contact}`}>
                  Contacter par email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDetail;