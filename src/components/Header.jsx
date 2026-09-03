import { Link } from "react-router";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">
        Jessica Heusler Watercolors
      </Link>

      <nav>
        <Link to="/">Gallery</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/add">Add Painting</Link>
        {" | "}
        <Link to="/manage">Manage Gallery</Link>
      </nav>
    </header>
  );
}

export default Header;
