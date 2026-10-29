import * as Yup from "yup";

export const commonValidation = {
  email: Yup.string().email("Invalid email address").required("Email is required"),

  phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),

  firstName: Yup.string().required("First name is required").min(2, "At least 2 characters"),

  lastName: Yup.string().required("Last name is required").min(2, "At least 2 characters"),

  fullName: Yup.string().required("Full name is required").min(2, "At least 2 characters"),

  passwordLogin: Yup.string().min(8, "Password must be at least 6 characters").required("Password is required"),

  passwordRegister: Yup.string().min(8, "Password must be at least 8 characters").matches(/[A-Za-z]/, "Must contain a letter").matches(/[0-9]/, "Must contain a number").required("Password is required"),

  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Please confirm your password"),

  currentPassword: Yup.string().required("Current password is required"),

  newPassword: Yup.string().min(8, "New password must be at least 8 characters").matches(/[A-Za-z]/, "Must contain a letter").matches(/[0-9]/, "Must contain a number").required("New password is required"),

  confirmNewPassword: Yup.string().oneOf([Yup.ref("newPass")], "Passwords must match").required("Please confirm your new password"),

  remember: Yup.boolean(),
  terms: Yup.boolean().oneOf([true], "You must agree to the Terms"),
};