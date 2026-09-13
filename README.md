# 🌤️ WeatherJS

A modern and responsive **weather dashboard** built with Vanilla JavaScript, Tailwind CSS, Axios, and WeatherAPI.

WeatherJS fetches real-time weather information for searched cities and presents it through a clean, glassmorphism-inspired interface with dynamic weather visuals.

## 🌐 Live Demo

**[View WeatherJS](https://harshit-weatherjs.netlify.app/)**

## ✨ Features

* 🌍 Search weather by city
* 🌡️ Real-time temperature information
* 🌦️ Dynamic weather icons
* 🌙 Day/Night detection
* 🌧️ Rain detection
* 💧 Humidity information
* 💨 Wind information
* 🔄 Real-time API data
* 📱 Responsive design
* 🪟 Glassmorphism-inspired UI
* ⚡ Fast and lightweight frontend

## 🛠️ Tech Stack

* **HTML5** — Page structure
* **CSS / Tailwind CSS** — Styling and responsive design
* **JavaScript** — Application logic and DOM manipulation
* **Axios** — HTTP requests
* **WeatherAPI** — Real-time weather data

The repository uses `app.js`, `index.html`, `tailwind.config.js`, and an `assets` directory.

## 🔌 Weather API

WeatherJS uses **WeatherAPI** to retrieve current weather information.

The application sends a city search to the weather API and dynamically updates the interface based on the returned weather data.

## 🔄 How It Works

```text
User enters a city
        ↓
JavaScript captures the search
        ↓
Axios sends API request
        ↓
WeatherAPI returns weather data
        ↓
Data is processed
        ↓
UI updates dynamically
```

## 🎨 UI

The interface is designed around a clean, modern **glassmorphism-inspired aesthetic**, with weather conditions influencing the displayed visual information.

The application dynamically responds to conditions such as:

* ☀️ Day
* 🌙 Night
* 🌧️ Rain
* 🌤️ Other weather conditions

## 📂 Project Structure

```text
WeatherJS/
│
├── assets/
│   └── images, icons and other assets
│
├── app.js
├── index.html
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harshitbs123/WeatherJS.git
```

### 2. Navigate to the project

```bash
cd WeatherJS
```

### 3. Open the project

You can
