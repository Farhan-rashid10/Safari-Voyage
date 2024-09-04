import React from 'react';
import { useParams } from 'react-router-dom';

const localDestinations = [
  {
    name: 'Watamu',
    image: 'watamu.jpg',
    price: 'Ksh 29,600',
    location: 'Malindi Watamu',
    days: '3',
    highlights: `Watamu is a small town located on the Indian Ocean coast of Kenya, known for its pristine beaches 
    and rich marine life. It offers a wide range of activities, from snorkeling and dolphin watching to exploring 
    historical sites like the Gede Ruins. The small town has managed to maintain its laid-back coastal charm.`,
    aboutTour: {
      inclusions: ['Return Flight Tickets', 'Travel Insurance', 'Return Transfers', '2 Nights Accommodation'],
      exclusions: ['All not mentioned above'],
      specialNotes: ['Bio Ken Snake Park', 'Snorkeling', 'Dolphin Watching'],
    },
  },
  {
    name: 'Maasai Mara',
    image: 'masaaimara.jpg',
    price: 'Ksh 35,000',
    location: 'Southwestern Kenya',
    days: '4',
    highlights: `The Maasai Mara is one of the most famous wildlife conservation areas in Africa, renowned for 
    its exceptional population of lions, leopards, and cheetahs, and the annual migration of zebras, Thomson's gazelles, 
    and wildebeests to and from the Serengeti. It is also home to the Maasai people, who continue to practice their 
    traditional customs in this vast region. The Great Migration, often referred to as one of the natural wonders of the 
    world, takes place every year between July and October.`,
    aboutTour: {
      inclusions: ['Safari', 'All Meals', 'Lodging'],
      exclusions: ['Flights', 'Drinks'],
      specialNotes: ['Great Migration', 'Big 5 Safari', 'Hot Air Balloon Rides'],
    },
  },
  // Add more local destinations...
];

const internationalDestinations = [
  {
    name: 'Dubai',
    image: 'dubai.jpg',
    price: '$2,000',
    location: 'United Arab Emirates',
    days: '5',
    highlights: `Dubai is known for its ultramodern architecture, luxury shopping, and vibrant nightlife scene. 
    The iconic Burj Khalifa, an 830m tall tower, dominates the skyscraper-filled skyline. Dubai is also famous 
    for its artificial islands, world-class hotels, and high-end desert safaris.`,
    aboutTour: {
      inclusions: ['Flights', 'Hotel Stay', 'Desert Safari'],
      exclusions: ['Personal Expenses'],
      specialNotes: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah'],
    },
  },
  {
    name: 'Paris',
    image: 'paris.jpg',
    price: '€1,800',
    location: 'France',
    days: '4',
    highlights: `Paris, the capital of France, is one of the most romantic cities in the world. 
    Known for its art, fashion, and culture, Paris is home to the iconic Eiffel Tower, the world-famous Louvre Museum, 
    and the historic Notre-Dame Cathedral. Visitors can enjoy leisurely strolls along the Seine River or sip coffee at 
    sidewalk cafes.`,
    aboutTour: {
      inclusions: ['Flights', 'Hotel Stay', 'City Tour'],
      exclusions: ['Meals'],
      specialNotes: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
    },
  },
  // Add more international destinations...
];

const TripModal = () => {
  const { destinationName } = useParams(); // Get destination name from URL
  const allDestinations = [...localDestinations, ...internationalDestinations]; // Merge both local and international

  // Decode the URL-encoded destination name
  const decodedDestinationName = decodeURIComponent(destinationName);

  // Find the destination by the decoded name
  const destination = allDestinations.find(dest => dest.name === decodedDestinationName);

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{destination.name}</h2>
        <p className="text-2xl text-red-500">{destination.price}</p>
      </div>
      <div className="mb-8">
        <img src={`/src/assets/images/${destination.image}`} alt={destination.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Trip Information</h3>
        <ul className="space-y-2">
          <li><strong>Location:</strong> {destination.location}</li>
          <li><strong>Days Count:</strong> {destination.days}</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Highlights</h3>
        <p className="text-gray-700">{destination.highlights}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">About The Tour</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Inclusions</h4>
            <ul className="list-disc list-inside space-y-1">
              {destination.aboutTour.inclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Exclusions</h4>
            <ul className="list-disc list-inside space-y-1">
              {destination.aboutTour.exclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <h4 className="font-bold mt-8 mb-2">Special Notes</h4>
        <ul className="list-disc list-inside space-y-1">
          {destination.aboutTour.specialNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripModal;
