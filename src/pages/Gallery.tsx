
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/481703ba-8dae-4d18-b310-0fbdf821c1f5.png",
      alt: "Villa avec piscine",
    },
    {
      src: "/lovable-uploads/de235acd-42d7-4e1a-8d69-29f0e7ed71d7.png",
      alt: "Intérieur moderne",
    },
    {
      src: "/lovable-uploads/4bba721c-d855-43db-ac7c-cf1a4b228fcb.png",
      alt: "Villa de luxe",
    },
    {
      src: "/lovable-uploads/648fbebd-1e43-465b-91ee-2da2a5ac626f.png",
      alt: "Appartement moderne",
    },
    {
      src: "/lovable-uploads/e2005fb5-35fe-4d3b-8786-c9d049ac92d5.png",
      alt: "Résidence",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Notre Galerie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
