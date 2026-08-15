import PaintingCard from "./PaintingCard.jsx";

function Gallery({ paintings }) {
  return (
    <section>
      <h2>Painting Gallery</h2>

      {paintings.map((painting) => (
        <PaintingCard key={painting.id} painting={painting} />
      ))}
    </section>
  );
}

export default Gallery;
