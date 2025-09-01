import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./components/Events";
import Contact from "./components/Contact";
import BookDemo from "./components/BookDemo";
import ScrollToTop from "./components/ScrollToTop";
import SidebarCTA from "./pages/SidebarCTA";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const location = useLocation();

  // Pages where footer should be hidden
  const hideFooterOn = ["/login", "/dashboard"];

  const shouldHideFooter = hideFooterOn.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <SidebarCTA />

      <div className="md:min-h-screen min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/BookDemo" element={<BookDemo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
                  <Dashboard onLogout={() => setIsLoggedIn(false)} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
        {/* <Footer /> */}
         {!shouldHideFooter && <Footer />}
      </div>
    </>
  );
};

export default App;
