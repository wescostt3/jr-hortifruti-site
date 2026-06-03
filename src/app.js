import { products } from "./data/products.js";
import { seasonalCalendar } from "./data/seasonalCalendar.js";
import { renderProductGrid } from "./components/ProductGrid.js";
import { createSeasonalCalendar } from "./components/SeasonalCalendar.js";
import { createCartDrawer } from "./components/CartDrawer.js";

// Configuration Constants
const WHATSAPP_PEDIDOS = "5521956893764"; // Official JR Hortifruti number

// Cart State (Persisted in localStorage)
let cart = [];
try {
  const savedCart = localStorage.getItem("jr_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.error("Erro ao carregar o carrinho do localStorage:", e);
}

// Global Selectors for Mounting Points
let gridContainer = null;
let calendarContainer = null;
let drawerContainer = null;
let floatingCartBtn = null;
let cartCountBadge = null;

// Save Cart to localStorage and Re-render UI
function saveCartAndRender() {
  localStorage.setItem("jr_cart", JSON.stringify(cart));
  renderAll();
}

// Global Cart Actions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  showToast(`Adicionado: ${product.name}!`);
  saveCartAndRender();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
  }
  saveCartAndRender();
}

function removeFromCart(productId) {
  const product = products.find(p => p.id === productId);
  const name = product ? product.name : "Item";
  cart = cart.filter(item => item.id !== productId);
  showToast(`Removido: ${name}`);
  saveCartAndRender();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  showToast("Carrinho limpo!");
  saveCartAndRender();
}

// Format date to Brazilian locale DD/MM/YYYY
function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// Format the WhatsApp Message and Open Deep Link
function handleCheckout(clientData) {
  let deliveryDetails = "";
  if (clientData.deliveryType === "Agendada") {
    const displayDate = formatDisplayDate(clientData.date);
    deliveryDetails = `Data/Horário: ${displayDate} às ${clientData.time}`;
  } else {
    deliveryDetails = `Tipo: Entrega Normal (Conforme disponibilidade de rotas)`;
  }

  // Compile items list
  const itemsText = cart
    .map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return "";
      return `- ${item.quantity}x ${product.name} - ${product.unit}`;
    })
    .filter(text => text !== "")
    .join("\n");

  const message = `Olá, JR Hortifruti! Gostaria de confirmar meu pedido.

Dados do cliente:
Nome: ${clientData.fullName}
Endereço: ${clientData.address}
Forma de pagamento: ${clientData.payment}
Tipo de entrega: ${clientData.deliveryType === "Agendada" ? "Agendada" : "Normal"}
${clientData.deliveryType === "Agendada" ? `${deliveryDetails}` : ""}

Itens selecionados:
${itemsText}

Observação:
Os itens selecionados estão sujeitos à confirmação de disponibilidade em estoque, variação de safra e confirmação final pelo WhatsApp. A entrega também será confirmada pela equipe do JR Hortifruti.`;

  // Encode message for WhatsApp API
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PEDIDOS}?text=${encodedText}`;

  // Redirect client to WhatsApp
  window.open(whatsappUrl, "_blank");
}

// Dynamic Rendering of Mount Points
function renderAll() {
  // Update Product Grid
  if (gridContainer) {
    renderProductGrid(gridContainer, products, cart, addToCart, updateQuantity);
  }

  // Re-create the drawer component to inject state
  if (drawerContainer) {
    const openState = drawerContainer.querySelector(".cart-drawer-container")?.classList.contains("open");
    drawerContainer.innerHTML = "";
    const activeDrawer = createCartDrawer(cart, products, updateQuantity, removeFromCart, clearCart, handleCheckout);
    if (openState) {
      activeDrawer.classList.add("open");
    }
    drawerContainer.appendChild(activeDrawer);
  }

  // Update floating cart counts
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountBadge) {
    cartCountBadge.textContent = totalCount;
    if (totalCount > 0) {
      cartCountBadge.classList.add("visible");
      floatingCartBtn.classList.add("has-items");
    } else {
      cartCountBadge.classList.remove("visible");
      floatingCartBtn.classList.remove("has-items");
    }
  }
}

// Toast Feedback Notification Maker
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-notification animate-slide-in";
  toast.textContent = message;

  container.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.add("fade-out");
    // Wait for the CSS fade-out transition (300ms) to complete before removing
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3000);
}

// Application Initialization
window.addEventListener("DOMContentLoaded", () => {
  // Setup Mount Points
  gridContainer = document.getElementById("products-grid-mount");
  calendarContainer = document.getElementById("seasonal-calendar-mount");

  // Mount components
  if (calendarContainer) {
    createSeasonalCalendar(calendarContainer, seasonalCalendar);
  }

  // Create App Drawer Element wrapper in body
  drawerContainer = document.createElement("div");
  drawerContainer.id = "cart-drawer-mount";
  document.body.appendChild(drawerContainer);

  // Create floating shopping cart button
  floatingCartBtn = document.createElement("button");
  floatingCartBtn.id = "floating-cart-trigger";
  floatingCartBtn.setAttribute("aria-label", "Abrir carrinho");
  floatingCartBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="floating-cart-badge" class="cart-badge">0</span>
  `;
  document.body.appendChild(floatingCartBtn);
  cartCountBadge = document.getElementById("floating-cart-badge");

  floatingCartBtn.onclick = () => {
    const activeDrawer = drawerContainer.querySelector(".cart-drawer-container");
    if (activeDrawer) {
      activeDrawer.classList.toggle("open");
    }
  };

  // Perform initial render
  renderAll();
});
