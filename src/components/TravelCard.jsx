import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

export default function TravelCard({
  name,
  country,
  imageUrl,
  googleMapsUrl,
  description,
  mustDo,
  bestSeason,
  userRating,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <article className="travel-card">
        <img
          src={imageUrl}
          alt={`View of ${name}`}
          className="travel-image"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="travel-info">
          <h2>
            {name}, {country}
          </h2>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-link"
          >
            <span className="location-icon">📍</span> View on Google Maps
          </a>
          <p className="description">{description}</p>

          <h3>Must Do</h3>
          <ul>
            {mustDo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p>
            <strong>Best Season:</strong> {bestSeason}
          </p>
          <p>
            <strong>User Rating:</strong>{' '}
            <StarRating rating={userRating}/>
          </p>
        </div>
      </article>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <img
            src={imageUrl}
            alt={`Full view of ${name}`}
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
