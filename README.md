# Brilliance Exposed Landing Page

A stunning, minimalist landing page for the "Brilliance Exposed" exhibition, featuring a pitch-black aesthetic with elegant typography and smooth animations.

## 🌟 Features

- **Immersive Intro Sequence**: Opening quote animation that sets the exhibition tone
- **Center-Mode Carousel**: Elegant portrait carousel with ultra-slow transitions (8s)
- **Pitch Black Design**: Seamless dark aesthetic with images blending into the background
- **Premium Typography**: Cormorant Garamond serif paired with Inter sans-serif
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices

## 🎨 Design System

### Colors
- Background: `#000000` (Pitch Black)
- Text: `#FFFFFF` (White)
- Accent: `#D4A574` (Warm Gold)
- Secondary: `#E0E0E0` (Light Gray)

### Typography
- **Serif**: Cormorant Garamond (Names, Quotes)
- **Sans-serif**: Inter (Navigation, Titles)

### Layout
- Max Container Width: `1400px`
- Base Unit: `8px`
- Padding (Desktop): `40px`
- Padding (Mobile): `24px`

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd web
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── IntroOverlay.jsx      # Opening quote animation
│   │   ├── Navigation.jsx         # Top navigation bar
│   │   └── PortraitCarousel.jsx   # Main carousel component
│   ├── App.jsx                    # Main app component
│   └── index.css                  # Global styles & design tokens
├── public/
└── package.json
```

## 🎭 Animation Details

- **Intro Duration**: 4.5 seconds (1.5s fade in + 3s hold)
- **Carousel Transition**: 8 seconds (ultra-smooth easeInOut)
- **Carousel Interval**: 12 seconds per slide
- **Navbar Fade**: 2 seconds after intro completes

## 📱 Responsive Breakpoints

- Desktop: `> 1024px`
- Tablet: `768px - 1024px`
- Mobile: `< 768px`

## 🛠 Built With

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- Vanilla CSS - Styling

## 📄 License

This project is part of the Brilliance Exposed exhibition.

---

**Repository**: [github.com/Hypic01/brilliance-exposed](https://github.com/Hypic01/brilliance-exposed)
