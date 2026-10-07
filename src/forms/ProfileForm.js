import React from "react";
import { useFormik } from "formik";
import { profileSchema } from "../validation/profileSchema";

const ProfileForm = ({ styles }) => {

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const formik = useFormik({
    initialValues: {
      fullName:
        `${currentUser.firstName || ""} ${
          currentUser.lastName || ""
        }`.trim(),

      dob: currentUser.dob || "",

      email: currentUser.email || "",

      phone: currentUser.phone || "",

      street: currentUser.street || "",

      pin: currentUser.pin || "",

      city: currentUser.city || "",

      country: currentUser.country || "",

      github: currentUser.github || "",
    },

    validationSchema: profileSchema,

    enableReinitialize: true,

    onSubmit: (values) => {

      const updatedUser = {
        ...currentUser,

        fullName: values.fullName,
        dob: values.dob,
        email: values.email,
        phone: values.phone,
        street: values.street,
        pin: values.pin,
        city: values.city,
        country: values.country,
        github: values.github,
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
            email: values.email,
            dob: values.dob,
            phone: values.phone,
            street: values.street,
            pin: values.pin,
            city: values.city,
            country: values.country,
            github: values.github,
            fullName: values.fullName,
          };
        }

        return user;
      });

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      alert("Profile updated successfully!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <div style={styles.formGrid}>

        {/* Full Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.fullName &&
            formik.errors.fullName && (
              <small style={{ color: "red" }}>
                {formik.errors.fullName}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.dob &&
            formik.errors.dob && (
              <small style={{ color: "red" }}>
                {formik.errors.dob}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.email &&
            formik.errors.email && (
              <small style={{ color: "red" }}>
                {formik.errors.email}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.phone &&
            formik.errors.phone && (
              <small style={{ color: "red" }}>
                {formik.errors.phone}
              </small>
            )}
        </div>

      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>
          Street Address
        </label>

        <textarea
          name="street"
          placeholder="Enter Your Complete Address"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={styles.textarea}
        />

        {formik.touched.street &&
          formik.errors.street && (
            <small style={{ color: "red" }}>
              {formik.errors.street}
            </small>
          )}
      </div>

      <div style={styles.formGrid}>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Pin Code
          </label>

          <input
            type="text"
            name="pin"
            placeholder="123456"
            value={formik.values.pin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.pin &&
            formik.errors.pin && (
              <small style={{ color: "red" }}>
                {formik.errors.pin}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            City
          </label>

          <input
            type="text"
            name="city"
            placeholder="Ranchi"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.city &&
            formik.errors.city && (
              <small style={{ color: "red" }}>
                {formik.errors.city}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Country
          </label>

          <input
            type="text"
            name="country"
            placeholder="India"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.country &&
            formik.errors.country && (
              <small style={{ color: "red" }}>
                {formik.errors.country}
              </small>
            )}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            GitHub Profile
          </label>

          <input
            type="url"
            name="github"
            placeholder="https://github.com/username"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />

          {formik.touched.github &&
            formik.errors.github && (
              <small style={{ color: "red" }}>
                {formik.errors.github}
              </small>
            )}
        </div>

      </div>

      <div style={styles.actions}>

        <button
          type="button"
          onClick={() => formik.resetForm()}
          style={styles.cancelButton}
        >
          Cancel Changes
        </button>

        <button
          type="submit"
          style={styles.saveButton}
        >
          Save Changes
        </button>

      </div>

    </form>
  );
};

export default ProfileForm;