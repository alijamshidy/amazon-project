# Amazon Clone

A responsive Amazon-inspired storefront built with HTML, CSS, and vanilla JavaScript. The project focuses on core e-commerce UI flows such as product browsing, cart management, checkout, order history, and package tracking.

## Screenshot

Add screenshots to `docs/screenshots/` and update the links below:

```md
![Home page](docs/screenshots/home.png)
![Checkout page](docs/screenshots/checkout.png)
```

## Features

- Product listing with images, ratings, and prices
- Search-style header and cart quantity indicator
- Add-to-cart flow with quantity selection
- Checkout page with delivery options and order summary
- Orders page and tracking page
- Local JavaScript modules for product, cart, and delivery data
- Static deployment through GitHub Pages

## Tech Stack

- HTML5
- CSS3
- JavaScript ES modules
- GitHub Pages

## Installation

Clone the repository:

```bash
git clone https://github.com/alijamshidy/amazon-clone.git
cd amazon-clone
```

Run locally by opening `index.html` in a browser, or use a simple static server:

```bash
npx serve .
```

## Environment Variables

This project does not require environment variables.

## Folder Structure

```text
.
├── backend/
│   └── products.json
├── data/
│   ├── cart.js
│   ├── deliveryOptions.js
│   └── products.js
├── images/
│   ├── icons/
│   └── products/
├── scripts/
├── styles/
├── checkout.html
├── index.html
├── orders.html
└── tracking.html
```

## Demo

Live demo: https://alijamshidy.github.io/amazon-clone/

## Repository Metadata

Suggested description:

```text
Amazon-inspired storefront built with HTML, CSS, and vanilla JavaScript.
```

Suggested topics:

```text
amazon-clone, ecommerce, javascript, html, css, frontend, github-pages
```
