import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ navItems, styles, user }) {

  const location = useLocation();

  return (
    <aside style={styles.sidebar}>

      <div style={styles.profile}>

        <div style={styles.avatar}>
          {user.initials}
        </div>

        <div>
          <h3 style={styles.userName}>
            {user.name}
          </h3>

          <p style={styles.userEmail}>
            {user.email}
          </p>
        </div>

      </div>

      <nav style={styles.menu}>

        <h4 style={styles.menuTitle}>
          DASHBOARD
        </h4>

        {navItems.map((item, index) => (

          <Link
            key={index}
            to={item.path}
            style={
              location.pathname === item.path
                ? styles.activeLink
                : styles.navLink
            }
          >
            {item.label}
          </Link>

        ))}

      </nav>

      <div style={styles.bottomMenu}>

        <h4 style={styles.menuTitle}>
          QUICK ACTION
        </h4>

        <Link
          to="/help"
          style={styles.navLink}
        >
          Help & Support
        </Link>

        <Link
          to="/account"
          style={styles.navLink}
        >
          Account
        </Link>

        <Link
          to="/signin"
          style={styles.signOut}
        >
          Sign Out
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;