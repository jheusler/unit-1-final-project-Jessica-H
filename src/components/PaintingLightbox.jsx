import { useState } from "react";

function PaintingLightbox({ painting, onPrevious, onNext, onClose }) {
  const [failedImage, setFailedImage] = useState("");
  const imageFailed = failedImage === painting.image;

  return (
    <div className="lightbox-overlay">
      <section className="lightbox">
        <div className="lightbox-image-wrapper">
          {imageFailed ? (
            <p className="missing-image-message">Image not available</p>
          ) : (
            <img
              className="lightbox-image"
              src={painting.image}
              alt={painting.alt}
              onError={() => setFailedImage(painting.image)}
            />
          )}
        </div>

        <h2>{painting.title}</h2>
        <p className="painting-medium">{painting.medium}</p>
        <p className="painting-description">{painting.description}</p>

        <div className="lightbox-actions">
          <button type="button" onClick={onPrevious}>
            Previous
          </button>

          <button type="button" onClick={onNext}>
            Next
          </button>

          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}

export default PaintingLightbox;
