import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <img
            src={logo}
            alt="Dr O.O. Oduntan Medical Practice"
            className="logo-image"
        />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

        <Link to="/services#contact" onClick={() => setMenuOpen(false)}>
        Contact
        </Link>
        </nav>

        <a href="tel:" className="nav-phone">
          <Phone size={18} />
          <span>Contact Us</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;