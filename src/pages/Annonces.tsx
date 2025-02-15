
import Layout from "@/components/Layout";
import { Search, Building2, MapPin } from "lucide-react";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  details?: string;
  surface?: string;
  image: string;
}

const propertyListings: Property[] = [
  // À Louer
  {
    id: 1,
    title: "Villa avec piscine",
    location: "Lomé",
    price: "1,500,000",
    type: "Location",
    details: "Villa luxueuse avec piscine et jardin",
    image: "/lovable-uploads/7bbcebef-724d-47fa-972d-293c68d65b87.png",
  },
  {
    id: 2,
    title: "Maison moderne",
    location: "Baguida",
    price: "250,000",
    type: "Location",
    details: "Maison contemporaine avec cour",
    image: "/lovable-uploads/174b1757-acf6-40e6-a5a0-7bfc9cafca30.png",
  },
  {
    id: 3,
    title: "Résidence avec piscine",
    location: "Agoe",
    price: "800,000",
    type: "Location",
    details: "Grande résidence avec piscine",
    image: "/lovable-uploads/dd4f9621-9a2c-4142-8f77-8d2c717ef57c.png",
  },
  // À Vendre
  {
    id: 4,
    title: "Villa de luxe",
    location: "Adidogome",
    price: "450M",
    type: "Vente",
    surface: "800",
    image: "/lovable-uploads/d9fef445-796e-42c5-8124-caf978fe549e.png",
  },
  {
    id: 5,
    title: "Résidence Moderne",
    location: "Kégué",
    price: "280M",
    type: "Vente",
    surface: "500",
    image: "/lovable-uploads/753065ab-c0c0-4541-9f47-ae013e2afe80.png",
  },
  {
    id: 6,
    title: "Villa avec Piscine",
    location: "Agoè",
    price: "350M",
    type: "Vente",
    surface: "600",
    image: "/lovable-uploads/cb34db7e-dfd5-4d73-b7d7-aa322d57d921.png",
  },
];

const Annonces = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [transactionType, setTransactionType] = useState("all");

  const filteredProperties = propertyListings.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPropertyType = propertyType === "all" || property.type === propertyType;
    const matchesTransactionType = transactionType === "all" || property.type === transactionType;
    return matchesSearch && matchesPropertyType && matchesTransactionType;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full p-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="all">Type de bien</option>
                <option value="Vente">Vente</option>
                <option value="Location">Location</option>
              </select>
            </div>
            <div>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="all">Type de transaction</option>
                <option value="Vente">Vente</option>
                <option value="Location">Location</option>
              </select>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              <Search className="w-5 h-5 inline-block mr-2" />
              Rechercher
            </button>
          </div>
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </p>
                {property.surface && (
                  <p className="flex items-center text-gray-600 mb-4">
                    <Building2 className="w-4 h-4 mr-1" />
                    {property.surface} m²
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{property.price} FCFA</span>
                  <a
                    href={`https://wa.me/22892455050?text=Je suis intéressé par ${property.title} à ${property.location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Contacter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Annonces;
