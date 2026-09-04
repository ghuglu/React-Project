import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WebTech Practice</div>

      <div className="nav-links">
        <Link to="/">About</Link>
        <a href="#services">Services</a>
        <a href="#theme">Theme</a>
        <Link to="/login">Login</Link>
        <Link to="/register" className="signup-btn">
          SignUp
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;