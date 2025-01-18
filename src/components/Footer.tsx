import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Data DZ</h3>
            <p className="text-gray-600 dark:text-gray-300">
              La plateforme de données de référence pour l'Algérie.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">APIs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/api" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  Explorer les APIs
                </Link>
              </li>
              <li>
                <Link to="/getting-started" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  Commencer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://github.com/data-dz" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@data-dz.com" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  Email
                </a>
              </li>
              <li>
                <a href="https://twitter.com/data_dz" className="text-gray-600 hover:text-primary dark:text-gray-300">
                  Twitter
                </a>
              </li>
            </ul>
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