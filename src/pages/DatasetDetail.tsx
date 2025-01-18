import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, FileText, Database, User } from "lucide-react";
import { Dataset } from "@/interface/DatasetInterface";
import { datasets } from "@/data/FakeDataset";

const DatasetDetail = () => {
  const { id } = useParams();

  const [fetching, setFetching] = useState(true);
  const [dataset, setDataset] = useState<Dataset>(null as any);

  useEffect(() => {
    // Fetch dataset by id
    // setDataset(response.data);

    datasets.forEach((dataset) => {
      if (dataset.slug === id) {
        setDataset(dataset);
        setFetching(false);
      }
    });
  });

  if (fetching) {
    return <div>Chargement...</div>;
  }

  if (!dataset) {
    return <div>Dataset not found</div>;
  }
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="space-y-8">
          {/* En-tête */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">{dataset.title}</h1>
              <div className="flex gap-4 items-center">
                <Badge variant="secondary">
                  <FileText className="w-4 h-4 mr-2" />
                  {dataset.fileInfo.format}
                </Badge>
                <span className="text-muted-foreground flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  {dataset.fileInfo.records} enregistrements
                </span>
                <span className="text-muted-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Mis à jour le {dataset.fileInfo.lastUpdate}
                </span>
              </div>
            </div>

            {dataset.relatedApi && (
              <Link to={dataset.relatedApi}>
                <Button>Voir l'API associée</Button>
              </Link>
            )}
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none bg-card p-6 rounded-lg">
            <div className="markdown-content">{dataset.description}</div>
          </div>

          {/* Aperçu des données */}
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Aperçu des données</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Nom</th>
                    <th className="text-left p-2">Adresse</th>
                    <th className="text-left p-2">Wilaya</th>
                  </tr>
                </thead>
                <tbody>
                  {dataset.preview.map((item) => (
                    <tr key={item.id} className="border-b dark:border-gray-700">
                      <td className="p-2">{item.id}</td>
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.address}</td>
                      <td className="p-2">{item.wilaya}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Informations sur le fournisseur */}
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Fournisseur</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-6 h-6 mr-2" />
                <span>{dataset.provider.name}</span>
              </div>
              <Button variant="outline" asChild>
                <a href={`mailto:${dataset.provider.contact}`}>
                  Contacter le fournisseur
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

export default DatasetDetail;
