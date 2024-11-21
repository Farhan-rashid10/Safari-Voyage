import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    days: '',
    travelers: '',
    packageType: '',
    message: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the JSON server
      await axios.post('http://localhost:5000/contactData', formData);

      // Show the toast notification
      setShowToast(true);

      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        startDate: '',
        days: '',
        travelers: '',
        packageType: '',
        message: '',
      });

      // Hide the toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8 bg-gray-50 shadow-lg rounded-lg">
      {showToast && (
        <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white py-4 text-center font-bold shadow-lg z-50">
          Your booking request has been submitted successfully! We will contact you soon.
        </div>
      )}

      <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Book Your Dream Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div>
          <label className="block text-gray-700">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Destination"
            required
          />
        </div>

        {/* New Field: Start Date */}
        <div>
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        {/* New Field: Days */}
        <div>
          <label className="block text-gray-700">Number of Days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Duration of Trip (in Days)"
            required
          />
        </div>

        {/* New Field: Number of Travelers */}
        <div>
          <label className="block text-gray-700">Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Number of Travelers"
            required
          />
        </div>

        {/* New Field: Travel Package */}
      

        <div>
          <label className="block text-gray-700">Special Requests or Questions</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="Add any specific requirements or inquiries here"
          />
        </div>

        <button type="submit" className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
