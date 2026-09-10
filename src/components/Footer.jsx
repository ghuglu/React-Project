import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ handleScroll,styles }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerLeft}>© 2025 WebTech Practice. Built for learning and growth.</div>
      <div style={styles.footerRight}>
        <span onClick={() => handleScroll('about')} style={styles.footBtn}>About</span>
        <span onClick={() => handleScroll('services')} style={styles.footBtn}>Services</span>
        <Link to="/theme" style={styles.footBtn}>Theme</Link>
        <Link to="/login" style={styles.footBtn}>Login</Link>
        <Link to="/register" style={styles.footBtnSignup}>Sign Up</Link>
      </div>
    </footer>
  );
}
export default Footer;