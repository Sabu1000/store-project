# Phone Store Project 📱

A modern, responsive e-commerce website for a phone store built with HTML, CSS, and JavaScript.

## Features ✨

- **Product Catalog**: Browse through various phone models (iPhone and Samsung)
- **Interactive Shopping**: Click on phones to view details and add to cart
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Store Locator**: Find store locations and hours
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Cart persists between sessions

## Technologies Used 🛠️

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Storage**: Browser SessionStorage
- **Styling**: Modern CSS with gradients and animations

## Project Structure 📁

```
storeproject/
├── com.CSPrincipals.Bhattarai.StoreProject/
│   └── WebContent/
│       ├── Images/           # Product images
│       ├── store.html        # Main store page
│       ├── store.css         # Main stylesheet
│       ├── store.js          # Main JavaScript
│       ├── cartpage.html     # Shopping cart page
│       ├── cartpage.css      # Cart page styles
│       ├── storelocation.html # Store location page
│       └── storelocation.css  # Location page styles
├── server.js                 # Backend server
├── package.json             # Node.js dependencies
└── README.md               # This file
```

## Getting Started 🚀

### Prerequisites
- Node.js (version 14 or higher)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/phone-store-project.git
cd phone-store-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
node server.js
```

4. Open the project in VS Code and use Live Server extension to view the website:
   - Right-click on `store.html`
   - Select "Open with Live Server"

## Usage 💡

1. **Browse Products**: Click on any phone image to view details
2. **Add to Cart**: Select a phone and click "Add to Cart"
3. **View Cart**: Click on the cart icon or navigate to checkout
4. **Manage Cart**: Add/remove items as needed
5. **Store Info**: Check store locations and hours

## Features in Detail 🔍

### Shopping Cart
- Persistent cart using SessionStorage
- Real-time updates of quantities and totals
- Remove items functionality

### Product Display
- Hover effects on product images
- Detailed product information
- Price display

### Responsive Design
- Mobile-friendly layout
- Flexible grid system
- Touch-friendly interface

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Author 👨‍💻

Created by [Your Name]

## Acknowledgments 🙏

- Thanks to all contributors
- Images sourced from product manufacturers
- Built with modern web technologies
