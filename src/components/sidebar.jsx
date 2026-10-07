import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getStyles } from "../theme/OverviewStyle";
import { ThemeContext } from "../theme/themeContext";

function Sidebar({ navItems, user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <aside style={styles.sidebar}>
      <div style={styles.profile}>
        <div style={styles.avatar}>{user.initials}</div>
        <div>
          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userEmail}>{user.email}</p>
        </div>
      </div>

      <nav style={styles.menu}>
        <h4 style={styles.menuTitle}>DASHBOARD</h4>
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
        <h4 style={styles.menuTitle}>QUICK ACTION</h4>
        <Link to="/help" style={
          location.pathname === "/help"
          ?styles.activeLink
          :styles.navLink
        }>
          Help & Support
        </Link>
        </div>
       
       <div style={styles.quickActionMenu}>
        <Link to="/account" style={
               location.pathname === "/account"
               ?styles.activeLink
               :styles.accountLink}>
          Account
        </Link>

        <div onClick ={handleSignOut}>
          Sign Out
        </div>
        </div>



               </aside>
  );
}

export default Sidebar;