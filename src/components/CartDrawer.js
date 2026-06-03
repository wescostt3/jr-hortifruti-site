import { createCheckoutForm, validateForm, getFormData } from "./CheckoutForm.js";

export function createCartDrawer(cart, products, onUpdateQuantity, onRemove, onClear, onCheckout) {
  const drawer = document.createElement("div");
  drawer.className = "cart-drawer-container";

  const backdrop = document.createElement("div");
  backdrop.className = "cart-drawer-backdrop";
  drawer.appendChild(backdrop);

  const content = document.createElement("div");
  content.className = "cart-drawer-content";

  // Header
  const header = document.createElement("div");
  header.className = "cart-drawer-header";
  header.innerHTML = `
    <h3>Seu Pedido</h3>
    <button class="cart-drawer-close-btn" aria-label="Fechar carrinho">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  content.appendChild(header);

  const body = document.createElement("div");
  body.className = "cart-drawer-body";

  if (cart.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "cart-empty-state";
    emptyState.innerHTML = `
      <div class="empty-icon">🥬</div>
      <p>Seu carrinho está vazio.</p>
      <span>Escolha frutas, legumes e verduras fresquinhas na nossa vitrine para montar seu pedido.</span>
    `;
    body.appendChild(emptyState);
    content.appendChild(body);
  } else {
    // Cart items list
    const itemsList = document.createElement("div");
    itemsList.className = "cart-items-list";

    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return;

      const itemRow = document.createElement("div");
      itemRow.className = "cart-item-row";
      itemRow.innerHTML = `
        <img class="cart-item-img" src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <span class="cart-item-category">${product.category}</span>
          <h4 class="cart-item-name">${product.name}</h4>
          <span class="cart-item-unit">Medida: ${product.unit}</span>
        </div>
      `;

      const controls = document.createElement("div");
      controls.className = "cart-item-controls";

      const stepper = document.createElement("div");
      stepper.className = "quantity-stepper small";

      const minusBtn = document.createElement("button");
      minusBtn.className = "stepper-btn minus";
      minusBtn.innerHTML = `
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      `;
      minusBtn.onclick = () => onUpdateQuantity(item.id, item.quantity - 1);

      const val = document.createElement("span");
      val.className = "stepper-value";
      val.textContent = item.quantity;

      const plusBtn = document.createElement("button");
      plusBtn.className = "stepper-btn plus";
      plusBtn.innerHTML = `
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      `;
      plusBtn.onclick = () => onUpdateQuantity(item.id, item.quantity + 1);

      stepper.appendChild(minusBtn);
      stepper.appendChild(val);
      stepper.appendChild(plusBtn);

      const removeBtn = document.createElement("button");
      removeBtn.className = "cart-item-remove-btn";
      removeBtn.setAttribute("aria-label", "Remover item");
      removeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      `;
      removeBtn.onclick = () => onRemove(item.id);

      controls.appendChild(stepper);
      controls.appendChild(removeBtn);
      itemRow.appendChild(controls);
      itemsList.appendChild(itemRow);
    });

    body.appendChild(itemsList);

    // Clear cart action
    const clearContainer = document.createElement("div");
    clearContainer.className = "cart-clear-container";
    clearContainer.innerHTML = `<button class="cart-clear-btn">Limpar Lista de Compras</button>`;
    clearContainer.querySelector(".cart-clear-btn").onclick = onClear;
    body.appendChild(clearContainer);

    // Separator line
    const hr = document.createElement("hr");
    hr.className = "cart-divider";
    body.appendChild(hr);

    // Checkout form mount
    const checkoutForm = createCheckoutForm();
    body.appendChild(checkoutForm);

    content.appendChild(body);

    // Footer actions
    const footer = document.createElement("div");
    footer.className = "cart-drawer-footer";

    // Info notice
    const disclaimer = document.createElement("p");
    disclaimer.className = "cart-warning-notice";
    disclaimer.innerHTML = `
      ℹ️ <strong>Nota:</strong> Os itens selecionados estão sujeitos à confirmação de disponibilidade em estoque, variação de safra e confirmação final pelo WhatsApp. A entrega também será confirmada pela equipe do JR Hortifruti.
    `;
    footer.appendChild(disclaimer);

    // Error banner
    const errorBanner = document.createElement("div");
    errorBanner.className = "cart-error-banner hidden";
    footer.appendChild(errorBanner);

    // Submit button
    const checkoutBtn = document.createElement("button");
    checkoutBtn.className = "button cart-checkout-submit-btn";
    checkoutBtn.innerHTML = `
      <span class="traitL"></span>
      <span class="text">Confirmar pelo WhatsApp</span>
      <span class="traitR"></span>
    `;
    
    checkoutBtn.onclick = () => {
      const validation = validateForm(checkoutForm);
      if (!validation.valid) {
        errorBanner.textContent = validation.error;
        errorBanner.classList.remove("hidden");
        // Scroll error into view
        errorBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        errorBanner.classList.add("hidden");
        const clientData = getFormData(checkoutForm);
        onCheckout(clientData);
      }
    };

    footer.appendChild(checkoutBtn);
    content.appendChild(footer);
  }

  drawer.appendChild(content);

  // Close actions
  const closeBtn = header.querySelector(".cart-drawer-close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => drawer.classList.remove("open");
  }
  backdrop.onclick = () => drawer.classList.remove("open");

  return drawer;
}
