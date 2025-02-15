
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Formalites = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const formalites = [
    {
      id: "titre",
      title: "Sécurisation foncière : Les 6 étapes pour obtenir son titre foncier au Togo",
      content: `
        1. Obtention du plan parcellaire
        2. Demande de renseignements au cadastre
        3. Levé topographique
        4. Constitution du dossier technique
        5. Dépôt du dossier à la Conservation Foncière
        6. Suivi et obtention du titre foncier
      `,
    },
    {
      id: "visa",
      title: "Visa, carte de séjour et passeport",
      content: `
        Services d'assistance pour :
        - Obtention de visa
        - Renouvellement de carte de séjour
        - Demande de passeport
        - Accompagnement dans les démarches administratives
      `,
    },
    {
      id: "ccit",
      title: "CCIT, la chambre du commerce et de l'industrie du Togo",
      content: `
        Assistance pour :
        - Création d'entreprise
        - Formalités CCIT
        - Obtention de documents commerciaux
        - Conseil en développement d'entreprise
      `,
    },
    {
      id: "civil",
      title: "Les actes d'État civil au Togo",
      content: `
        Accompagnement pour :
        - Actes de naissance
        - Actes de mariage
        - Certificats de nationalité
        - Casier judiciaire
        - Autres documents administratifs
      `,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">
            Formalités Administratives
          </h1>

          <div className="space-y-6">
            {formalites.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleSection(item.id)}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      openSection === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openSection === item.id && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/22892455050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Besoin d'assistance ? Contactez-nous
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Formalites;
