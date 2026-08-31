function Footer({setPage}) {
  return (
    <footer className="footer">
      <p>© 2025 WebTech Practice. Built for learning and growth.</p>

     <div className="footer-links">
        <button onClick={() => setPage("home")}>About</button>
        <button>Services</button>
        <button>Theme</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>SignUp</button>
      </div>
    </footer>
  );
}

export default Footer;