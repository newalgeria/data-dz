import { Features } from "@/components/ui/features";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Database, LineChart, Lock, Users } from "lucide-react";

const featuresData = [
  {
    id: 1,
    title: "Données Ouvertes",
    content: "Accédez à une vaste collection de données publiques algériennes",
    icon: <Database className="h-6 w-6 text-primary" />,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Visualisation Interactive",
    content: "Analysez les données avec des outils de visualisation puissants",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Collaboration",
    content: "Travaillez en équipe et partagez vos analyses",
    icon: <Users className="h-6 w-6 text-primary" />,
    image: "/placeholder.svg"
  }
];

export default function GettingStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Commencez votre voyage avec Data DZ
        </h1>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez comment Data DZ peut vous aider à explorer et analyser les données publiques algériennes
        </p>
        
        <Features 
          data={featuresData}
          collapseDelay={5000}
          linePosition="left"
        />

        <div className="mt-16 text-center">
          <Button 
            onClick={() => navigate("/login")}
            size="lg"
            className="group"
          >
            Créer un compte
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}