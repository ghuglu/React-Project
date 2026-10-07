import * as Yup from "yup";

export const securitySchema = Yup.object({
  current: Yup.string()
    .required("Current password is required"),

  newPass: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .matches(/[A-Za-z]/, "Password must contain a letter")
    .matches(/[0-9]/, "Password must contain a number")
    .required("New password is required"),

  confirm: Yup.string()
    .oneOf(
      [Yup.ref("newPass")],
      "Passwords must match"
    )
    .required("Please confirm your new password"),
});