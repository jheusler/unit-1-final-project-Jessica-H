import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About.jsx";
import AddPaintingForm from "./components/AddPaintingForm.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ManageGallery from "./components/ManageGallery.jsx";
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
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home paintings={paintings} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/add"
            element={<AddPaintingForm onAddPainting={addPainting} />}
          />
          <Route
            path="/manage"
            element={
              <ManageGallery
                paintings={paintings}
                onDeletePainting={deletePainting}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
