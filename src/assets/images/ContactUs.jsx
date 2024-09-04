import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    days: '',
    message: '',
  });

  const destinations = [
    'Watamu', 'Maasai Mara', 'Dubai', 'Paris', 'Romantic Honeymoon', 'Family Safari', 'Luxury Desert Adventure', 'Thrilling Adventure'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to server or email)
    console.log('Contact Us Form Submitted:', formData);
    alert('Your details have been submitted. Our agents will contact you shortly.');
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      days: '',
      message: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Contact Us</h2>
      <p className="text-gray-700 text-center mb-8">
        Let us help you plan the perfect trip. Please fill out the form below, and our expert agents will reach out to assist you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Your Full Name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Your Email Address"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Your Phone Number"
            required
          />
        </div>

        {/* Destination Field */}
        <div>
          <label className="block text-gray-700">Where are you going?</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((destination, index) => (
              <option key={index} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        {/* Days Field */}
        <div>
          <label className="block text-gray-700">How many days are you planning?</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Number of Days"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="Any special requests or questions?"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
        >
          Submit Details
        </button>
      </form>

      {/* Assurance Message */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-gray-700">We Are Here to Help!</h3>
        <p className="text-gray-600 mt-2">
          Our dedicated travel agents are ready to assist you with all your travel needs. Whether you're planning a quick weekend getaway or a luxurious adventure, we’re here to ensure your trip is flawless.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
