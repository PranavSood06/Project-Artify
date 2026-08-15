# 🎨 Artify — Image Gallery & Explorer

Artify is a responsive, interactive image gallery application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Axios**, powered by the **Pexels API**.

> 💡 **Learning Context**  
> Artify was created as a hands-on beginner project to understand and practice core React fundamentals, state management, API integration, and lifecycle hooks. Rather than a complex production system, it stands as an honest representation of foundational frontend development concepts in action.

---

## 🌐 Live Demo

🚀 **[View Artify Live](https://artify-explorer.netlify.app/)**

---
## ✨ Features

- **🔍 Image Search**: Search for high-quality photos on demand via the Pexels API.
- **🖼️ Responsive Gallery Grid**: Clean grid layout for displaying search results across screen sizes.
- **🔗 External View**: Click any image card to open the original photo page on Pexels in a new tab.
- **🔀 Dual Browsing Modes**:
  - **Pagination Mode**: Navigate sequentially through photo pages using **Prev** and **Next** controls.
  - **Infinite Scroll Mode**: Automatically fetch and append more photos as you scroll near the bottom of the page.
- **⏳ Loading States**: Displays a visual loading spinner while new images are being fetched.
- **🧩 Reusable UI Components**: Built using modular React components (`Navbar`, `SearchBar`, `Card`, `Pagination`, `InfiniteScroll`, `Spin`, `Btn`).

---

## 🧠 Concepts & Key Learnings

Building Artify provided practical experience with key React & frontend concepts:

1. **State Management (`useState`)**: Managing search queries, current page numbers, photo data arrays, loading flags, and browsing mode toggles.
2. **Side Effects & Data Fetching (`useEffect` & Axios)**: Asynchronously fetching data from external REST APIs whenever search parameters or page numbers update.
3. **DOM Event Listeners & Cleanup**: Attaching a window `scroll` listener to detect scroll thresholds for infinite loading and properly cleaning it up on unmount.
4. **Conditional Rendering**: Dynamically switching between Pagination controls and Infinite Scroll behaviors based on user preferences.
5. **Component Decomposition & Props**: Structuring the UI into reusable sub-components and passing handlers and state downward.
6. **Environment Variable Security**: Storing API credentials safely in `.env` files using Vite's `import.meta.env`.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **API Provider**: [Pexels API](https://www.pexels.com/api/)

---

## 📁 Project Structure

```text
Gallery/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Button/
│   │   │   └── Btn.jsx           # Reusable styled button component
│   │   ├── Card/
│   │   │   ├── Card.jsx          # Individual photo card with external link click handler
│   │   │   └── Card_Section.jsx  # Grid wrapper rendering cards list
│   │   ├── Infinite Scroll/
│   │   │   └── InfiniteScroll.jsx # Window scroll detection logic
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx        # Top navbar with Pagination / Infinite Scroll toggle
│   │   ├── Pages/
│   │   │   └── Pagination.jsx    # Page navigation controls (Prev / Page Number / Next)
│   │   ├── SearchBar/
│   │   │   └── SearchBar.jsx     # Search input form
│   │   ├── Section_1/
│   │   │   └── Section_1.jsx     # Main container managing state, side effects & API calls
│   │   └── Spinner/
│   │       └── Spin.jsx          # Loading spinner UI indicator
│   ├── App.jsx                   # Root application component
│   ├── index.css                 # Global CSS & Tailwind imports
│   └── main.jsx                  # Application entry point
├── .env                          # Environment variables (API Keys)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running on your machine.

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Artify.git
cd Artify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

1. Sign up for a free API key at [Pexels API](https://www.pexels.com/api/).
2. Create a `.env` file in the root directory of the project:

```env
VITE_PIXELS_API_KEY=your_pexels_api_key_here
```

> **Note**: In Vite projects, environment variables accessible on the client side must start with the `VITE_` prefix.

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
```

You can test the production build locally using:

```bash
npm run preview
```

---

## 🔮 Future Enhancements & Ideas

- [ ] Add search debouncing to reduce API request frequency.
- [ ] Implement an in-app lightbox modal for full-screen image viewing.
- [ ] Display friendly error messages when API rate limits or network issues occur.
- [ ] Allow users to save favorite images to local storage.


