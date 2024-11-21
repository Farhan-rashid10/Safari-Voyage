import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Amenity from './Amenity';
import Why from './Why';
import PackageDetails from './PackageDetails';
import International from './International';
import InternationalDetails from './InternationalDetails'; // Imported InternationalDetails Component
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

function App() {
  return (
    <Router>
      <Nav />
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
        <Route path="/tripmodal/:destinationName" element={<TripModal />} /> {/* Prioritized Route */}
        <Route path="/dest" element={<Dest />} />
        <Route path="/packagess" element={<Packagess />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/packages/:packageName" element={<PackageDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination/:destinationName" element={<ComponentDetailsComp />} /> {/* Dynamic Route */}
        <Route path="/international/:destinationName" element={<InternationalDetails />} /> {/* Added InternationalDetails Route */}
        <Route path="/book/:destinationName" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
