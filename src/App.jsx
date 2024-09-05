import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Amenity from './Amenity';
import Why from './Why';
import International from './International';
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

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Amenity />
            <Destination />
            <Why />
            <International />
            <Packages />
            <Review />
          </>
        } />
        <Route path="/dest" element={<Dest />} />
        <Route path="/packagess" element={<Packagess />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination/:destinationName" element={<TripModal />} />
        <Route path="/book/:destinationName" component={BookingForm} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
