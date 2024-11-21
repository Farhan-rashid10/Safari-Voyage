import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">Safari Voyage</h3>
          <p className="text-gray-400 text-base">
            Your trusted partner for unforgettable travel experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dest" className="text-gray-400 hover:text-white transition duration-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packagess" className="text-gray-400 hover:text-white transition duration-300">
                  Packages
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <ul className="space-y-2">
              {[
                { icon: Mail, text: 'info@safarivoyage.com' },
                { icon: Phone, text: '+254-743576110' },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <item.icon size={18} />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Address</h4>
            <p className="text-gray-400 text-sm">123 Safari Street, Nairobi, Kenya</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Safari Voyage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
