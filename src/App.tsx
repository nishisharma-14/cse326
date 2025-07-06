import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/menu';
import Reservation from './pages/reservation';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer'; 
import Hero from './components/hero'; 

function App() {
  return (

    
    <div className="bg-black-primary min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<Hero />} />

        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;
