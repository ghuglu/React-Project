import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
import { getStyles } from "../theme/LoginStyle";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const Login = () => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <div style={styles.loginWrapper}>
      <div style={styles.authCard}>

        <h2 style={styles.loginTitle}>
          Welcome Back
        </h2>

        <p style={styles.loginSubtitle}>
          Sign in to continue to your dashboard
        </p>

        <LoginForm styles={styles} />

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