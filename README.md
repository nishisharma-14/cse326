# 🍽️ Dish Delight - Vegetarian Restaurant

A modern, responsive vegetarian restaurant website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design** - Clean, responsive UI with Tailwind CSS
- **Multi-page Navigation** - Home, Menu, Reservations, and Contact pages
- **Mobile Friendly** - Fully responsive across all devices
- **Fast Performance** - Built with Vite for optimal loading speeds
- **Type Safe** - Written in TypeScript for better code quality

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd restro
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
The project is configured for easy Vercel deployment with `vercel.json`.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── hero.tsx
│   └── footer.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── menu.tsx
│   ├── Reservation.tsx
│   └── contact.tsx
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

- **Colors:** Modify Tailwind config in `tailwind.config.js`
- **Fonts:** Update in `index.css`
- **Components:** Add new components in `src/components/`
- **Pages:** Add new pages in `src/pages/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for vegetarian food lovers