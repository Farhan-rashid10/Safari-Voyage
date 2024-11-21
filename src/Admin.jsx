import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';

const Admin = () => {
  const [data, setData] = useState([]); // holds the data fetched from the JSON server
  const [editData, setEditData] = useState(null); // State to hold data to be edited

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contactData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      
      await axios.delete(`http://localhost:5000/contactData/${id}`);
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (item) => {
    setEditData(item); // Set the current data to be edited
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await axios.put(`http://localhost:5000/contactData/${editData.id}`, editData);
      setEditData(null); // Clear the edit data after saving
      fetchData(); // Refresh data after saving
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Destination</th>
              <th className="py-2 px-4 border">Start Date</th>
              <th className="py-2 px-4 border">Days</th>
              <th className="py-2 px-4 border">Travelers</th>
              <th className="py-2 px-4 border">Message</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.email}</td>
                  <td className="py-2 px-4 border">{item.phone}</td>
                  <td className="py-2 px-4 border">{item.destination}</td>
                  <td className="py-2 px-4 border">{item.startDate}</td>
                  <td className="py-2 px-4 border">{item.days}</td>
                  <td className="py-2 px-4 border">{item.travelers}</td>
                  <td className="py-2 px-4 border">{item.message}</td>
                  <td className="py-2 px-4 border flex space-x-2 justify-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal (appears when editing) */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Booking</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={editData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={editData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={editData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Days</label>
                <input
                  type="number"
                  name="days"
                  value={editData.days}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Number of Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  value={editData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={editData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
