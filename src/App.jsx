// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Questions,
  Contact,
  Services,
  Footer,
  ServiceDetails,
} from "./components/index";

function App() {
  return (
    <Router>
      <div className="font-Poppins bg-grey flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <Questions />
                <Contact />
              </>
            } />
            <Route path="/service-categories/:category" element={<ServiceDetails />} /> {/* add :category */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
