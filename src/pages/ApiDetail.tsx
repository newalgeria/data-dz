import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { ApiData } from "@/interface/ApiInterface";
import { apis } from "@/data/FakeApi";
import { Navbar } from "@/components/Navbar";
import ReactMarkdown from "react-markdown";

export default function ApiDetail() {
  const { id } = useParams();

  const [fetching, setFetching] = useState(true);
  const [apiData, setApiData] = useState<ApiData | null>(null);

  useEffect(() => {
    // Simule une récupération d'API par ID
    const selectedApi = apis.find((api) => api.slug === id);
    setApiData(selectedApi || null);
    setFetching(false);
  }, [id]);

  if (fetching) return <div>Chargement...</div>;
  if (!apiData) return <div>API non trouvée</div>;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Navbar />
      {/* Titre principal */}
      <header className="mb-8 mt-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {apiData.title}
        </h1>
        <div className="flex items-center gap-4">
          <Badge
            content={`${apiData.availability}% disponibilité`}
            type="success"
          />
          {apiData.requiresCredits && (
            <Badge content="Nécessite des crédits" type="warning" />
          )}
        </div>
      </header>

      {/* Contenu principal */}
      <main className="bg-card rounded-lg shadow-lg p-6">
        <Tabs defaultValue="description">
          <TabsList className="flex space-x-4 mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="test">Tester l'API</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <ReactMarkdown>{apiData.descriptionMD}</ReactMarkdown>
          </TabsContent>
          <TabsContent value="documentation">
            <ReactMarkdown>{apiData.documentationMD}</ReactMarkdown>
          </TabsContent>
          <TabsContent value="test">
            <div className="prose dark:prose-invert">
              {/* Ajouter le contenu de test ici */}
              <p>Section pour tester l'API (à implémenter).</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

// Composant Badge générique
const Badge = ({
  content,
  type,
}: {
  content: string;
  type: "success" | "warning";
}) => {
  const typeClasses =
    type === "success"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  return (
    <span className={`text-sm px-2 py-1 rounded ${typeClasses}`}>
      {content}
    </span>
  );
};
