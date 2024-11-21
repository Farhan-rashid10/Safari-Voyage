import React from 'react';
import { useParams } from 'react-router-dom';
import honeyImage from './assets/images/honey.jpg';
import safariImage from './assets/images/safari1.jpg';
import watamuImage from './assets/images/watamu1.jpg';
import familySafariImage from './assets/images/saf.jpg';
import adventureImage from './assets/images/adventure.jpg';
import luxuryImage from './assets/images/luxury.jpg';
import desertImage from './assets/images/desert.jpg';
import mountainImage from './assets/images/mountain.jpg';

const packages = [
  {
    name: 'Romantic Honeymoon',
    description: 'Celebrate your love with an unforgettable 7-day beach retreat. Enjoy intimate moments with private dinners, soothing spa treatments, and mesmerizing sunset cruises. Perfect for rekindling romance and creating cherished memories.',
    image: honeyImage,
    price: 199,
    rating: 5,
    details: {
      highlights: [
        'Private beach dinners under the stars',
        'Couples’ spa treatments',
        'Sunset cruises',
        'Guided cultural tours',
      ],
      itinerary: [
        'Day 1: Arrival and welcome dinner at a beachfront resort.',
        'Day 2-3: Relaxation, spa treatments, and private beach time.',
        'Day 4: Island exploration and cultural tours.',
        'Day 5-6: Sunset cruises and romantic activities.',
        'Day 7: Departure with cherished memories.',
      ],
      inclusions: ['Accommodation', 'Meals', 'Airport Transfers', 'Couples Activities'],
      exclusions: ['Flight Tickets', 'Personal Expenses'],
    },
  },
  {
    name: 'Birthday Bash Safari',
    description: 'Make your birthday unforgettable with a thrilling 5-day safari adventure! Celebrate in the wild, spot the Big 5, and enjoy luxury lodges. Perfect for creating once-in-a-lifetime birthday memories.',
    image: safariImage,
    price: 299,
    rating: 4,
    details: {
      highlights: [
        'Luxury safari lodges',
        'Big 5 wildlife spotting',
        'Private birthday celebration in the wild',
      ],
      itinerary: [
        'Day 1: Arrival and safari lodge check-in.',
        'Day 2-4: Morning and evening game drives.',
        'Day 5: Farewell breakfast and departure.',
      ],
      inclusions: ['Accommodation', 'Safari Drives', 'Meals', 'Birthday Party Setup'],
      exclusions: ['Flights', 'Park Entry Fees', 'Alcoholic Beverages'],
    },
  },
  {
    name: 'Weekend City Escape',
    description: 'Wanna escape the bustling and noisy city? We’ve got you covered! Enjoy a 3-day luxurious urban retreat in Watamu. Unwind with stunning views, water sports, and guided city tours.',
    image: watamuImage,
    price: 69,
    rating: 5,
    details: {
      highlights: [
        '5-star hotel stay',
        'Beach access with water sports',
        'Guided city tours',
      ],
      itinerary: [
        'Day 1: Arrival and leisure.',
        'Day 2: Guided city tour and beach activities.',
        'Day 3: Departure.',
      ],
      inclusions: ['Accommodation', 'City Tours', 'Breakfast', 'Water Sports'],
      exclusions: ['Flight Tickets', 'Personal Expenses'],
    },
  },
  {
    name: 'Family Safari Fun',
    description: 'Bring your family together on a 6-day adventure! Enjoy exciting safaris, cozy lodges, and family-friendly activities. Create memories that will last a lifetime!',
    image: familySafariImage,
    price: 1499,
    rating: 5,
    details: {
      highlights: [
        'Kid-friendly safari activities',
        'Family bonding in the wild',
        'Exclusive family lodges',
      ],
      itinerary: [
        'Day 1: Arrival and campfire dinner.',
        'Day 2-5: Daily safari adventures and cultural activities.',
        'Day 6: Departure.',
      ],
      inclusions: ['Accommodation', 'Meals', 'Safari Drives', 'Cultural Experiences'],
      exclusions: ['Flights', 'Park Fees'],
    },
  },
  {
    name: 'Adventurous Mountain Climb',
    description: 'Ready to conquer new heights? This 7-day mountain climbing experience is designed for thrill-seekers. Witness breathtaking summit views and camp under the stars.',
    image: mountainImage,
    price: 799,
    rating: 5,
    details: {
      highlights: [
        'Guided climbs with professional trainers',
        'Breathtaking summit views',
        'Overnight mountain camps',
      ],
      itinerary: [
        'Day 1: Arrival and orientation.',
        'Day 2-6: Climbing, camping, and summit day.',
        'Day 7: Descent and departure.',
      ],
      inclusions: ['Accommodation', 'Guides', 'Meals', 'Climbing Gear'],
      exclusions: ['Personal Gear', 'Travel Insurance'],
    },
  },
  {
    name: 'Luxury Desert Adventure',
    description: 'Experience the magic of the desert with our exclusive 5-day exploration. Ride camels, stay in luxury camps, and marvel at the starlit sky.',
    image: desertImage,
    price: 999,
    rating: 4,
    details: {
      highlights: [
        'Camel rides through the dunes',
        'Luxury desert camp stays',
        'Stargazing and cultural performances',
      ],
      itinerary: [
        'Day 1: Arrival and desert camp setup.',
        'Day 2-4: Camel rides, cultural tours, and stargazing.',
        'Day 5: Departure.',
      ],
      inclusions: ['Accommodation', 'Meals', 'Desert Activities'],
      exclusions: ['Flights', 'Alcoholic Drinks'],
    },
  },
  {
    name: 'Luxury Island Escape',
    description: 'Escape to paradise with this 10-day luxury island retreat. Enjoy private villas, gourmet dining, and exclusive snorkeling spots.',
    image: luxuryImage,
    price: 2000,
    rating: 5,
    details: {
      highlights: [
        'Private overwater villas',
        'All-inclusive gourmet dining',
        'Exclusive snorkeling and diving spots',
      ],
      itinerary: [
        'Day 1-3: Arrival and relaxation in your private villa.',
        'Day 4-7: Explore the island and enjoy water activities.',
        'Day 8-10: Leisure time and sunset cruises.',
      ],
      inclusions: ['Accommodation', 'All Meals', 'Water Sports', 'Airport Transfers'],
      exclusions: ['Personal Expenses', 'Flights'],
    },
  },
  {
    name: 'Thrilling Adventure Package',
    description: 'Calling all adrenaline junkies! This 7-day extreme sports package offers skydiving, white-water rafting, and mountain biking adventures.',
    image: adventureImage,
    price: 599,
    rating: 5,
    details: {
      highlights: [
        'Skydiving and paragliding',
        'White-water rafting',
        'Mountain biking and hiking',
      ],
      itinerary: [
        'Day 1: Arrival and orientation.',
        'Day 2-6: Daily adventure activities.',
        'Day 7: Farewell breakfast and departure.',
      ],
      inclusions: ['Accommodation', 'Meals', 'Adventure Activities'],
      exclusions: ['Insurance', 'Travel Gear'],
    },
  },
];

const PackageDetails = () => {
  const { packageName } = useParams();
  const packageDetail = packages.find((pkg) => pkg.name === decodeURIComponent(packageName));

  if (!packageDetail) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Package Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the package you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <img
          src={packageDetail.image}
          alt={packageDetail.name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
        <h1 className="text-4xl font-bold text-orange-500">{packageDetail.name}</h1>
        <p className="text-gray-600 text-lg mt-2">{packageDetail.description}</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-green-600 font-bold text-2xl">Price: ${packageDetail.price}</p>
        <div className="flex items-center">
          {[...Array(packageDetail.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          <span className="ml-2 text-gray-600">({packageDetail.rating} Stars)</span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Trip Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {packageDetail.details.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {packageDetail.details.itinerary.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Inclusions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {packageDetail.details.inclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Exclusions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {packageDetail.details.exclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
