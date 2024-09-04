import React, { useState } from 'react';

const BookingForm = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log('Booking Submitted:', formData);
    alert('Booking submitted!');
  };

  const destinationName = decodeURIComponent(match.params.destinationName); // Get destination name from URL

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Book Your Trip to {destinationName}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
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
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Preferred Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
