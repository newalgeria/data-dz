import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">À propos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Data DZ fournit des APIs et données sur l'Algérie pour les développeurs et entreprises.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/api" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  APIs
                </Link>
              </li>
              <li>
                <Link to="/getting-started" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Commencer
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Se connecter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Email: contact@data-dz.com<br />
              Suivez-nous sur les réseaux sociaux
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Data DZ. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};