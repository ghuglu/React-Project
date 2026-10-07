import React, { useContext } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import SecurityForm from "../forms/SecurityForm";
import { ThemeContext } from "../theme/themecontext";
import { getStyles as getOverviewStyles } from "../theme/OverviewStyle";
import { getStyles as getSecurityStyles } from "../theme/SecurityStyle";

function Security() {

  const theme = useContext(ThemeContext);

  const overviewStyles = getOverviewStyles(theme);
  const securityStyles = getSecurityStyles(theme);

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    window.location.href = "/login";
    return null;
  }

  const user = {
    initials:
      (currentUser.firstName?.charAt(0) || "") +
      (currentUser.lastName?.charAt(0) || ""),

    name:
      `${currentUser.firstName || ""} ${
        currentUser.lastName || ""
      }`.trim(),

    email: currentUser.email || "",
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
    },
  ];

  return (
    <div style={overviewStyles.dashboard}>

      <Sidebar
        navItems={navItems}
        styles={overviewStyles}
        user={user}
      />

      <div style={overviewStyles.main}>

        <Topbar
          title="WebTech Practice Dashboard"
          styles={overviewStyles}
          user={user}
        />

        <main style={securityStyles.content}>

          <div style={securityStyles.securityContainer}>

            <div style={securityStyles.securityCard}>

              <h2 style={securityStyles.informationTitle}>
                Security Settings
              </h2>

              <p
                style={{
                  ...securityStyles.securityDescription,
                  marginBottom: "20px",
                }}
              >
                Keep your account secure by using a strong
                password and changing it regularly.
              </p>

              <SecurityForm styles={securityStyles} />

              <div style={securityStyles.securityInfo}>

              <h4 style={securityStyles.securityInfoTitle}>
                  Security Information
                </h4>

                <div style={securityStyles.infoRow}>

                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>

                    <h5 style={securityStyles.infoTitle}>
                      Account Created
                    </h5>

                    <p style={securityStyles.infoText}>
                      {currentUser.createdAt || "Not available"}
                    </p>
                  </div>

                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>

                    <h5 style={securityStyles.infoTitle}>
                      Last Updated
                    </h5>

                    <p style={securityStyles.infoText}>
                      {currentUser.passwordUpdatedAt ||
                        "Never updated"}
                    </p>
                  </div>

                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>

                    <h5 style={securityStyles.infoTitle}>
                      Session
                    </h5>

                    <p style={securityStyles.infoText}>
                      Current browser session active
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Security;