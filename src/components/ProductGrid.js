import { createProductCard } from "./ProductCard.js";

export function renderProductGrid(container, products, cart, onAdd, onUpdateQuantity) {
  if (!container) return;
  container.innerHTML = "";

  products.forEach(product => {
    const itemInCart = cart.find(item => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;
    const card = createProductCard(product, quantity, onAdd, onUpdateQuantity);
    container.appendChild(card);
  });
}
