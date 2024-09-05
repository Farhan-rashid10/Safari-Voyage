import React, { useState } from 'react';
import { FaGlobe, FaPlane, FaCompass, FaShieldAlt, FaLeaf, FaHeart, FaArrowRight, FaCheck } from 'react-icons/fa';
import './App.css';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
        Welcome to Safari Voyage
      </h1>
      <p className="styled-paragraph text-center max-w-2xl mx-auto mb-12">
        At Safari Voyage, every journey is more than just a trip—it's an experience of a lifetime.
        We offer premium local and international travel services, crafted to make every moment unforgettable.
        From adventures to relaxation, we cover every detail so you can enjoy the ride.
      </p>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaGlobe className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Global Reach</h2>
          <p className="text-center text-gray-600">
            Whether it's an exotic international destination or a local gem, we’ve got you covered. 
            Our global network ensures a smooth and enriching experience wherever you go.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaPlane className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Personalized Travel</h2>
          <p className="text-center text-gray-600">
            Every trip we plan is tailored to your needs. From luxury escapes to budget-friendly adventures, 
            we ensure that every moment reflects your unique preferences.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaCompass className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Adventure Awaits</h2>
          <p className="text-center text-gray-600">
            Explore untamed wilderness or relax on pristine beaches. Whatever your choice, 
            we ensure every trip is an adventure of a lifetime, with all logistics taken care of.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaShieldAlt className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Your Safety, Our Priority</h2>
          <p className="text-center text-gray-600">
            We prioritize your safety. From vetted accommodations to 24/7 support, 
            your well-being is our top concern, allowing you to travel with peace of mind.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaLeaf className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Sustainable Travel</h2>
          <p className="text-center text-gray-600">
            We care about the environment. That’s why we offer eco-friendly travel options that 
            support local communities and reduce your carbon footprint.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaHeart className="text-orange-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">Personalized Service</h2>
          <p className="text-center text-gray-600">
            Our clients are at the heart of everything we do. From the first consultation to the final farewell, 
            we make sure every part of your journey exceeds expectations.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="steps-section mt-12">
        <h2 className="steps-heading text-3xl font-bold text-center text-orange-500 mb-8">Your Journey in Simple Steps</h2>
        
        {/* Steps Layout for Responsive Design */}
        <div className="steps-row flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="step flex flex-col items-center">
            <FaCheck className="step-icon text-orange-500 text-6xl" />
            <p className="text-center mt-4">Step 1: Book Your Trip</p>
          </div>
          <FaArrowRight className="arrow-icon hidden md:block text-orange-500 text-4xl" />

          <div className="step flex flex-col items-center">
            <FaPlane className="step-icon text-orange-500 text-6xl" />
            <p className="text-center mt-4">Step 2: Board your Flight</p>
          </div>
          <FaArrowRight className="arrow-icon hidden md:block text-orange-500 text-4xl" />

          <div className="step flex flex-col items-center">
            <FaCompass className="step-icon text-orange-500 text-6xl" />
            <p className="text-center mt-4">Step 3: Arrive at your Destination</p>
          </div>
          <FaArrowRight className="arrow-icon hidden md:block text-orange-500 text-4xl" />

          <div className="step flex flex-col items-center">
            <FaHeart className="step-icon text-orange-500 text-6xl" />
            <p className="text-center mt-4">Step 4: Enjoy the Experience</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section mt-12">
        <h2 className="faq-heading text-3xl font-bold text-center text-orange-500 mb-8">Frequently Asked Questions</h2>

        <div className="faq-container max-w-3xl mx-auto">
          <div className={`faq-item border rounded-lg p-6 mb-6 ${activeFAQ === 1 ? 'shadow-lg' : ''}`}>
            <h3 onClick={() => toggleFAQ(1)} className="faq-question text-xl font-semibold cursor-pointer flex justify-between items-center">
              What destinations do you cover?
              <span className="text-orange-500">{activeFAQ === 1 ? '-' : '+'}</span>
            </h3>
            {activeFAQ === 1 && (
              <p className="faq-answer text-gray-600 mt-4 transition-all duration-300">
                Safari Voyage covers a wide range of local and international destinations, including Africa, Europe, Asia, and the Americas.
              </p>
            )}
          </div>

          <div className={`faq-item border rounded-lg p-6 mb-6 ${activeFAQ === 2 ? 'shadow-lg' : ''}`}>
            <h3 onClick={() => toggleFAQ(2)} className="faq-question text-xl font-semibold cursor-pointer flex justify-between items-center">
              What is included in the booking price?
              <span className="text-orange-500">{activeFAQ === 2 ? '-' : '+'}</span>
            </h3>
            {activeFAQ === 2 && (
              <p className="faq-answer text-gray-600 mt-4 transition-all duration-300">
                Our booking price includes flights, accommodations, transfers, and guided tours. Additional activities can be added based on your preferences.
              </p>
            )}
          </div>

          <div className={`faq-item border rounded-lg p-6 mb-6 ${activeFAQ === 3 ? 'shadow-lg' : ''}`}>
            <h3 onClick={() => toggleFAQ(3)} className="faq-question text-xl font-semibold cursor-pointer flex justify-between items-center">
              How do I contact customer support?
              <span className="text-orange-500">{activeFAQ === 3 ? '-' : '+'}</span>
            </h3>
            {activeFAQ === 3 && (
              <p className="faq-answer text-gray-600 mt-4 transition-all duration-300">
                You can contact our 24/7 customer support via email or phone. Visit our Contact Us page for more details.
              </p>
            )}
          </div>

          <div className={`faq-item border rounded-lg p-6 mb-6 ${activeFAQ === 4 ? 'shadow-lg' : ''}`}>
            <h3 onClick={() => toggleFAQ(4)} className="faq-question text-xl font-semibold cursor-pointer flex justify-between items-center">
              Can I customize my trip?
              <span className="text-orange-500">{activeFAQ === 4 ? '-' : '+'}</span>
            </h3>
            {activeFAQ === 4 && (
              <p className="faq-answer text-gray-600 mt-4 transition-all duration-300">
                Yes! We specialize in personalized travel. You can customize every aspect of your trip, from accommodations to activities.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="cta-button mt-12 text-center">
        <Link to="/contactus">
          <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600 transition duration-300">
            Book Your Dream Trip Today!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
