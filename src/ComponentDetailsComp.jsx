import React, { useState } from 'react';
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
  },
  {
    name: 'Mombasa North Coast',
    image: 'mombasa.jpg',
    price: 'Ksh 13,500',
    location: 'Mombasa North Coast',
    days: '3',
    highlights: `Mombasa North Coast offers stunning beaches, vibrant nightlife, and a rich blend of Swahili culture.`,
    aboutTour: {
      inclusions: ['Free Transport', 'Guide Services', 'Accommodation'],
      exclusions: ['Meals', 'Personal Expenses'],
      specialNotes: ['Fort Jesus', 'Haller Park', 'Nyali Beach'],
    },
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

const ComponentDetailsComp = ({ addToCart }) => {
  const { destinationName } = useParams();
  const allDestinations = [...localDestinations, ...internationalDestinations];

  const decodedDestinationName = decodeURIComponent(destinationName.toLowerCase());
  const destination = allDestinations.find(
    (dest) => dest.name.toLowerCase() === decodedDestinationName
  );

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Destination Not Found</h1>
        <p className="text-gray-600 mt-4">
          Sorry, the destination you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <img
          src={`/src/assets/images/${destination.image}`}
          alt={destination.name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
        <h1 className="text-4xl font-bold text-orange-500">{destination.name}</h1>
        <p className="text-gray-600 text-lg mt-2">{destination.highlights}</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-green-600 font-bold text-2xl">Price: {destination.price}</p>
        <p className="text-gray-700">
          <strong>Location:</strong> {destination.location}
        </p>
        <p className="text-gray-700">
          <strong>Days:</strong> {destination.days}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Inclusions</h3>
          <ul className="list-disc list-inside space-y-2">
            {destination.aboutTour.inclusions.map((inclusion, index) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Exclusions</h3>
          <ul className="list-disc list-inside space-y-2">
            {destination.aboutTour.exclusions.map((exclusion, index) => (
              <li key={index}>{exclusion}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Special Notes</h3>
        <ul className="list-disc list-inside space-y-2">
          {destination.aboutTour.specialNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button
          onClick={() => addToCart(destination)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ComponentDetailsComp;
