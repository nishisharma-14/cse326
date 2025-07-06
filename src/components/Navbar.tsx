import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
<nav className="bg-black shadow-gold fixed w-full z-50 border-b border-gold-metallic/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Utensils className="h-8 w-8 text-gold-metallic group-hover:text-gold transition-colors" />
              <span className="text-xl font-bold text-gold-metallic group-hover:text-gold transition-colors">
                Dish Delight
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-300 hover:text-gold transition-colors ${
                location.pathname === '/' ? 'text-gold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-gray-300 hover:text-gold transition-colors ${
                location.pathname === '/menu' ? 'text-gold' : ''
              }`}
            >
              Menu
            </Link>
            <Link
              to="/reservation"
              className={`text-gray-300 hover:text-gold transition-colors ${
                location.pathname === '/reservation' ? 'text-gold' : ''
              }`}
            >
              Reservation
            </Link>
            <Link
              to="/contact"
              className={`text-gray-300 hover:text-gold transition-colors ${
                location.pathname === '/contact' ? 'text-gold' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
