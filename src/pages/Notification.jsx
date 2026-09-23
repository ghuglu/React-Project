import React, { useContext } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { ThemeContext } from "../theme/themeContext";
import { getStyles as getOverviewStyles } from "../theme/OverviewStyle";
import { getStyles as getNotificationStyles } from "../theme/NotificationStyle";

function Notification() {
  const theme = useContext(ThemeContext);
  const overviewStyles = getOverviewStyles(theme);
  const notificationStyles = getNotificationStyles(theme);

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

        <main style={notificationStyles.content}>
          <div style={notificationStyles.card}>
            
            <h2 style={notificationStyles.heading}>Notifications</h2>

            <div style={notificationStyles.prefHeader}>Notification Preferences</div>
            <p style={notificationStyles.text}>
              Manage how and when you receive notifications about your account activity.
            </p>

            <div style={notificationStyles.prefRow}>
              <div style={notificationStyles.prefBox}>
                <span style={notificationStyles.icon}></span>
                <h3 style={notificationStyles.boxTitle}>Email Notifications</h3>
                <p style={notificationStyles.boxDesc}>Receive important updates via email</p>
                <label style={notificationStyles.checkRow}>
                  <input type="checkbox" defaultChecked /> Enable email notifications
                </label>
              </div>

              <div style={notificationStyles.prefBox}>
                <span style={notificationStyles.icon}></span>
                <h3 style={notificationStyles.boxTitle}>Security Alerts</h3>
                <p style={notificationStyles.boxDesc}>Get notified about security changes</p>
                <label style={notificationStyles.checkRow}>
                  <input type="checkbox" defaultChecked /> Enable security alerts
                </label>
              </div>
            </div>

            <div style={notificationStyles.recentHeader}>Recent Activity</div>
            <div style={notificationStyles.notificationItem}>
              <h3 style={notificationStyles.activityTitle}>Profile Updated</h3>
              <p style={notificationStyles.activityDesc}>Your profile information was successfully updated</p>
              <span style={notificationStyles.activityTime}>Today</span>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Notification;