# ShopEase - Modern E-Commerce Platform

A sleek, responsive e-commerce application built with React and Vite, featuring a modern design and smooth user experience.

## Features

- 🛍️ **Product Catalog**: Browse through a curated collection of fashion, footwear, and accessories
- 🔍 **Advanced Search & Filtering**: Find products by category, price, and ratings
- 🛒 **Smart Cart Management**: Add, remove, and adjust quantities with real-time updates
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: React 19, React Router
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Icons**: Inline SVG

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopease.git
   cd shopease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Cart.jsx        # Shopping cart sidebar
│   ├── Navbar.jsx      # Navigation header
│   ├── ProductCard.jsx # Product display card
│   └── SearchBar.jsx   # Search and filter component
├── context/            # React Context for state management
│   └── CartContext.jsx
├── data/               # Static data
│   └── products.js
├── hooks/              # Custom React hooks
│   └── useProducts.js
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── ProductDetails.jsx
│   └── Checkout.jsx
└── assets/             # Static assets
```

## Key Components

### Cart Management
- Add/remove products from cart
- Quantity adjustment
- Real-time price calculation
- Persistent cart state

### Product Features
- Detailed product pages
- Star ratings and reviews
- Price comparison with discounts
- Category-based filtering

### Checkout Process
- Complete order form
- Payment information collection
- Order summary
- Success confirmation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.
