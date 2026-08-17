import { Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About.jsx";
import AddPaintingForm from "./components/AddPaintingForm.jsx";
import Gallery from "./components/Gallery.jsx";
import { useState } from "react";
import initialPaintings from "./data/paintings.js";

function App() {
  const [paintings, setPaintings] = useState(initialPaintings);

  function addPainting(newPainting) {
    setPaintings((currentPaintings) => [...currentPaintings, newPainting]);
  }

  function deletePainting(id) {
    setPaintings((currentPaintings) =>
      currentPaintings.filter((painting) => painting.id !== id),
    );
  }

  return (
    <>
      <nav>
        <Link to="/">Gallery</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/add">Add Painting</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Gallery paintings={paintings} onDeletePainting={deletePainting} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/add"
          element={<AddPaintingForm onAddPainting={addPainting} />}
        />
      </Routes>
    </>
  );
}

export default App;
