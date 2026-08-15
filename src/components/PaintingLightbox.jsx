function PaintingLightbox({ painting, onPrevious, onNext, onClose }) {
  return (
    <section>
      <h2>{painting.title}</h2>
      <p>{painting.medium}</p>
      <p>{painting.description}</p>

      <button type="button" onClick={onPrevious}>
        Previous
      </button>

      <button type="button" onClick={onNext}>
        Next
      </button>

      <button type="button" onClick={onClose}>
        Close
      </button>
    </section>
  );
}

export default PaintingLightbox;
