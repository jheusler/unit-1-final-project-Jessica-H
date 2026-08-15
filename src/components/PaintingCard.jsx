function PaintingCard({ painting }) {
  return (
    <article>
      <h3>{painting.title}</h3>
      <p>{painting.medium}</p>
      <p>{painting.description}</p>
    </article>
  );
}

export default PaintingCard;
