import Gallery from "./Gallery.jsx";

function Home({ paintings }) {
  return (
    <section>
      <h1>Original Watercolor Paintings</h1>
      <p className="gallery-intro">
        Welcome to my gallery of original watercolor paintings. Browse the
        collection below and click any image for a closer look.
      </p>

      <Gallery paintings={paintings} />
    </section>
  );
}

export default Home;
