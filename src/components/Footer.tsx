
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">ASBAN IMMO</h3>
            <p className="text-gray-600 mb-4">
              "Une seule adresse pour trouver la vôtre"
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>652J+3QW - Totsivi, Maritime, Lomé - Togo</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>(+228) 92 45 50 50</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@asbanimmo.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/annonces" className="text-gray-600 hover:text-primary transition-colors">
                  Annonces
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} ASBAN IMMO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
