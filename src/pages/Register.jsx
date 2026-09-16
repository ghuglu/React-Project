import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
import { getStyles } from "../theme/RegisterStyle";
import { Link } from "react-router-dom";

const Register = () => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <div style={styles.container}>
      <div style={styles.authCard}>
        <h2 style={styles.title}>Create your account</h2>
        <p style={styles.subtitle}>Sign up to access the practice dashboard.</p>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>First Name:</label>
            <input style={styles.inputField} placeholder="Enter First Name" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Last Name:</label>
            <input style={styles.inputField} placeholder="Enter Last Name" />
          </div>
        </div>

        <div style={styles.fullGroup}>
          <label style={styles.inputLabel}>Email Address:</label>
          <input style={styles.inputField} placeholder="Enter your email Address" />
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Password:</label>
            <input style={styles.inputField} type="password" placeholder="Enter Password" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Confirm Password:</label>
            <input style={styles.inputField} type="password" placeholder="confirm Password" />
          </div>
        </div>

        <p style={styles.inputHint}>Use at least 8 characters,with letter & number</p>

        <div style={styles.terms}>
          <input type="checkbox" style={styles.checkbox} />
          <span>I agree to the Terms</span>
        </div>

         <button style={styles.primaryBtn}>Create Account</button> 

        <p style={styles.bottomText}>
          Already Have account? <Link to="/login" style={styles.bottomLink}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;