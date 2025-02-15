
import Layout from "@/components/Layout";
import { Award, Users, Target, Shield, ThumbsUp, Building } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "30+ ans d'expérience",
      description: "Une expertise reconnue dans le secteur immobilier togolais",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Équipe professionnelle",
      description: "Des experts qualifiés et passionnés à votre service",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Agence de confiance",
      description: "Classée parmi les meilleures agences du Togo",
    },
  ];

  const services = [
    {
      icon: <Building className="w-8 h-8 text-white" />,
      title: "Vente",
      description: "Accompagnement complet pour l'achat et la vente de biens",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: "Location",
      description: "Solutions adaptées pour logements résidentiels et commerciaux",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Conseil",
      description: "Expertise stratégique pour optimiser vos investissements",
    },
  ];

  return (
    <Layout>
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-secondary py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl max-w-3xl">
              ASBAN IMMO est une agence immobilière de premier plan basée au Togo, avec plus de 30 ans d'expérience dans le secteur.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-primary rounded-lg p-8 text-white">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-gray-600 text-lg">
                Notre mission est de fournir des services immobiliers de haute qualité, en mettant l'accent sur la transparence, l'intégrité et la satisfaction du client. Nous nous efforçons de bâtir des relations durables avec nos clients en offrant un service personnalisé et en restant à l'écoute de leurs besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
