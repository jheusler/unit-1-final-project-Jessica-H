function PaintingCard({ painting, onSelect, onDelete }) {
  return (
    <article>
      <h3>{painting.title}</h3>
      <p>{painting.medium}</p>
      <p>{painting.description}</p>
      <button type="button" onClick={onSelect}>
        View Painting
      </button>
      <button type="button" onClick={onDelete}>
        Remove Painting
      </button>
    </article>
  );
}

export default PaintingCard;
