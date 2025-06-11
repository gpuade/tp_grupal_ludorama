
let cart = [];

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
    list.innerHTML += `<li>${item.name} x${item.quantity} - $${item.price * item.quantity}</li>`;
  });
  total.textContent = totalPrice;
}

function clearToCart() {
  const carrito = document.getElementById('cart-items'); 
  carrito.innerHTML = ''; 
  
  const total = document.getElementById('total'); 
  total.textContent = '0';

  cart = [];
}