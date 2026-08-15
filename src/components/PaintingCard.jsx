function PaintingCard({ painting, onSelect }) {
  return (
    <article>
      <h3>{painting.title}</h3>
      <p>{painting.medium}</p>
      <p>{painting.description}</p>
      <button type="button" onClick={onSelect}>
        View Painting
      </button>
    </article>
  );
}

export default PaintingCard;
