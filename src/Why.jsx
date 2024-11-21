import React from 'react';
import { User, Headphones, Diamond, Clock } from 'lucide-react';

const Why = () => {
  const reasons = [
    {
      icon: <User className="w-12 h-12 text-orange-500" />,
      title: "30 years of experience",
      description: "Long time in the business of creating unforgettable vacation experiences."
    },
    {
      icon: <Headphones className="w-12 h-12 text-orange-500" />,
      title: "Customer  support",
      description: "Customer support with a 24/7 emergency response team"
    },
    {
      icon: <Diamond className="w-12 h-12 text-orange-500" />,
      title: "Best-price guarantee",
      description: "If you find a better deal on a resort online, we'll price-match it!"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Free cancellation",
      description: "Free 24-hour cancellation for everyone — on select resorts"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Why Travel with us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {reason.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
      <button className="bg-orange-500 text-white font-bold py-2 px-9 rounded-full hover:bg-orange-600 transition duration-300">
        <a href="/about">About Us</a>
      </button>
      </div>
    </div>
  );
};

export default Why;
