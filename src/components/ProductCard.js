export function createProductCard(product, cartQuantity, onAdd, onUpdateQuantity) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageContainer = document.createElement("div");
  imageContainer.className = "product-image-container";
  imageContainer.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
    <span class="product-badge">${product.badge}</span>
  `;
  card.appendChild(imageContainer);

  const info = document.createElement("div");
  info.className = "product-info";
  info.innerHTML = `
    <p class="product-category">${product.category}</p>
    <h3 class="product-name">${product.name}</h3>
    <p class="product-desc">${product.desc}</p>
    <p class="product-unit">Sugerido: <strong>${product.unit}</strong></p>
  `;
  card.appendChild(info);

  const actionContainer = document.createElement("div");
  actionContainer.className = "product-card-action-container";

  if (cartQuantity > 0) {
    const stepper = document.createElement("div");
    stepper.className = "quantity-stepper";

    const minusBtn = document.createElement("button");
    minusBtn.className = "stepper-btn minus";
    minusBtn.setAttribute("aria-label", "Diminuir quantidade");
    minusBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    minusBtn.onclick = () => onUpdateQuantity(product.id, cartQuantity - 1);

    const val = document.createElement("span");
    val.className = "stepper-value";
    val.textContent = cartQuantity;

    const plusBtn = document.createElement("button");
    plusBtn.className = "stepper-btn plus";
    plusBtn.setAttribute("aria-label", "Aumentar quantidade");
    plusBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    plusBtn.onclick = () => onUpdateQuantity(product.id, cartQuantity + 1);

    stepper.appendChild(minusBtn);
    stepper.appendChild(val);
    stepper.appendChild(plusBtn);
    actionContainer.appendChild(stepper);
  } else {
    const addBtn = document.createElement("button");
    addBtn.className = "product-action add-to-cart-btn";
    addBtn.innerHTML = `
      <span class="traitL"></span>
      <span class="text">Adicionar</span>
      <span class="traitR"></span>
    `;
    addBtn.onclick = () => onAdd(product.id);
    actionContainer.appendChild(addBtn);
  }

  card.appendChild(actionContainer);
  return card;
}
