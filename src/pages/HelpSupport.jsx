import React, { useContext } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { ThemeContext } from "../theme/themeContext";
import { getStyles as getOverviewStyles } from "../theme/OverviewStyle";
import { getStyles as getHelpStyles } from "../theme/HelpStyle";

function HelpSupport() {
  const theme = useContext(ThemeContext);
  const overviewStyles = getOverviewStyles(theme);
  const helpStyles = getHelpStyles(theme);

  const user = {
    initials: "DU",
    name: "Demo User",
    email: "demo@webtech.practice",
  };
  const navItems = [
    { label: "Overview", path: "/dashboard" },
    { label: "Profile Settings", path: "/profile" },
    { label: "Security", path: "/security" },
    { label: "Notification", path: "/notification" },
  ];

  return (
    <div style={overviewStyles.dashboard}>
      <Sidebar navItems={navItems} styles={overviewStyles} user={user} />
      <div style={overviewStyles.main}>
        <Topbar title="WebTech Practice Dashboard" styles={overviewStyles} />
        <main style={helpStyles.content}>
          <div style={helpStyles.card}>
            <h2 style={helpStyles.heading}>Help & Support</h2>

            <div style={helpStyles.sectionHeader}>Frequently Asked Questions</div>

            <div style={helpStyles.faqItem}>
              <h3 style={helpStyles.faqTitle}>How do I update my profile?</h3>
              <p style={helpStyles.faqDesc}>Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.</p>
            </div>

            <div style={helpStyles.faqItem}>
              <h3 style={helpStyles.faqTitle}>Is my data secure?</h3>
              <p style={helpStyles.faqDesc}>This is a demo application that stores data in your browser's localStorage. In a production app, data would be encrypted and stored securely on servers.</p>
            </div>

            <div style={helpStyles.faqItem}>
              <h3 style={helpStyles.faqTitle}>How do I change my password?</h3>
              <p style={helpStyles.faqDesc}>Go to "Security" in the sidebar, enter your current password, then set and confirm your new password.</p>
            </div>

            <div style={helpStyles.contactHeader}>Contact Support</div>
            <p style={helpStyles.contactText}>
              This is a demonstration application for learning web development. In a real application, you would find contact information and support options here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HelpSupport;