import React, { useContext } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { ThemeContext } from "../theme/themeContext";
import { getStyles as getOverviewStyles } from "../theme/OverviewStyle";
import { getStyles as getProfileStyles } from "../theme/ProfileStyle";

function Profile() {
  const context = useContext(ThemeContext);
  const theme = context?.theme || context;

  const overviewStyles = getOverviewStyles(theme);
  const profileStyles = getProfileStyles(theme);

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
    { label: "Overview", path: "/dashboard" },
    { label: "Profile Settings", path: "/profile" },
    { label: "Security", path: "/security" },
    { label: "Notification", path: "/notification" },
  ];

  return (
    <div style={overviewStyles.dashboard}>

      <div style={overviewStyles.sidebar}>
        <Sidebar
          navItems={navItems}
          styles={overviewStyles}
          user={user}
        />
      </div>

      <div style={overviewStyles.main}>

             <div style={overviewStyles.topbar}>
          <Topbar
            styles={overviewStyles}
            user={user}
          />
        </div>

        <main
          style={{
            ...profileStyles.mainContent,
            marginTop: "24px",
            padding: "0 32px 32px 32px",
          }}
        >

          <div style={profileStyles.profileCard}>

            <h1 style={profileStyles.title}>
              Profile Settings
            </h1>

            <h2 style={profileStyles.sectionTitle}>
              Personal Information
            </h2>

            <div style={profileStyles.formGrid}>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Full Name
                </label>

                <input
                  type="text"
                  value={user.name}
                  readOnly
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Date of Birth
                </label>

                <input
                  type="date"
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Email Address
                </label>

                <input
                  type="email"
                  value={user.email}
                  readOnly
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  style={profileStyles.input}
                />
              </div>

            </div>

            <h2 style={profileStyles.sectionTitle}>
              Address Information
            </h2>

            <div style={profileStyles.formGroup}>
              <label style={profileStyles.label}>
                Street Address
              </label>

              <textarea
                placeholder="Enter Your Complete Address"
                style={profileStyles.textarea}
              />
            </div>

            <div style={profileStyles.formGrid}>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Pin Code
                </label>

                <input
                  type="number"
                  placeholder="123456"
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  City
                </label>

                <input
                  type="text"
                  placeholder="Ranchi"
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  Country
                </label>

                <input
                  type="text"
                  placeholder="India"
                  style={profileStyles.input}
                />
              </div>

              <div style={profileStyles.formGroup}>
                <label style={profileStyles.label}>
                  GitHub Profile
                </label>

                <input
                  type="url"
                  placeholder="https://github.com/username"
                  style={profileStyles.input}
                />
              </div>

            </div>

            <div style={profileStyles.actions}>

              <button
                type="button"
                style={profileStyles.cancelButton}
              >
                Cancel Changes
              </button>

              <button
                type="button"
                style={profileStyles.saveButton}
              >
                Save Changes
              </button>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Profile;