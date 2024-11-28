import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Basic from "./components/Basic";
import Second from "./components/Second";
import About from "./components/About";
import Contact from "./components/Contact";
import Pictures from "./components/Pictures";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home sahifasi */}
          <Route
            path="/"
            element={
              <div>
                <Basic />
                <Second />
                <Pictures />
              </div>
            }
          />
          {/* About sahifasi */}
          <Route path="/about" element={<About />} />
          {/* Contact sahifasi */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
