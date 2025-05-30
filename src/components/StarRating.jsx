import React from 'react';

export default function StarRating({ rating = 0, maxStars = 5 }) {
  // Round rating to nearest half for nicer display (optional)
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of ${maxStars} stars`} role="img" style={{ display: 'inline-flex' }}>
      {[...Array(maxStars)].map((_, i) => {
        const starValue = i + 1;

        let starType;
        if (starValue <= roundedRating) {
          starType = 'full';
        } else if (starValue - 0.5 === roundedRating) {
          starType = 'half';
        } else {
          starType = 'empty';
        }

        return (
          <svg
            key={starValue}
            height="24"
            width="24"
            viewBox="0 0 24 24"
            fill={starType === 'full' ? '#f5b50a' : starType === 'half' ? 'url(#half-grad)' : '#ccc'}
            stroke="#c59d07"
            strokeWidth="1"
            style={{ marginRight: 4 }}
          >
            <defs>
              <linearGradient id="half-grad">
                <stop offset="50%" stopColor="#f5b50a" />
                <stop offset="50%" stopColor="#ccc" />
              </linearGradient>
            </defs>
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
}
