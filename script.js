// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCartCount();
  saveCart();
}

function updateCartCount() {
  const countElement = document.getElementById('cart-count');
  if (countElement) {
    countElement.textContent = cart.length;
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});