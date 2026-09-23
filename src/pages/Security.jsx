import React, { useContext, useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { ThemeContext } from "../theme/themeContext";
import { getStyles as getOverviewStyles } from "../theme/OverviewStyle";
import { getStyles as getSecurityStyles } from "../theme/SecurityStyle";

function Security() {
  const theme = useContext(ThemeContext);
  const overviewStyles = getOverviewStyles(theme);
  const securityStyles = getSecurityStyles(theme);
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });

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

        <main style={securityStyles.content}>
          <div style={securityStyles.securityContainer}>

            <div style={securityStyles.securityCard}>
              <h2 style={securityStyles.informationTitle}>Security Settings</h2>
              <p style={{...securityStyles.securityDescription, marginBottom: '20px'}}>
                Keep your account secure by using a strong password and changing it regularly.
              </p>

              <div style={securityStyles.formRow}>
                <div style={securityStyles.formGroup}>
                  <label style={securityStyles.label}>Current Password</label>
                  <input style={securityStyles.input} type="password" placeholder="Enter current password" value={form.current} onChange={e=>setForm({...form, current:e.target.value})} />
                </div>

                <div style={securityStyles.formGroup}>
                  <label style={securityStyles.label}>New Password</label>
                  <input style={securityStyles.input} type="password" placeholder="Minimum 8 characters" value={form.newPass} onChange={e=>setForm({...form, newPass:e.target.value})} />
                </div>
              </div>

              <div style={{...securityStyles.formGroup, maxWidth: '48%', marginBottom: '20px'}}>
                <label style={securityStyles.label}>Confirm New Password</label>
                <input style={securityStyles.input} type="password" placeholder="Re-enter new password" value={form.confirm} onChange={e=>setForm({...form, confirm:e.target.value})} />
              </div>

              <div style={securityStyles.actions}>
                <button style={securityStyles.clearButton} onClick={()=>setForm({current:"",newPass:"",confirm:""})}>Clear</button>
                <button style={securityStyles.updateButton}>Update Password</button>
              </div>

              <div style={{marginTop: '40px'}}>
                <h4 style={{fontSize: '13px', fontWeight: '600', marginBottom: '14px'}}>Security Information</h4>
                <div style={securityStyles.infoRow}>
                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>
                    <h5 style={securityStyles.infoTitle}>Account Created</h5>
                    <p style={securityStyles.infoText}>8/31/2025</p>
                  </div>

                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>
                    <h5 style={securityStyles.infoTitle}>Last Updated</h5>
                    <p style={securityStyles.infoText}>Never updated</p>
                  </div>
                  
                  <div style={securityStyles.infoCard}>
                    <div style={securityStyles.infoIcon}></div>
                    <h5 style={securityStyles.infoTitle}>Session</h5>
                    <p style={securityStyles.infoText}>Current browser session active</p>
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