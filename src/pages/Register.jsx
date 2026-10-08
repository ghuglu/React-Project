import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { getStyles } from "../theme/RegisterStyle";
import { Link } from "react-router-dom";
import RegisterForm from "../forms/RegisterForm";

const Register = () => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <div style={styles.container}>
      <div style={styles.authCard}>

        <h2 style={styles.title}>
          Create your account
        </h2>

        <p style={styles.subtitle}>
          Sign up to access the practice dashboard.
        </p>

        <RegisterForm styles={styles} />

        <p style={styles.bottomText}>
          Already Have account?{" "}
          <Link
            to="/login"
            style={styles.bottomLink}
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;