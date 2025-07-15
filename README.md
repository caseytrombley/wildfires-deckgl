# 🌍 Wildfire Tracker (GPU-Accelerated with deck.gl)

This is a **React-based web application** that visualizes real-time wildfire data from [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/) using **deck.gl** and **WebGL**-accelerated rendering.

It leverages modern geospatial rendering tools and GPU acceleration to smoothly handle large-scale GeoJSON datasets (100k+ features) that would otherwise bog down traditional JavaScript rendering.

## 🔥 How It Works

- **deck.gl** is a powerful WebGL framework that renders layers like points and tiles directly to the GPU, bypassing DOM bottlenecks and achieving high performance.
- **GeoJsonLayer** is used to visualize wildfire points from a large `.geojson` file, sized by fire radiative power (FRP).
- **TileLayer** + **BitmapLayer** render **OpenStreetMap raster tiles** as a lightweight open-source base map.
- **React** manages state and reactivity, fetching updated wildfire data at regular intervals.
- Designed to be scalable and performant on modern browsers even with **100,000+ active fire detections**.

## 🧱 Tech Stack

- `React` – UI rendering
- `deck.gl` – GPU-powered visualization layers
- `@deck.gl/geo-layers`, `@deck.gl/layers` – for tile and geojson support
- `OpenStreetMap` – raster tile base map
- `NASA FIRMS` – wildfire GeoJSON data source

## 🚀 Quick Start

### 1. Clone and install dependencies

```bash
    git clone https://github.com/yourusername/wildfire-tracker.git
    cd wildfire-tracker
    npm install
```


### 2. Add wildfire data
Place your wildfires.geojson file inside the public/data/ directory:

```aiignore
public/
└── data/
    └── wildfires.geojson
```

You can download current fire data from NASA's FIRMS portal.

### 3. Start the app

```bash
    npm start
```
Runs the app in development mode. Open http://localhost:3000 in your browser.


## 📦 Built With Create React App
All the original CRA scripts are still available:

`npm start` – Development server

`npm run build` – Production build

`npm test` – Run tests

`npm run eject` – Eject CRA config (optional)

## 📚 Learn More

- [deck.gl documentation](https://deck.gl)
- [NASA FIRMS Data](https://firms.modaps.eosdis.nasa.gov/)
- [OpenStreetMap tile usage policy](https://operations.osmfoundation.org/policies/tiles/)


## 🧠 Why deck.gl?
Traditional libraries like Leaflet or D3 struggle with tens of thousands of features in the browser. By using deck.gl’s GPU-powered rendering pipeline, we bypass canvas/DOM performance limits and render huge datasets smoothly, even during zooming and panning.

## ⚠️ Notes
The app assumes the wildfire GeoJSON is already projected in WGS84 (lat/lon).

For heavy usage or deployments, consider hosting tiles on your own tile server to avoid rate limiting.

