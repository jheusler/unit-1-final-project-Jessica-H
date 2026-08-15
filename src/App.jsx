import "./App.css";
import Gallery from "./components/Gallery.jsx";
import paintings from "./data/paintings.js";

function App() {
  return <Gallery paintings={paintings} />;
}

export default App;
