# 🌱 Paradise Nursery - E-Plant Shopping

A modern React-based e-commerce application for purchasing plants online. Built with React, Redux Toolkit, and Vite, this application provides a seamless shopping experience for plant enthusiasts.

## 🌟 Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through 30+ carefully curated plants across 5 categories
- **Category Filtering**: Organize plants by type (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- **Product Details**: View high-quality images, descriptions, and pricing for each plant
- **Shopping Cart**: Add/remove items, adjust quantities, and view total cost
- **Responsive Design**: Optimized for desktop and mobile devices

### 🏪 Plant Categories
1. **Air Purifying Plants** - Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera
2. **Aromatic Fragrant Plants** - Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth
3. **Insect Repellent Plants** - Oregano, Marigold, Geraniums, Basil, Lavender, Catnip
4. **Medicinal Plants** - Aloe Vera, Echinacea, Peppermint, Lemon Balm, Chamomile, Calendula
5. **Low Maintenance Plants** - ZZ Plant, Pothos, Snake Plant, Cast Iron Plant, Succulents, Aglaonema

### 🛒 Cart Functionality
- Add plants to cart with one click
- Adjust quantities with increment/decrement buttons
- Remove items from cart
- Real-time total calculation
- Visual cart indicator showing item count
- Continue shopping and checkout options

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-plantShopping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: React 18.2.0
- **State Management**: Redux Toolkit 2.2.3
- **Build Tool**: Vite 5.2.0
- **Styling**: CSS3 with custom components
- **Icons**: SVG icons and external image resources

### Project Structure
```
src/
├── components/
│   ├── App.jsx              # Main application component
│   ├── ProductList.jsx      # Product catalog and navigation
│   ├── CartItem.jsx         # Shopping cart functionality
│   └── AboutUs.jsx          # About page component
├── store/
│   ├── store.js             # Redux store configuration
│   ├── plantSlice.js        # Plant data and actions
│   └── CartSlice.jsx        # Cart state management
├── styles/
│   ├── App.css              # Main application styles
│   ├── ProductList.css      # Product grid and layout
│   ├── CartItem.css         # Cart component styles
│   └── AboutUs.css          # About page styles
└── main.jsx                 # Application entry point
```

### State Management
The application uses Redux Toolkit for efficient state management:

- **Plant Store**: Manages product data, categories, and plant information
- **Cart Store**: Handles shopping cart state, item quantities, and totals
- **Actions**: Increment/decrement quantities, add/remove items, update cart

## 🎨 User Interface

### Landing Page
- Welcoming hero section with "Where Green Meets Serenity" tagline
- About Us section with company information
- Smooth transitions between landing page and product catalog

### Product Catalog
- Clean grid layout displaying plant cards
- High-quality product images from Pixabay and Unsplash
- Category-based organization
- Add to cart functionality with visual feedback

### Shopping Cart
- Detailed cart view with product images and information
- Quantity adjustment controls
- Real-time total calculation
- Remove items functionality
- Checkout placeholder (coming soon feature)

## 🌿 Plant Data

The application includes 30+ plants with detailed information:
- **Product Images**: High-resolution photos from reliable sources
- **Descriptions**: Detailed plant benefits and care information
- **Pricing**: Competitive pricing ranging from $8 to $25
- **SKU System**: Unique identifiers for inventory management
- **Categories**: Organized by plant type and purpose

## 🔧 Development

### Code Quality
- ESLint configuration for code consistency
- React best practices implementation
- Component-based architecture
- Responsive design principles

### Performance
- Vite for fast development and building
- Optimized bundle size
- Efficient state management with Redux Toolkit
- Lazy loading and code splitting ready

## 🚀 Deployment

The application is configured for easy deployment:

- **GitHub Pages**: Use `npm run deploy` for automatic deployment
- **Build Output**: Production files in `dist/` directory
- **Environment**: Configured for both development and production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌱 About Paradise Nursery

Paradise Nursery is dedicated to bringing nature closer to you. Our mission is to provide high-quality plants that enhance your surroundings while contributing to a healthier, more sustainable lifestyle. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way.

---

**Visit Paradise Nursery today and experience the beauty of nature right at your doorstep!** 🌿✨