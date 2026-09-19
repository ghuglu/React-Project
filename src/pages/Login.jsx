import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
import { getStyles } from "../theme/LoginStyle";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div style={styles.loginWrapper}>
      <div style={styles.authCard}>

        <h2 style={styles.loginTitle}>
          Welcome Back
        </h2>

        <p style={styles.loginSubtitle}>
          Sign in to continue to your dashboard
        </p>

        <form onSubmit={handleLogin}>

          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>
              Email Address
            </label>

            <input
              style={styles.inputField}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>
              Password
            </label>

            <input
              style={styles.inputField}
              type="password"
              placeholder="Enter your password"
            />

            <span style={styles.inputHint}>
              Password must be at least 6 characters long.
            </span>
          </div>

          <div style={styles.loginOptions}>

            <label style={styles.rememberLabel}>
              <input
                type="checkbox"
                style={{ marginRight: "6px" }}
              />
              Remember me for 30 days
            </label>

            <Link
              to="#"
              style={styles.forgot}
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            style={styles.primaryBtn}
          >
            Sign In
          </button>

        </form>

        <p style={styles.bottomText}>
          New to WebTech Practice?{" "}

          <Link
            to="/register"
            style={styles.bottomLink}
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;