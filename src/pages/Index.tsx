import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Search, Home, Building2, MapPin } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [transactionType, setTransactionType] = useState("buy");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/photo-1487958449943-2429e8be8625.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
            Trouvez votre bien immobilier idéal
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            ASBAN IMMO vous accompagne dans votre projet immobilier
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl mx-auto animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de transaction
                </label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="buy">Acheter</option>
                  <option value="rent">Louer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de bien
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="all">Tous les biens</option>
                  <option value="house">Maison</option>
                  <option value="apartment">Appartement</option>
                  <option value="land">Terrain</option>
                </select>
              </div>
              
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors mt-6 md:mt-0">
                <Search className="w-5 h-5 inline-block mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vente</h3>
              <p className="text-gray-600">
                Trouvez la propriété de vos rêves parmi notre sélection exclusive
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Des locations qui répondent à tous vos besoins
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conseil</h3>
              <p className="text-gray-600">
                Un accompagnement personnalisé tout au long de votre projet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Biens à la une</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/lovable-uploads/89f6d887-4759-4a95-a9e2-8328f8b7cfd7.png"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">À Louer</span>
                <h3 className="text-xl font-semibold mt-2">Appartement - Carrefoury</h3>
                <p className="text-gray-600 mb-4">Lomé, Togo</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">400,000 FCFA/mois</span>
                  <a
                    href="https://wa.me/22892455050?text=Je suis intéressé par l'appartement à Carrefoury"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Contacter
                  </a>
                </div>
              </div>
            </div>

            {/* Vente Terrain */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/lovable-uploads/c826a5bf-80a6-4543-968f-36fe1275afba.png"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">À Vendre</span>
                <h3 className="text-xl font-semibold mt-2">Terrain - Kpalimé</h3>
                <p className="text-gray-600 mb-4">10 Ha+</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Sur demande</span>
                  <a
                    href="https://wa.me/22892455050?text=Je suis intéressé par le terrain de 10Ha+ à Kpalimé"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Contacter
                  </a>
                </div>
              </div>
            </div>

            {/* Villa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/lovable-uploads/7e725a8f-af11-4eaf-9a08-4ecd4be98367.png"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">À Vendre</span>
                <h3 className="text-xl font-semibold mt-2">Villa - Assigamé</h3>
                <p className="text-gray-600 mb-4">500M²</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Sur demande</span>
                  <a
                    href="https://wa.me/22892455050?text=Je suis intéressé par la villa à Assigamé"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Index;
