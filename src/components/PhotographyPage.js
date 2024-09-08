import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotographyPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const photos = [
    { id: 1, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Landscape photo", description: "A beautiful sunset over the mountains" },
    { id: 2, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Portrait photo", description: "A candid street portrait" },
    { id: 3, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Macro photo", description: "Close-up of a colorful butterfly" },
    { id: 4, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Architecture photo", description: "Modern building with interesting geometry" },
    { id: 5, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Nature photo", description: "Misty forest in the early morning" },
    { id: 6, src: "https://placehold.co/1920x1080/025C8E/FFF?text=Placeholder%20Image", alt: "Urban photo", description: "Busy city street at night" },
  ];

  const equipment = [
    { name: "Camera Body", description: "Canon EOS 200D Mark II", url:"https://google.com" },
    { name: "Lens 1", description: "Canon RF 24-70mm f/2.8L IS USM", url:"https://google.com"  },
    { name: "Lens 2", description: "Canon RF 70-200mm f/2.8L IS USM", url:"https://google.com"  },
    { name: "Tripod", description: "Manfrotto MT055CXPRO4", url:"https://google.com"  },
    { name: "Lighting", description: "Godox AD200Pro Flash", url:"https://google.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft size={24} className="mr-2" />
            Back to Profile
          </Link>
          <h1 className="text-2xl font-bold">My Photography</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedPhoto(photo)}
                className="cursor-pointer"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover rounded-lg" />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">My Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(item.url, '_blank')}
              style = {{ cursor: 'pointer' }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

     

      </main>

<footer className="absolute bottom-0 w-full bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="w-full h-auto mb-4 rounded" />
            <p className="text-lg">{selectedPhoto.description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotographyPage;
