import * as Yup from "yup";

export const registerSchema = Yup.object({

  firstName: Yup.string()
    .required("First name is required")
    .min(
      2,
      "First name must be at least 2 characters"
    ),

  lastName: Yup.string()
    .required("Last name is required")
    .min(
      2,
      "Last name must be at least 2 characters"
    ),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(
      8,
      "Password must be at least 8 characters"
    )
    .matches(
      /[A-Za-z]/,
      "Password must contain a letter"
    )
    .matches(
      /[0-9]/,
      "Password must contain a number"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    )
    .required("Please confirm your password"),

  terms: Yup.boolean()
    .oneOf(
      [true],
      "You must agree to the Terms"
    ),

});