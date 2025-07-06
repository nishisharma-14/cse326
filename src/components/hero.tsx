import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1974&auto=format&fit=crop"
          alt="Vegetarian dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Dish Delight</h1>
        <p className="text-xl md:text-2xl mb-8">Pure Vegetarian Excellence</p>
        <button 
          onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Book a Table
        </button>
      </div>
    </section>
  );
}