import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
       <span style={{ color: "black", fontWeight: "bold" }}>Tracktern</span> AI
      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/login" className="nav-link2">
          Login
        </Link>

        <Link to="/register" className="nav-link2">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;