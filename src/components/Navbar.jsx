import React from "react";
function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <h2>WebTech Practice</h2>

      <div>
        <button>About</button>
        <button>Services</button>
        <button>Theme</button>

        <button onClick={() => setPage("login")}>Login</button>

        <button onClick={() => setPage("register")} className="signup-btn">SignUp</button>
      </div>
    </div>
  );
}

export default Navbar;