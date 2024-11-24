import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { 
    name: 'Mombasa North Coast', 
    packages: 2, 
    image: "/src/assets/images/raha.jpg", 
    description: 'Enjoy stunning beaches and vibrant nightlife in Mombasa North Coast.', 
    price: 'Ksh 13,500',
    highlights: ['Free transport', 'Free guide', 'Insurance'],
  },
  { 
    name: 'Diani', 
    packages: 2, 
    image: "/src/assets/images/dinaa.jpg", 
    description: 'Relax on the white sandy beaches of Diani and enjoy luxury resorts.', 
    price: 'Ksh 12,000',
    highlights: ['Free transport', 'Luxury resorts', 'Insurance'],
  },
  { 
    name: 'Watamu', 
    packages: 2, 
    image: "/src/assets/images/watamu.jpg", 
    description: 'Discover coral reefs, marine life, and the serene beauty of Watamu.', 
    price: 'Ksh 14,000',
    highlights: ['Free transport', 'Marine activities', 'Insurance'],
  },
  { 
    name: 'Maasai Mara', 
    packages: 2, 
    image: "/src/assets/images/masaaimara.jpg", 
    description: 'Witness the Great Migration and enjoy a rich cultural experience.', 
    price: 'Ksh 15,000',
    highlights: ['Free safari guide', 'Transport included', 'Insurance'],
  },
];

const Destination = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleButtonClick = () => {
    navigate('/dest'); // Navigate to /dest when button is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-4">
        Popular <span className="text-orange-500">Destinations</span>
      </h2>
      <p className="text-center mb-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Explore the stunning landscapes and diverse wildlife of Kenya. Immerse yourself in the unique experiences each destination offers.
      </p>

      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {destinations.map((destination) => {
          return (
            <div key={destination.name} className="relative overflow-hidden rounded-lg col-span-2">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                <p className="text-white text-sm">
                  ({destination.packages}) Package{destination.packages !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleButtonClick}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default Destination;
