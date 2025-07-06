import React from 'react';
import { Link } from 'react-router-dom';

<Link
  to="/reservation"
  className="inline-block bg-gold text-black px-10 py-4 rounded-lg 
             hover:bg-gold-accent transition-all font-semibold 
             shadow-lg hover:shadow-[0_0_15px_4px_rgba(255,215,0,0.75)]"
>
  Reserve a Table
</Link>


export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-8 px-4">
            <h1 className="text-6xl md:text-7xl font-bold shiny-text drop-shadow-lg">
  Welcome to Dish Delight
</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gold-metallic/90">Experience the finest vegetarian cuisine in an elegant atmosphere</p>
            <Link
              to="/reservation"
              className="inline-block bg-gold text-black px-10 py-4 rounded-lg hover:bg-gold-accent transition-all font-semibold shadow-gold hover:shadow-gold-lg"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gold">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Signature Dishes",
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
              description: "Expertly crafted vegetarian delicacies"
            },
            {
              title: "Fresh Ingredients",
              image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80",
              description: "Locally sourced organic produce"
            },
            {
              title: "Elegant Ambiance",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
              description: "Perfect setting for memorable dining"
            }
          ].map((item, index) => (
            <div key={index} className="bg-black-rich rounded-lg overflow-hidden shadow-gold hover:shadow-gold-lg transition-all border border-gold-metallic/30">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">{item.title}</h3>
                <p className="text-gold-metallic/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black-rich py-16 border-y border-gold-metallic/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gold">Experience Our Menu</h2>
          <p className="text-gold-metallic/70 mb-8 max-w-2xl mx-auto">
            Discover our carefully curated selection of vegetarian dishes, crafted with passion and precision.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-gold text-black px-10 py-4 rounded-lg hover:bg-gold-accent transition-all font-semibold shadow-gold hover:shadow-gold-lg"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}