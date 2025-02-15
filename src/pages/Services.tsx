
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Home, FileCheck, MapPin, Search, Key } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Vente immobilière",
      description: "Achat et vente de biens immobiliers : maisons, appartements, terrains",
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: "Location",
      description: "Gestion locative complète : recherche de locataires, états des lieux, suivi",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Assistance juridique",
      description: "Conseil et accompagnement dans vos démarches administratives et juridiques",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Géométrie",
      description: "Services de géométrie : plan parcellaire, bornage, lotissement",
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Recherche personnalisée",
      description: "Recherche de biens selon vos critères spécifiques",
    },
    {
      icon: <Key className="w-12 h-12 text-primary" />,
      title: "Gestion de patrimoine",
      description: "Gestion et valorisation de votre patrimoine immobilier",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Nos Prestations</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
