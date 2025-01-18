import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DATA_DZ_LOGO from "../assets/img/data_dz_logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={DATA_DZ_LOGO} alt="Data DZ" className="h-20" />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-primary">
            Accueil
          </Link>
          <Link to="/api" className="text-gray-600 hover:text-primary">
            API
          </Link>
          <Button variant="default" className="bg-primary text-white">
            Commencer
          </Button>
        </div>
      </div>
    </nav>
  );
};
