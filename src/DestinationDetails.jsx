import React from 'react';
import { useParams } from 'react-router-dom';

const destinations = [
  { 
    name: 'Mombasa North Coast', 
    description: 'Enjoy stunning beaches and vibrant nightlife in Mombasa North Coast.', 
    price: 'Ksh 13,500',
    highlights: ['Free transport', 'Free guide', 'Insurance'],
    image: "/src/assets/images/raha.jpg",
  },
  { 
    name: 'Diani/Ukunda', 
    description: 'Relax on the white sandy beaches of Diani and enjoy luxury resorts.', 
    price: 'Ksh 12,000',
    highlights: ['Free transport', 'Luxury resorts', 'Insurance'],
    image: "/src/assets/images/dinaa.jpg",
  },
  { 
    name: 'Malindi/Watamu', 
    description: 'Discover coral reefs, marine life, and the serene beauty of Watamu.', 
    price: 'Ksh 14,000',
    highlights: ['Free transport', 'Marine activities', 'Insurance'],
    image: "/src/assets/images/watamu.jpg",
  },
  { 
    name: 'Maasai Mara', 
    description: 'Witness the Great Migration and enjoy a rich cultural experience.', 
    price: 'Ksh 15,000',
    highlights: ['Free safari guide', 'Transport included', 'Insurance'],
    image: "/src/assets/images/masaaimara.jpg",
  },
  { 
    name: 'Amboseli', 
    description: 'Explore Amboseli with its large elephant herds and views of Kilimanjaro.', 
    price: 'Ksh 11,500',
    highlights: ['Transport included', 'Professional guide', 'Insurance'],
    image: "/src/assets/images/amboseli.jpg",
  },
];

const DestinationDetails = () => {
  const { destinationName } = useParams(); // Get destination name from the URL
  const decodedName = decodeURIComponent(destinationName); // Decode the name for accurate matching

  // Find the destination based on the decoded name
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!destination) {
  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Destination Not Found</h2>
      <p className="mb-4">The destination you are looking for does not exist.</p>
      <Link to="/dest" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
        View All Destinations
      </Link>
    </div>
  );
}


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-2/3 pl-6">
          <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <h2 className="text-xl font-bold mb-2">Trip Highlights</h2>
          <ul className="list-disc pl-6 mb-4">
            {destination.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <p className="text-orange-500 text-2xl font-bold mb-6">{destination.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
