import React, { useState } from 'react';
import { Calendar, Clock, Users, Utensils } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'regular',
    specialRequests: '',
  });

  const occasions = ['regular', 'birthday', 'anniversary', 'business'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request received! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      occasion: 'regular',
      specialRequests: '',
    });
  };

  return (
    <section
      id="reservation"
      className="py-20 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Make a Reservation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Guests & Occasion */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 mr-2" />
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Utensils className="w-4 h-4 mr-2" />
                Occasion
              </label>
              <select
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({ ...formData, occasion: e.target.value })
                }
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              >
                {occasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Special Requests
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) =>
                setFormData({ ...formData, specialRequests: e.target.value })
              }
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              rows={3}
              placeholder="Any special requests or dietary requirements?"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors w-full"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
}
