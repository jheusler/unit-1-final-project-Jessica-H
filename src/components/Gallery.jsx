import { useState } from "react";
import PaintingCard from "./PaintingCard.jsx";
import PaintingLightbox from "./PaintingLightbox.jsx";

function Gallery({ paintings }) {
  // Index of the painting open in the lightbox; null means the lightbox is closed
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPainting = paintings[selectedIndex];

  function openPainting(index) {
    setSelectedIndex(index);
  }

  function closePainting() {
    setSelectedIndex(null);
  }

  // Wraps to the last painting when moving back from the first
  function showPreviousPainting() {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? paintings.length - 1 : currentIndex - 1,
    );
  }

  // Wraps to the first painting when moving past the last
  function showNextPainting() {
    setSelectedIndex((currentIndex) =>
      currentIndex === paintings.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <section>
      <h2>Painting Gallery</h2>

      {paintings.length === 0 ? (
        <p>No paintings are currently available.</p>
      ) : (
        <ul className="gallery-grid">
          {paintings.map((painting, index) => (
            <li key={painting.id}>
              <PaintingCard
                painting={painting}
                onSelect={() => openPainting(index)}
              />
            </li>
          ))}
        </ul>
      )}

      {selectedPainting && (
        <PaintingLightbox
          painting={selectedPainting}
          onPrevious={showPreviousPainting}
          onNext={showNextPainting}
          onClose={closePainting}
        />
      )}
    </section>
  );
}

export default Gallery;
