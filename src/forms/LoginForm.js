import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { loginSchema } from "../validation/loginSchema";

const LoginForm = ({ styles }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      
      const users =
        JSON.parse(localStorage.getItem("users")) || [];

     const user = users.find(
        (item) =>
          item.email.toLowerCase() ===
            values.email.trim().toLowerCase() &&
          item.password === values.password
      );

      if (!user) {
        alert("Invalid Email or Password.");
        return;
      }

      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      alert("Login successfully!");

      navigate("/dashboard");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={styles.inputGroup}>
        <label style={styles.inputLabel}>
          Email Address
        </label>

        <input
          style={styles.inputField}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email &&
          formik.errors.email && (
            <small style={{ color: "red" }}>
              {formik.errors.email}
            </small>
          )}
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.inputLabel}>
          Password
        </label>

        <input
          style={styles.inputField}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.password &&
          formik.errors.password && (
            <small style={{ color: "red" }}>
              {formik.errors.password}
            </small>
          )}

        <span style={styles.inputHint}>
          Password must be at least 6 characters long.
        </span>
      </div>

      <div style={styles.loginOptions}>

        <label style={styles.rememberLabel}>
          <input
            type="checkbox"
            name="remember"
            style={{ marginRight: "6px" }}
            checked={formik.values.remember}
            onChange={formik.handleChange}
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
  );
};

export default LoginForm;