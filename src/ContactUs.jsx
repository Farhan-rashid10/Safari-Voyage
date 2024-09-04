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

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to server or email)
    console.log('Contact Us Form Submitted:', formData);

    // Show the toast notification
    setShowToast(true);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      days: '',
      message: '',
    });

    // Hide the toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white py-4 text-center font-bold shadow-lg z-50">
          Your details have been submitted successfully! We will contact you soon.
        </div>
      )}

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
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter Your Destination"
            required
          />
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
          Our dedicated travel agents are ready to assist you with all your travel needs. If you feel stuck, call us at <span className="text-orange-500">0743576110</span> and we will help you.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;