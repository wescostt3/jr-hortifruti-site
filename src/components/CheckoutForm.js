export function createCheckoutForm() {
  const form = document.createElement("form");
  form.className = "checkout-form";
  form.onsubmit = (e) => e.preventDefault();

  form.innerHTML = `
    <h3 class="form-title">Dados de Entrega</h3>
    
    <div class="form-row">
      <div class="form-group col-half">
        <label for="client-name">Nome *</label>
        <input type="text" id="client-name" placeholder="Ex: João" required>
      </div>
      <div class="form-group col-half">
        <label for="client-lastname">Sobrenome *</label>
        <input type="text" id="client-lastname" placeholder="Ex: Silva" required>
      </div>
    </div>

    <div class="form-group">
      <label for="client-address">Endereço Completo *</label>
      <input type="text" id="client-address" placeholder="Rua, número, complemento, bairro" required>
    </div>

    <div class="form-group">
      <label for="payment-method">Forma de Pagamento *</label>
      <select id="payment-method" required>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="PIX">PIX</option>
        <option value="Cartão de Débito">Cartão de Débito</option>
        <option value="Cartão de Crédito">Cartão de Crédito</option>
      </select>
    </div>

    <div class="form-group">
      <label>Tipo de Entrega *</label>
      <div class="delivery-options">
        <label class="radio-label">
          <input type="radio" name="delivery-type" value="Normal" checked>
          <span>Entrega Normal</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="delivery-type" value="Agendada">
          <span>Agendada</span>
        </label>
      </div>
    </div>

    <div id="scheduled-details" class="scheduled-details hidden">
      <div class="form-row">
        <div class="form-group col-half">
          <label for="delivery-date">Data da Entrega *</label>
          <input type="date" id="delivery-date">
        </div>
        <div class="form-group col-half">
          <label for="delivery-time">Horário Desejado *</label>
          <input type="time" id="delivery-time" min="09:00" max="17:00">
        </div>
      </div>
    </div>

    <div class="delivery-rules">
      <p>🕒 <strong>Regras de Entrega:</strong> As entregas são realizadas de segunda a sábado, das 09:00 às 17:00.</p>
    </div>
  `;

  // Setup toggle for scheduled details
  const radios = form.querySelectorAll('input[name="delivery-type"]');
  const scheduledDiv = form.querySelector('#scheduled-details');

  // Prevent selecting dates in the past
  const dateInput = form.querySelector("#delivery-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'Agendada') {
        scheduledDiv.classList.remove('hidden');
        form.querySelector("#delivery-date").required = true;
        form.querySelector("#delivery-time").required = true;
      } else {
        scheduledDiv.classList.add('hidden');
        form.querySelector("#delivery-date").required = false;
        form.querySelector("#delivery-time").required = false;
      }
    });
  });

  return form;
}

export function validateForm(formElement) {
  const name = formElement.querySelector("#client-name").value.trim();
  const lastname = formElement.querySelector("#client-lastname").value.trim();
  const address = formElement.querySelector("#client-address").value.trim();
  const payment = formElement.querySelector("#payment-method").value;
  const deliveryType = formElement.querySelector('input[name="delivery-type"]:checked').value;

  if (!name || !lastname || !address || !payment) {
    return { valid: false, error: "Por favor, preencha todos os campos obrigatórios (*)." };
  }

  if (deliveryType === "Agendada") {
    const dateVal = formElement.querySelector("#delivery-date").value;
    const timeVal = formElement.querySelector("#delivery-time").value;

    if (!dateVal || !timeVal) {
      return { valid: false, error: "Por favor, informe a data e o horário para a entrega agendada." };
    }

    // Validate Sunday
    const dateObj = new Date(dateVal + "T00:00:00");
    if (dateObj.getDay() === 0) {
      return { valid: false, error: "Não realizamos entregas aos domingos. Por favor, escolha um dia de segunda a sábado." };
    }

    // Validate Hours (09:00 to 17:00)
    const [hours, minutes] = timeVal.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes;
    const minTime = 9 * 60; // 09:00
    const maxTime = 17 * 60; // 17:00

    if (timeInMinutes < minTime || timeInMinutes > maxTime) {
      return { valid: false, error: "O horário selecionado deve estar entre as 09:00 e as 17:00." };
    }
  }

  return { valid: true };
}

export function getFormData(formElement) {
  const name = formElement.querySelector("#client-name").value.trim();
  const lastname = formElement.querySelector("#client-lastname").value.trim();
  const address = formElement.querySelector("#client-address").value.trim();
  const payment = formElement.querySelector("#payment-method").value;
  const deliveryType = formElement.querySelector('input[name="delivery-type"]:checked').value;
  
  let dateVal = "";
  let timeVal = "";
  if (deliveryType === "Agendada") {
    dateVal = formElement.querySelector("#delivery-date").value;
    timeVal = formElement.querySelector("#delivery-time").value;
  }

  return {
    fullName: `${name} ${lastname}`,
    address,
    payment,
    deliveryType,
    date: dateVal,
    time: timeVal
  };
}
