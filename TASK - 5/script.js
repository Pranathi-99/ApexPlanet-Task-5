<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SmartCart E-Commerce</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <div class="logo">SmartCart</div>
    <nav>
      <a href="#products">Products</a>
      <a href="#cart">Cart</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Shop Smarter with SmartCart</h1>
    <p>Your go-to online store for modern essentials</p>
  </section>

  <section id="products" class="grid">
    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Product 1" loading="lazy" />
      <h3>Wireless Headphones</h3>
      <p>$49.99</p>
      <button onclick="addToCart('Wireless Headphones', 49.99)">Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Product 2" loading="lazy" />
      <h3>Smart Watch</h3>
      <p>$89.99</p>
      <button onclick="addToCart('Smart Watch', 89.99)">Add to Cart</button>
    </div>
    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Product 3" loading="lazy" />
      <h3>Bluetooth Speaker</h3>
      <p>$35.50</p>
      <button onclick="addToCart('Bluetooth Speaker', 35.50)">Add to Cart</button>
    </div>
  </section>

  <section id="cart" class="cart-section">
    <h2>Your Cart</h2>
    <ul id="cart-items"></ul>
    <p id="total-amount">Total: $0.00</p>
    <button onclick="handleCheckout()">Checkout</button>
  </section>

  <section id="checkout" class="checkout-section">
    <h2>Payment</h2>
    <form id="checkout-form">
      <input type="text" id="card-name" placeholder="Cardholder Name" required />
      <input type="text" id="card-number" placeholder="Card Number" required />
      <button type="submit">Pay Now</button>
    </form>
  </section>

  <section id="contact">
    <form id="contactForm">
      <h2>Contact Us</h2>
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 SmartCart. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
