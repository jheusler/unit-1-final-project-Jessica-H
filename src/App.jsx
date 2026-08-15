import { Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import paintings from "./data/paintings.js";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Gallery</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Gallery paintings={paintings} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
