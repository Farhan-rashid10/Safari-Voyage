
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
    historical sites like the Gede Ruins.`,
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
    its population of lions, leopards, and cheetahs, and the annual migration of zebras and wildebeests.`,
    aboutTour: {
      inclusions: ['Safari', 'All Meals', 'Lodging'],
      exclusions: ['Flights', 'Drinks'],
      specialNotes: ['Great Migration', 'Big 5 Safari', 'Hot Air Balloon Rides'],
    },
  },
  {
    name: 'Nairobi National Park',
    image: 'mara.jpg',
    price: 'Ksh 8,000',
    location: 'Nairobi National Park',
    days: '1',
    highlights: `Experience Nairobi National Park, where you can enjoy a game drive just minutes away from the capital. 
    Witness wildlife including rhinos, lions, and giraffes with the Nairobi skyline as a backdrop.`,
    aboutTour: {
      inclusions: ['Game Drive', 'Park Entry Fees'],
      exclusions: ['Meals'],
      specialNotes: ['Game Drive', 'Animal Orphanage', 'Ivory Burning Site'],
    },
  },
  {
    name: 'Lamu Island',
    image: 'raha.jpg',
    price: 'Ksh 20,000',
    location: 'Lamu Island',
    days: '3',
    highlights: `Lamu Island is one of Kenya's oldest towns, full of Swahili culture and history. 
    Explore the narrow streets, ride donkeys, and visit the serene Shela Beach for a truly relaxing experience.`,
    aboutTour: {
      inclusions: ['Boat Transfers', 'Accommodation', 'Breakfast'],
      exclusions: ['Personal Expenses'],
      specialNotes: ['Shela Beach', 'Lamu Fort', 'Donkey Rides'],
    },
  },
  {
    name: 'Diani Beach',

    image: 'diani.jpg',
    price: 'Ksh 25,000',
    location: 'Kwale County',
    days: '3',
    highlights: `Diani Beach is known for its crystal-clear waters and white sandy beaches. It's perfect for water sports 
    such as kite surfing and snorkeling, or simply relaxing by the beach.`,
    aboutTour: {
      inclusions: ['2 Nights Accommodation', 'Transfers', 'Meals'],
      exclusions: ['Personal Expenses'],
      specialNotes: ['Kite Surfing', 'Snorkeling', 'Camel Rides'],
    },
    name: 'Mombasa North Coast', 
    
//     description: 'Enjoy stunning beaches and vibrant nightlife in Mombasa North Coast.', 
//     price: 'Ksh 13,500',
//     highlights: ['Free transport', 'Free guide', 'Insurance'],
//     image: "/src/assets/images/raha.jpg",
//   },
//   { 
//     name: 'Diani/Ukunda', 
//     description: 'Relax on the white sandy beaches of Diani and enjoy luxury resorts.', 
//     price: 'Ksh 12,000',
//     highlights: ['Free transport', 'Luxury resorts', 'Insurance'],
//     image: "/src/assets/images/dinaa.jpg",
//   },
//   { 
//     name: 'Malindi/Watamu', 
//     description: 'Discover coral reefs, marine life, and the serene beauty of Watamu.', 
//     price: 'Ksh 14,000',
//     highlights: ['Free transport', 'Marine activities', 'Insurance'],
//     image: "/src/assets/images/watamu.jpg",
//   },
//   { 
//     name: 'Maasai Mara', 
//     description: 'Witness the Great Migration and enjoy a rich cultural experience.', 
//     price: 'Ksh 15,000',
//     highlights: ['Free safari guide', 'Transport included', 'Insurance'],
//     image: "/src/assets/images/masaaimara.jpg",
//   },
//   { 
//     name: 'Amboseli', 
//     description: 'Explore Amboseli with its large elephant herds and views of Kilimanjaro.', 
//     price: 'Ksh 11,500',
//     highlights: ['Transport included', 'Professional guide', 'Insurance'],
//     image: "/src/assets/images/amboseli.jpg",
//   },
  },
  
];

const internationalDestinations = [
  {
    name: 'Dubai',
    image: 'dubai.jpg',
    price: '$2,000',
    location: 'United Arab Emirates',
    days: '5',
    highlights: `Dubai is known for its ultramodern architecture, luxury shopping, and vibrant nightlife scene. 
    The iconic Burj Khalifa, an 830m tall tower, dominates the skyscraper-filled skyline.`,
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
    and the historic Notre-Dame Cathedral.`,
    aboutTour: {
      inclusions: ['Flights', 'Hotel Stay', 'City Tour'],
      exclusions: ['Meals'],
      specialNotes: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
    },
  },
  {
    name: 'New York City',
    image: 'nyc.jpg',
    price: '$2,500',
    location: 'United States',
    days: '7',
    highlights: `New York City is known for its iconic landmarks, including the Statue of Liberty, Times Square, and Central Park. 
    Experience the fast-paced lifestyle, world-class restaurants, and Broadway shows.`,
    aboutTour: {
      inclusions: ['Flights', 'Hotel Stay', 'City Tour'],
      exclusions: ['Meals'],
      specialNotes: ['Statue of Liberty', 'Empire State Building', 'Broadway Shows'],
    },
  },
  {
    name: 'Santorini',
    image: 'santorini.jpg',
    price: '€2,200',
    location: 'Greece',
    days: '5',
    highlights: `Santorini, famous for its whitewashed buildings and blue domes, offers breathtaking sunsets and scenic beauty.`,
    aboutTour: {
      inclusions: ['Flights', 'Hotel Stay', 'Island Tour'],
      exclusions: ['Personal Expenses'],
      specialNotes: ['Wine Tasting', 'Oia Village', 'Caldera Sunset Cruise'],
    },
  },
  {
    name: 'Maldives',
    image: 'maldives.jpg',
    price: '$3,200',
    location: 'Indian Ocean',
    days: '5',
    highlights: `The Maldives is a tropical paradise known for its crystal-clear waters, overwater bungalows, and world-class diving.`,
    aboutTour: {
      inclusions: ['Flights', 'Resort Stay', 'Spa Package'],
      exclusions: ['Personal Expenses'],
      specialNotes: ['Overwater Bungalows', 'Scuba Diving', 'Spa Treatments'],
    },
  },
];

const  ComponentDetailsComp = () => {
  const { destinationName } = useParams(); // Get destination name from URL
  const allDestinations = [...localDestinations, ...internationalDestinations]; // Merge both local and international

  // Decode the URL-encoded destination name
  const decodedDestinationName = decodeURIComponent(destinationName.toLowerCase());

  // Find the destination by the decoded name (case insensitive)
  const destination = allDestinations.find(dest => dest.name.toLowerCase() === decodedDestinationName);

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
        {/* {/* <nav></nav> */ }
      </div>
    </div>
  );
};

export default ComponentDetailsComp;
