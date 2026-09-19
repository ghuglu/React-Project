import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { ThemeContext } from "../theme/themeContext";
import { getStyles } from "../theme/OverviewStyle";

function Dashboard() {

  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  const navigate = useNavigate();

  const user = {
    initials: "DU",
    name: "Demo User",
    email: "demo@webtech.practice"
  };

  const navItems = [
    {
      label: "Overview",
      path: "/dashboard"
    },
    {
      label: "Profile Settings",
      path: "/profile"
    },
    {
      label: "Security",
      path: "/security"
    },
    {
      label: "Notification",
      path: "/notification"
    }
  ];

  const cards = [
    {
      title: "Theme",
      description: "Dark/light mode persisted across all pages"
    },
    {
      title: "Authentication",
      description: "Secure session stored in browser storage"
    },
    {
      title: "Profile",
      description: "20% profile completed (1/5 fields)"
    },
    {
      title: "Security",
      description: "Password protection and account security"
    }
  ];

  const actions = [
    {
      title: "Edit Profile",
      description: "Update your personal information",
      path: "/profile"
    },
    {
      title: "Change Password",
      description: "Update your account security",
      path: "/security"
    }
  ];

  return (
    <div style={styles.dashboard}>

      <Sidebar
        navItems={navItems}
        styles={styles}
        user={user}
      />

      <div style={styles.main}>

        <Topbar
          title="WebTech Practice Dashboard"
          styles={styles}
        />

        <main style={styles.content}>

          <section style={styles.welcomeBox}>

            <h2 style={styles.welcomeTitle}>
              Welcome back, {user.name}
            </h2>

            <p style={styles.description}>
              Manage your profile settings and account preferences.
              Your data is securely stored in your browser's localStorage.
            </p>

            <div style={styles.cards}>

              {cards.map((card, index) => (
                <div
                  key={index}
                  style={styles.card}
                >
                  <h3 style={styles.cardTitle}>
                    {card.title}
                  </h3>

                  <p style={styles.cardText}>
                    {card.description}
                  </p>

                  <div style={styles.cardLine}></div>
                </div>
              ))}

            </div>

            <h3 style={styles.quickTitle}>
              Quick Actions
            </h3>

            <div style={styles.actions}>

              {actions.map((action, index) => (
                <div
                  key={index}
                  onClick={() => navigate(action.path)}
                  style={styles.actionCard}
                >
                  <h3 style={styles.actionTitle}>
                    {action.title}
                  </h3>

                  <p style={styles.actionText}>
                    {action.description}
                  </p>
                </div>
              ))}

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;