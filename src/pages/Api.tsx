import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Api = () => {
  const [endpoint, setEndpoint] = useState("/api/pharmacies");
  const [response, setResponse] = useState("");

  const handleTest = () => {
    // Simuler une réponse API
    const fakeResponse = {
      success: true,
      data: {
        pharmacies: [
          {
            name: "Pharmacie Centrale",
            address: "123 Rue Didouche Mourad, Alger",
            isOpen: true
          }
        ]
      }
    };
    setResponse(JSON.stringify(fakeResponse, null, 2));
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      
      <div className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Documentation API</h1>
        
        <Tabs defaultValue="test" className="w-full">
          <TabsList>
            <TabsTrigger value="test">Tester l'API</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="test" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Console de Test</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Endpoint</label>
                  <Input 
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button onClick={handleTest}>Tester</Button>
                {response && (
                  <pre className="bg-gray-100 p-4 rounded overflow-auto">
                    {response}
                  </pre>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="docs">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Documentation</h2>
              <div className="prose max-w-none">
                <h3>Authentication</h3>
                <p>Pour utiliser l'API, vous devez inclure votre clé API dans l'en-tête de chaque requête :</p>
                <pre className="bg-gray-100 p-4 rounded">
                  {`Authorization: Bearer YOUR_API_KEY`}
                </pre>
                
                <h3 className="mt-6">Endpoints</h3>
                <ul>
                  <li><code>/api/pharmacies</code> - Liste des pharmacies de garde</li>
                  <li><code>/api/wilayas</code> - Informations sur les wilayas</li>
                  <li><code>/api/postal-codes</code> - Recherche de codes postaux</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Api;