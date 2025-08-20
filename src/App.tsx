import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Events from './pages/Events';
import Contact from './components/Contact';
import BookDemo from './components/BookDemo'
import ScrollToTop from './components/ScrollToTop';
import SidebarCTA from './pages/SidebarCTA';



const App: React.FC = () => {
  return (

    <Router>
      <ScrollToTop />
        <SidebarCTA />
      <div className="md:min-h-screen min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookingform" element={<BookDemo />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/cta' element={<SidebarCTA />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 