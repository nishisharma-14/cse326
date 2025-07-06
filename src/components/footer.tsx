import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black-rich text-white py-12 border-t border-gold-metallic/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gold">Contact Us</h3>
          <div className="space-y-3">
            <p className="flex items-center text-gold-metallic/90 hover:text-gold transition-colors">
              <Phone className="h-5 w-5 mr-2" /> +91 8734769762
            </p>
            <p className="flex items-center text-gold-metallic/90 hover:text-gold transition-colors">
              <Mail className="h-5 w-5 mr-2" /> info@dishdelightrestaurant.com
            </p>
            <p className="flex items-center text-gold-metallic/90 hover:text-gold transition-colors">
              <MapPin className="h-5 w-5 mr-2" /> 123 Foodie Street, Culinary District
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gold">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gold-metallic/90 hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="text-gold-metallic/90 hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="text-gold-metallic/90 hover:text-gold transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gold-metallic/20">
        <p className="text-center text-gold-metallic/70">© 2024 Dish Delight. All rights reserved.</p>
      </div>
    </footer>
  );
}