import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../validation/registerSchema";

const RegisterForm = ({ styles }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: registerSchema,

    onSubmit: (values) => {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = users.find(
        (user) =>
          user.email.toLowerCase() ===
          values.email.toLowerCase()
      );

      if (existingUser) {
        alert("This email is already registered.");
        return;
      }

      const newUser = {
        id: Date.now(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
        password: values.password,
      };

      users.push(newUser);

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );

      alert("Account created successfully!");

      navigate("/login");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <div style={styles.row}>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>
            First Name:
          </label>

          <input
            style={styles.inputField}
            name="firstName"
            placeholder="Enter First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.firstName &&
            formik.errors.firstName && (
              <small style={{ color: "red" }}>
                {formik.errors.firstName}
              </small>
            )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>
            Last Name:
          </label>

          <input
            style={styles.inputField}
            name="lastName"
            placeholder="Enter Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.lastName &&
            formik.errors.lastName && (
              <small style={{ color: "red" }}>
                {formik.errors.lastName}
              </small>
            )}
        </div>

      </div>

      <div style={styles.fullGroup}>
        <label style={styles.inputLabel}>
          Email Address:
        </label>

        <input
          style={styles.inputField}
          name="email"
          type="email"
          placeholder="Enter your email Address"
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

      <div style={styles.row}>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>
            Password:
          </label>

          <input
            style={styles.inputField}
            name="password"
            type="password"
            placeholder="Enter Password"
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
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>
            Confirm Password:
          </label>

          <input
            style={styles.inputField}
            name="confirmPassword"
            type="password"
            placeholder="confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <small style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </small>
            )}
        </div>

      </div>

      <p style={styles.inputHint}>
        Use at least 8 characters,with letter & number
      </p>

      <div style={styles.terms}>

        <input
          type="checkbox"
          name="terms"
          style={styles.checkbox}
          checked={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <span>
          I agree to the Terms
        </span>

      </div>

      {formik.touched.terms &&
        formik.errors.terms && (
          <small style={{ color: "red" }}>
            {formik.errors.terms}
          </small>
        )}

      <button
        type="submit"
        style={styles.primaryBtn}
      >
        Create Account
      </button>

    </form>
  );
};

export default RegisterForm;