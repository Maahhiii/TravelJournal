import React from "react";
import TravelCard from "./components/TravelCard";
import travelData from "./data/travelData";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Travel Explorer Journal</h1>
        <p>Discover places, plan trips, and explore with ease</p>
      </header>

      <section className="travel-list">
        {travelData.map((location) => (
          <TravelCard key={location.id} {...location} />
        ))}
      </section>

      <footer className="app-footer">
        <small>© 2025 Travel Explorer Journal by Mahi</small>
      </footer>
    </div>
  );
}
