export function createSeasonalCalendar(container, calendarData) {
  if (!container) return;
  container.innerHTML = "";

  const sectionWrapper = document.createElement("div");
  sectionWrapper.className = "seasonal-calendar-wrapper";

  // Title & subtitle
  const titleArea = document.createElement("div");
  titleArea.className = "calendar-title-area";
  titleArea.innerHTML = `
    <h2 class="section-title">Calendário de Frutas e Épocas</h2>
    <p class="section-subtitle">Acompanhe as épocas mais propícias para cada colheita. Os produtos sazonais são mais saborosos e econômicos!</p>
  `;
  sectionWrapper.appendChild(titleArea);

  // Month navigation tabs
  const navContainer = document.createElement("div");
  navContainer.className = "calendar-tabs-container";

  const tabsList = document.createElement("ul");
  tabsList.className = "calendar-tabs";

  // Active month state
  const currentMonthIndex = new Date().getMonth(); // 0-11
  let activeMonth = calendarData[currentMonthIndex].month;

  const contentArea = document.createElement("div");
  contentArea.className = "calendar-content-area";

  // Function to render active month details
  function updateCalendarContent(monthName) {
    const data = calendarData.find(item => item.month === monthName);
    if (!data) return;

    contentArea.innerHTML = `
      <div class="calendar-month-details animate-fade">
        <h3 class="calendar-month-title">${data.month}</h3>
        
        <div class="calendar-categories-grid">
          <div class="calendar-category-card fruits-card">
            <div class="category-header">
              <span class="category-icon">🍎</span>
              <h4>Frutas</h4>
            </div>
            <ul class="category-items">
              ${data.fruits.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          
          <div class="calendar-category-card legumes-card">
            <div class="category-header">
              <span class="category-icon">🥕</span>
              <h4>Legumes</h4>
            </div>
            <ul class="category-items">
              ${data.legumes.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          
          <div class="calendar-category-card greens-card">
            <div class="category-header">
              <span class="category-icon">🥬</span>
              <h4>Verduras & Temperos</h4>
            </div>
            <ul class="category-items">
              ${data.greens.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="calendar-disclaimer">
          <p>⚠️ <strong>Aviso Importante:</strong> A disponibilidade real dos produtos pode variar de acordo com o estoque diário, clima e safra. Fale conosco no WhatsApp para confirmar o que temos colhido hoje!</p>
        </div>
      </div>
    `;
  }

  calendarData.forEach((monthItem) => {
    const tabItem = document.createElement("li");
    tabItem.className = `calendar-tab-item ${monthItem.month === activeMonth ? "active" : ""}`;
    tabItem.textContent = monthItem.month.substring(0, 3); // "Jan", "Fev"...
    tabItem.setAttribute("title", monthItem.month);

    tabItem.onclick = () => {
      // Remove active from other items
      navContainer.querySelectorAll(".calendar-tab-item").forEach(item => {
        item.classList.remove("active");
      });
      tabItem.classList.add("active");
      activeMonth = monthItem.month;
      updateCalendarContent(activeMonth);
    };

    tabsList.appendChild(tabItem);
  });

  navContainer.appendChild(tabsList);
  sectionWrapper.appendChild(navContainer);
  sectionWrapper.appendChild(contentArea);

  container.appendChild(sectionWrapper);

  // Initialize display
  updateCalendarContent(activeMonth);
}
