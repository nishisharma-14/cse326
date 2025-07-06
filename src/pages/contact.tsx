import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-black">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-medium text-black">Phone</h3>
                  <p className="text-black">+91 8734769762</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <p className="text-black">info@dishdelightrestaurant.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-medium text-black">Address</h3>
                  <p className="text-black">123 Foodie Street<br />Culinary District<br />Foodville, FD 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-medium text-black">Hours</h3>
                  <p className="text-black">
                    Monday - Friday: 11:00 AM - 10:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-black">Send us a Message</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}