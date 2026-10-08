import React from "react";
import { useFormik } from "formik";
import { securitySchema } from "../validation/securitySchema";

const SecurityForm = ({ styles }) => {

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const formik = useFormik({
    initialValues: {
      current: "",
      newPass: "",
      confirm: "",
    },

    validationSchema: securitySchema,

    onSubmit: (values, { resetForm }) => {

      if (currentUser.password !== values.current) {
        alert("Current password is incorrect.");
        return;
      }

      const updatedUser = {
        ...currentUser,
        password: values.newPass,
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );

      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((user) => {
        if (user.id === currentUser.id) {
          return {
            ...user,
            password: values.newPass,
          };
        }

        return user;
      });

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      alert("Password updated successfully!");

      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <div style={styles.formRow}>

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Current Password
          </label>

          <input
            style={styles.input}
            type="password"
            name="current"
            placeholder="Enter current password"
            value={formik.values.current}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.current &&
            formik.errors.current && (
              <small style={{ color: "red" }}>
                {formik.errors.current}
              </small>
            )}

        </div>

        <div style={styles.formGroup}>

          <label style={styles.label}>
            New Password
          </label>

          <input
            style={styles.input}
            type="password"
            name="newPass"
            placeholder="Minimum 8 characters"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.newPass &&
            formik.errors.newPass && (
              <small style={{ color: "red" }}>
                {formik.errors.newPass}
              </small>
            )}

        </div>

      </div>

      <div
        style={{
          ...styles.formGroup,
          maxWidth: "48%",
          marginBottom: "20px",
        }}
      >

        <label style={styles.label}>
          Confirm New Password
        </label>

        <input
          style={styles.input}
          type="password"
          name="confirm"
          placeholder="Re-enter new password"
          value={formik.values.confirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.confirm &&
          formik.errors.confirm && (
            <small style={{ color: "red" }}>
              {formik.errors.confirm}
            </small>
          )}

      </div>

      <div style={styles.actions}>

        <button
          type="button"
          style={styles.clearButton}
          onClick={() => formik.resetForm()}
        >
          Clear
        </button>

        <button
          type="submit"
          style={styles.updateButton}
        >
          Update Password
        </button>

      </div>

    </form>
  );
};

export default SecurityForm;