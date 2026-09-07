import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ handleScroll, navItems, styles }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WebTech Practice</div>
      <div style={styles.navLinks}>
        {navItems.map((item, i) => {
          if (item.type === 'scroll') {
            return (
              <span key={i} onClick={() => handleScroll(item.id)} style={styles.navLink}>
                {item.label}
              </span>
            );
          }
          return (
            <Link key={i} to={item.path} style={item.isButton ? styles.signupBtn : styles.navLink}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;