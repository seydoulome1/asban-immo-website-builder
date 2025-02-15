
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Building2, Bed, Bath, MapPin } from "lucide-react";
import { useState } from "react";

const propertyListings = [
  {
    id: 1,
    title: "Villa Moderne de Luxe",
    location: "Totsivi, Lomé",
    price: "250,000,000",
    bedrooms: 5,
    bathrooms: 4,
    surface: "450",
    type: "Vente",
    image: "/lovable-uploads/photo-1487958449943-2429e8be8625.jpg",
  },
  {
    id: 2,
    title: "Appartement Standing",
    location: "Agoe, Lomé",
    price: "120,000,000",
    bedrooms: 3,
    bathrooms: 2,
    surface: "200",
    type: "Vente",
    image: "/lovable-uploads/photo-1518005020951-eccb494ad742.jpg",
  },
  {
    id: 3,
    title: "Villa Contemporaine",
    location: "Totsivi, Lomé",
    price: "180,000",
    bedrooms: 4,
    bathrooms: 3,
    surface: "350",
    type: "Location",
    image: "/lovable-uploads/photo-1524230572899-a752b3835840.jpg",
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

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
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4">
                    <span className="flex items-center text-gray-600">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Building2 className="w-4 h-4 mr-1" />
                      {property.surface} m²
                    </span>
                  </div>
                </div>
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

      <Footer />
    </div>
  );
};

export default Annonces;
