import { useState } from "react";
import { styles } from "../theme/LoginStyle";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.loginWrapper}>
      <div style={styles.authCard}>
        <h2 style={styles.loginTitle}>Welcome Back</h2>
        <p style={styles.loginSubtitle}>Sign in to continue to your dashboard</p>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>Email Address</label>
          <input
            style={styles.inputField}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>Password</label>
          <input
            style={styles.inputField}
            type="password"
            placeholder="Enter your passwod"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={styles.inputHint}>Password must be at least 6 characters long.</span>
        </div>

        <div style={styles.loginOptions}>
          <label style={styles.rememberLabel}>
            <input type="checkbox" style={{marginRight: "6px"}} /> Remember me for 30 days
          </label>
          <Link style={styles.forgot}>Forgot Password?</Link>
        </div>

        <button style={styles.primaryBtn}>Sign In</button>

        <p style={styles.bottomText}>
          New to WebTech Practice? <Link to="/register" style={styles.bottomLink}>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;