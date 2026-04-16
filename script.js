// ===============================
// UTIL: Time Formatting
// ===============================
function getTimeRemainingText(dueDate) {
  const diffMs = dueDate - new Date();

  if (diffMs < 0) {
    const abs = Math.abs(diffMs);
    const days = Math.floor(abs / 86400000);
    const hours = Math.floor(abs / 3600000);
    const minutes = Math.floor(abs / 60000);

    if (days > 1) return `Overdue by ${days} days`;
    if (days === 1) return "Overdue by 1 day";
    if (hours > 0) return `Overdue by ${hours} hours`;
    if (minutes > 0) return `Overdue by ${minutes} minutes`;
    return "Overdue now!";
  }

  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor(diffMs / 3600000);
  const minutes = Math.floor(diffMs / 60000);

  if (days > 1) return `Due in ${days} days`;
  if (days === 1) return "Due tomorrow";
  if (hours > 0) return `Due in ${hours} hours`;
  if (minutes > 0) return `Due in ${minutes} minutes`;
  return "Due now!";
}

// ===============================
// COMPONENT: Task Card
// ===============================
function initTaskCard(card) {
  if (!card) return;

  // Scoped selector helper
  const $ = (sel) => card.querySelector(sel);

  const checkbox = $(".task-toggle");
  const title = $(".task-title");
  const status = $(".status");
  const statusText = $(".status-text");
  const statusIcon = $(".status-icon");
  const deadlineEl = $(".deadline");
  const timeRemEl = $(".time-rem");
  const editBtn = $(".btn-edit");
  const deleteBtn = $(".btn-del");

  // Guard required elements
  if (!(checkbox && title && status && statusText && statusIcon)) return;

  // ===============================
  // STATE RENDER FUNCTION
  // ===============================
  function renderState(isDone) {
    // Title
    title.classList.toggle("completed", isDone);

    // Status text
    statusText.textContent = isDone ? "Done" : "In Progress";
    statusText.classList.toggle("done", isDone);

    // Status container (for styling if needed)
    status.classList.toggle("done", isDone);

    // Accessibility update
    status.setAttribute(
      "aria-label",
      `Task status: ${isDone ? "done" : "in-progress"}`
    );

    // Icon swap
    statusIcon.classList.remove("ri-progress-5-line", "ri-progress-8-line");
    statusIcon.classList.add(
      isDone ? "ri-progress-8-line" : "ri-progress-5-line"
    );

    statusIcon.classList.toggle("done", isDone);
    checkbox.setAttribute("aria-checked", isDone);
  }

  // ===============================
  // TIME UPDATE FUNCTION
  // ===============================
  function updateTime() {
    if (!(deadlineEl && timeRemEl)) return;

    const dueDateAttr = deadlineEl.getAttribute("datetime");
    if (!dueDateAttr) return;

    const dueDate = new Date(dueDateAttr);
    const text = getTimeRemainingText(dueDate);

    timeRemEl.textContent = text;
  }

  // ===============================
  // EVENT LISTENERS
  // ===============================
  checkbox.addEventListener("change", () => {
    renderState(checkbox.checked);
  });

  editBtn?.addEventListener("click", () => {
    console.log("edit clicked");
  });

  deleteBtn?.addEventListener("click", () => {
    alert("Delete clicked");
  });

  // ===============================
  // INITIALIZE
  // ===============================
  renderState(checkbox.checked); // sync initial state
  updateTime();                  // initial time

  // Update every 60s
  const intervalId = setInterval(updateTime, 60000);

  // Optional cleanup (future-proof)
  return () => clearInterval(intervalId);
}

// ===============================
// INIT ALL CARDS
// ===============================
function initAllTaskCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(initTaskCard);
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", initAllTaskCards);
