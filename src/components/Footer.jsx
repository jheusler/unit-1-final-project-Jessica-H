import { Link } from "react-router";

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Jessica Heusler. All rights reserved.</p>
      <nav>
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/add">Add Painting</Link>
        {" | "}
        <Link to="/manage">Manage Gallery</Link>
      </nav>
    </footer>
  );
}

export default Footer;
