import './App.css'
import Home from "./routes/Home"
import About from "./routes/About"
import ContactUs from "./routes/ContactUs"

import {Route, Routes} from "react-router-dom";

import React from 'react';
import HealthWiki from './routes/HealthWiki';
function App() {
 
  return (
    <>
    
    <div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/healthwiki" element={<HealthWiki />} />
      
    </Routes>

    
      </div>
      
   
  
   </>
  );
}

export default App;
