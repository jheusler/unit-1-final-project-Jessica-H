import { useState } from "react";
import PaintingCard from "./PaintingCard.jsx";
import PaintingLightbox from "./PaintingLightbox.jsx";

function Gallery({ paintings, onDeletePainting }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPainting = paintings[selectedIndex];

  function openPainting(index) {
    setSelectedIndex(index);
  }

  function closePainting() {
    setSelectedIndex(null);
  }

  function showPreviousPainting() {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? paintings.length - 1 : currentIndex - 1,
    );
  }

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
        paintings.map((painting, index) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            onSelect={() => openPainting(index)}
            onDelete={() => onDeletePainting(painting.id)}
          />
        ))
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
