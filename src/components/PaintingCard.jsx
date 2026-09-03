import { useState } from "react";

function PaintingCard({ painting, onSelect }) {
  // Falls back to a text placeholder if the image URL fails to load
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="painting-card">
      <button
        type="button"
        className="painting-card-button"
        onClick={onSelect}
        aria-label={`View ${painting.title} larger`}
      >
        <div className="painting-image-wrapper">
          {imageFailed ? (
            <p className="missing-image-message">Image not available</p>
          ) : (
            <img
              className="painting-image"
              src={painting.image}
              alt={painting.alt}
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <h3 className="painting-title">{painting.title}</h3>
      </button>
    </article>
  );
}

export default PaintingCard;
