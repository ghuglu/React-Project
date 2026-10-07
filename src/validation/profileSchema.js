import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),

  dob: Yup.string()
    .required("Date of birth is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Phone number must be 10 digits"
    )
    .required("Phone number is required"),

  street: Yup.string()
    .required("Street address is required"),

  pin: Yup.string()
    .matches(
      /^[0-9]{6}$/,
      "Pin code must be 6 digits"
    )
    .required("Pin code is required"),

  city: Yup.string()
    .required("City is required"),

  country: Yup.string()
    .required("Country is required"),

  github: Yup.string()
    .url("Enter a valid GitHub URL")
    .required("GitHub profile is required"),
});