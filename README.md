# 🧩 Todo Task Card — Frontend Wizards Stage 0

A clean, accessible, and testable Todo Task Card built with **HTML, CSS, and Vanilla JavaScript**.

---

## 🚀 Live Demo

👉 **[[Live Demo](https://thatnadab.github.io/task-card/)]**

---

## 📂 Repository

👉 **[[Task Card Repo](https://github.com/thatnadab/task-card)]**

---

## 📌 Overview

This project implements a **responsive task card component** with strict focus on:

- `data-testid` based testability
- Accessibility (ARIA + semantic HTML)
- Responsive UI across devices

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/thatnadab/task-card.git
```

### 2. Open project folder

Navigate into the cloned directory.

### 3. Run in browser

Open `index.html` directly in any modern browser.

---

## ✨ Features

- ✅ Fully implemented `data-testid` attributes for testing
- ♿ Accessible checkbox (keyboard + screen reader support)
- ⏱ Dynamic time-remaining display (due / overdue states)
- 🔁 Status toggle (in progress → Done)
- 📱 Fully responsive layout (320px → 1200px)
- 🧱 Semantic and structured HTML markup

---

## 🏗 Tech Stack

| Technology           | Purpose                  |
| -------------------- | ------------------------ |
| HTML5                | Structure & semantics    |
| CSS3                 | Styling & responsiveness |
| JavaScript (Vanilla) | Interactivity & logic    |

---

## 🧠 Key Decisions

- **Vanilla JavaScript only** → Keeps focus on fundamentals and DOM manipulation
- **Centralized render function** → Ensures consistent UI state updates
- **Native checkbox input** → Leverages built-in accessibility features
- **Semantic HTML-first approach** → Improves structure and test compatibility

---

## ⚖️ Trade-offs

- ❌ No persistent state (resets on refresh)
- ❌ Single card implementation (scope-limited by design)
- ❌ Edit button is non-functional (placeholder behavior)
- ❌ Time updates every 60 seconds (not real-time precision)
- ❌ Simplified status model: Pending / Done only

---

## 📈 Future Improvements

- Support multiple task cards
- Add edit modal / inline editing
- Add localStorage persistence
- Integrate backend API support

---

## 👤 Author

**[[Abu Jehonadab Agbenugocho](https://github.com/thatnadab)]**
