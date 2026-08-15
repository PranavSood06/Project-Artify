# 🎨 Artify — Dynamic React Gallery & Image Explorer

> A modern, high-performance web application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Axios**, seamlessly integrated with the **Pexels API**. Explore high-resolution photography with dual navigation modes: **Pagination** & **Infinite Scroll**.

---

## 🌟 Key Features & Highlights

- ⚡ **Dual Browsing Experience**: Switch effortlessly between **Pagination Mode** and seamless **Infinite Scroll Mode** with a single click.
- 🔍 **Real-Time Dynamic Search**: Search millions of curated high-res photos from Pexels instantly.
- 📱 **Fully Responsive UI**: Mobile-first design crafted with Tailwind CSS v4 for clean, adaptive layouts across desktops, tablets, and smartphones.
- ✨ **Interactive Micro-Animations**: Smooth scale & transition effects on card hovers and button interactions for an engaging user experience.
- 🔗 **Direct High-Res Viewing**: Click any photo card to view the original source on Pexels in a new tab.
- 🔐 **Secure API Integration**: Environment variable protection (`VITE_PIXELS_API_KEY`) keeping sensitive credentials isolated.
- 🧩 **Modular Component Architecture**: Clean, reusable component design ([Navbar](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/Navbar/Navbar.jsx), [Card](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/Card/Card.jsx), [SearchBar](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/SearchBar/SearchBar.jsx), [Pagination](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/Pages/Pagination.jsx), [InfiniteScroll](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/Infinite%20Scroll/InfiniteScroll.jsx), [Spin](file:///c:/Users/Pranav%20Sood/OneDrive/Documents/Desktop/Work/React/Gallery/src/Components/Spinner/Spin.jsx)).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven UI framework with modern hooks (`useState`, `useEffect`) |
| **Vite 8** | Next-generation fast frontend build tool & dev server |
| **Tailwind CSS v4** | Utility-first CSS styling engine |
| **Axios** | Promise-based HTTP client for API requests |
| **Pexels API** | High-quality stock photography data provider |
| **ESLint** | Code quality and linting |

---

## 📁 Project Structure

```text
Gallery/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Project images and icons
│   ├── Components/
│   │   ├── Button/        # Reusable button component
│   │   ├── Card/          # Image card & grid container components
│   │   ├── Infinite Scroll/# Scroll listener for lazy loading
│   │   ├── Navbar/        # Fixed top navigation header with mode toggling
│   │   ├── Pages/         # Pagination controls
│   │   ├── SearchBar/     # Search input form
│   │   ├── Section_1/     # Main page logic & API data fetching pipeline
│   │   └── Spinner/       # Loading spinner component
│   ├── App.jsx            # Core application state wrapper
│   ├── main.jsx           # Vite application entry point
│   └── index.css          # Tailwind CSS configuration
├── .env                   # Local environment variable (API Key)
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Artify-Gallery.git
   cd Artify-Gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Pexels API key:
   ```env
   VITE_PIXELS_API_KEY=your_pexels_api_key_here
   ```
   *(You can get a free API key at [pexels.com/api](https://www.pexels.com/api/))*

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app!


