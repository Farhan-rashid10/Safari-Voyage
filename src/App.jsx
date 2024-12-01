import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import Hero from './Hero';
import Amenity from './Amenity';
import Why from './Why';
import PackageDetails from './PackageDetails';
import International from './International';
import InternationalDetails from './InternationalDetails';
import Destination from './Destination';
import Packages from './Packages';
import Review from './Review';
import Footer from './Footer';
import Dest from './Dest';
import TripModal from './TripModal';
import BookingForm from './BookingForm';
import Packagess from './Packagess';
import About from './About';
import ContactUs from './ContactUs';
import Admin from './Admin';
import ComponentDetailsComp from './ComponentDetailsComp';
import Cart from './Cart';
import Header from './User';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [cart, setCart] = useState([]);

  // Initialize cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.name === item.name)) {
      setCart((prevCart) => [...prevCart, item]);
      toast.success(`${item.name} has been added to your cart.`);
    } else {
      toast.warn(`${item.name} is already in your cart.`);
    }
  };

  // Function to remove items from the cart
  const removeFromCart = (index) => {
    const removedItem = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    toast.info(`${removedItem.name} has been removed from your cart.`);
  };

  return (
    <Router>
      <Header />
      <Nav cart={cart} />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Amenity />
              <Destination />
              <Why />
              <International />
              <Packages />
              <Review />
            </>
          }
        />
        <Route path="/tripmodal/:destinationName" element={<TripModal />} />
        <Route path="/dest" element={<Dest />} />
        <Route path="/packagess" element={<Packagess />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/packages/:packageName"
          element={<PackageDetails addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/destination/:destinationName"
          element={<ComponentDetailsComp addToCart={addToCart} />}
        />
        <Route
          path="/international/:destinationName"
          element={<InternationalDetails addToCart={addToCart} />}
        />
        <Route path="/book/:destinationName" element={<BookingForm />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeItem={removeFromCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
