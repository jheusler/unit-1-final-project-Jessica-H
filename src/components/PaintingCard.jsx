import { useState } from "react";

function PaintingCard({ painting, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="painting-card">
      <button
        type="button"
        className="painting-image-button"
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
      </button>

      <div className="painting-card-body">
        <h3>{painting.title}</h3>
        <p className="painting-medium">{painting.medium}</p>
        <p className="painting-description">{painting.description}</p>
      </div>
    </article>
  );
}

export default PaintingCard;
