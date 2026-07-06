# Amazon Clone

A **front-end clone of Amazon** built with **vanilla HTML, CSS, and JavaScript**. This project replicates the core functionality of Amazon's user interface including product listings, shopping cart, checkout process, and user interactions.

---

## 📸 Screenshot
*(Add your Amazon clone screenshots here - homepage, product page, cart, checkout, etc.)*

---

## ✨ Features

### 🛒 **Core Shopping Features**
- Product catalog with grid and list views
- Product search functionality
- Product filtering by category, price, rating
- Product details page with images, description, reviews
- Add to cart functionality
- Shopping cart management (add, remove, update quantity)

### 💳 **Checkout Process**
- Multi-step checkout (shipping, payment, review)
- Shipping address form
- Delivery options selection
- Payment method selection
- Order summary and confirmation

### 👤 **User Experience**
- Responsive design (works on mobile, tablet, desktop)
- Product ratings and reviews display
- Price display with discounts
- Quantity selector
- Image gallery/zoom

### 📦 **Data Management**
- Static product data (JSON-based)
- Cart persistence (localStorage)
- Order history simulation

---

## 🛠 Tech Stack

**Frontend:**
- [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) - Markup language
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

**Libraries & Tools:**
- [Day.js](https://day.js.org/) - Lightweight date library (`dayjs.min.js`)
- Custom JavaScript modules for:
  - Cart management
  - Checkout process
  - Payment calculation
  - Data formatting

**Build Tools:**
- No build step required (pure HTML/JS/CSS)
- Can be served with any static file server

---

## 💻 Installation

### Option 1: Open Directly
Simply open the `index.html` file in your browser (if available) or use:
```bash
# Using Python's built-in HTTP server
cd amazon-clone
python -m http.server 8000
```

### Option 2: Clone and Run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/alijamshidy/amazon-clone.git
   cd amazon-clone
   ```

2. **Start a local server:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## ⚙ Environment Variables

This project uses **static data** and doesn't require environment variables. However, you can configure:

```env
# If integrating with a backend API
API_BASE_URL=http://localhost:5000/api

# For analytics (optional)
GOOGLE_ANALYTICS_ID=your_ga_id
```

---

## 📁 Folder Structure

```
amazon-clone/
├── backend/               # Backend data (JSON files)
│   └── products.json      # Product data
├── data/                  # Frontend data
│   ├── cart.js            # Cart functionality
│   ├── deliveryOptions.js # Delivery options configuration
│   └── products.js        # Product data (frontend)
├── images/                # Static images
│   ├── icons/             # Icon images
│   ├── products/          # Product images
│   └── ratings/           # Rating star images
├── scripts/               # JavaScript modules
│   ├── amazon.js          # Main application logic
│   ├── checkout/          # Checkout-related scripts
│   │   ├── CheckoutHeader.js
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   ├── checkout.js         # Checkout main logic
│   ├── dayjs.min.js       # Day.js library
│   └── utils/             # Utility functions
│       └── money.js       # Money formatting utilities
├── styles/                # CSS styles
│   ├── pages/             # Page-specific styles
│   └── shared/            # Shared/global styles
├── .github/               # GitHub configuration
│   └── workflows/         # GitHub Actions workflows
├── .vscode/               # VS Code configuration
│   └── settings.json
├── checkout.html          # Checkout page
└── README.md
```

---

## 🚀 Demo

### Run the project:
```bash
cd amazon-clone
python -m http.server 8000
```

### Access the application:
- **Homepage:** `http://localhost:8000`
- **Checkout:** `http://localhost:8000/checkout.html`

### Features to Test:
1. Browse products on the homepage
2. Click on a product to view details
3. Add products to cart
4. View cart and proceed to checkout
5. Complete the checkout process
6. Test filtering and search (if available)

---

## 📡 API Documentation

This is a **frontend-only** project that uses static data. If you want to connect it to a backend API:

### Suggested Backend Integration

```javascript
// Example: Fetch products from an API
async function fetchProducts() {
  const response = await fetch('http://localhost:5000/api/products');
  return await response.json();
}

// Example: Send cart data to backend
async function saveCart(cartData) {
  await fetch('http://localhost:5000/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cartData)
  });
}
```

### Recommended Backend Stack
- **Node.js + Express** (like your `nodejs-ecommerce-api`)
- **REST API** endpoints for:
  - Products: `GET /api/products`
  - Cart: `GET/POST /api/cart`
  - Orders: `POST /api/orders`
  - Users: `GET/POST /api/users`

---

## 📦 Available Scripts

Since this is a static project, there are no npm scripts. However, you can:

```bash
# Start a development server
python -m http.server 8000

# Or with Node.js
npx serve -p 8000

# Or with live-reload (requires installation)
npx live-server --port=8000
```

---

## 🎯 Project Roadmap

- [x] Core Amazon-like UI
- [x] Product catalog and listings
- [x] Shopping cart functionality
- [x] Checkout process
- [ ] User authentication integration
- [ ] Backend API integration
- [ ] Real-time updates
- [ ] Mobile app version

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is **public** and open for use.

---

## 🆘 Support

For support, please open an issue or contact the maintainer.

---

## 🏷 Topics

`html`, `css`, `javascript`, `amazon-clone`, `ecommerce`, `frontend`, `vanilla-js`, `responsive-design`, `shopping-cart`, `checkout`, `static-website`