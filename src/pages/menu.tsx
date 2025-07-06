

import React, { useState } from 'react';

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      { name: "Crispy Corn", price: "₹250", description: "Golden fried corn kernels tossed in spices" },
      { name: "Paneer 65", price: "₹280", description: "Spicy cottage cheese fritters" },
      { name: "Spring Rolls", price: "₹220", description: "Crispy rolls filled with vegetables" },
      { name: "Mushroom Manchurian", price: "₹260", description: "Indo-Chinese style mushrooms" },
      { name: "Veg Seekh Kebab", price: "₹290", description: "Grilled vegetable skewers" }
    ]
  },
  {
    name: "Main Course",
    items: [
      { name: "Paneer Butter Masala", price: "₹320", description: "Cottage cheese in rich tomato gravy" },
      { name: "Dal Makhani", price: "₹280", description: "Creamy black lentils" },
      { name: "Veg Biryani", price: "₹300", description: "Aromatic rice with mixed vegetables" },
      { name: "Malai Kofta", price: "₹340", description: "Stuffed potato dumplings in creamy sauce" },
      { name: "Palak Paneer", price: "₹310", description: "Cottage cheese in spinach gravy" },
      { name: "Kadai Mushroom", price: "₹290", description: "Spicy bell pepper mushroom curry" }
    ]
  },
  {
    name: "Oriental",
    items: [
      { name: "Veg Hakka Noodles", price: "₹260", description: "Stir-fried noodles with vegetables" },
      { name: "Thai Green Curry", price: "₹340", description: "Aromatic coconut-based curry" },
      { name: "Kung Pao Tofu", price: "₹290", description: "Spicy Sichuan style tofu" },
      { name: "Pad Thai", price: "₹320", description: "Thai style rice noodles" }
    ]
  },
  {
    name: "Breads & Rice",
    items: [
      { name: "Butter Naan", price: "₹60", description: "Traditional Indian bread" },
      { name: "Garlic Roti", price: "₹50", description: "Whole wheat bread with garlic" },
      { name: "Laccha Paratha", price: "₹70", description: "Layered whole wheat bread" },
      { name: "Jeera Rice", price: "₹180", description: "Cumin flavored rice" },
      { name: "Saffron Rice", price: "₹220", description: "Aromatic saffron-infused rice" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "₹150", description: "Sweet milk dumplings" },
      { name: "Rasmalai", price: "₹180", description: "Cottage cheese in sweet milk" },
      { name: "Gajar Ka Halwa", price: "₹200", description: "Carrot pudding with nuts" },
      { name: "Kulfi Falooda", price: "₹220", description: "Indian ice cream with vermicelli" },
      { name: "Chocolate Brownie", price: "₹250", description: "Warm brownie with ice cream" }
    ]
  },
  {
    name: "Beverages",
    items: [
      { name: "Masala Chai", price: "₹80", description: "Indian spiced tea" },
      { name: "Cold Coffee", price: "₹150", description: "Creamy blended coffee" },
      { name: "Fresh Lime Soda", price: "₹100", description: "Sweet and salty lime drink" },
      { name: "Mango Lassi", price: "₹120", description: "Mango yogurt smoothie" },
      { name: "Virgin Mojito", price: "₹160", description: "Mint and lime mocktail" }
    ]
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].name);

  return (
    <div className="pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gold">Our Menu</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.name
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-black-rich text-gray-300 hover:bg-gold/10 hover:shadow-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuCategories
            .find((category) => category.name === selectedCategory)
            ?.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-black-rich p-6 rounded-lg border border-gold-metallic/30 hover:border-gold/50 hover:shadow-gold transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gold">{item.name}</h3>
                  <span className="text-gold-accent font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}