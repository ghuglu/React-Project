import * as Yup from "yup";
import { commonValidation } from "../components/Commonvalidation/Validation";
export const profileSchema = Yup.object({
  fullName: commonValidation.fullName,
  email: commonValidation.email,
  phone: commonValidation.phone,
  dob: Yup.string().required("Date of birth is required"),
  street: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  github: Yup.string().url("Enter a valid GitHub URL").required("GitHub profile is required"),
  pin: Yup.string().matches(/^[0-9]{6}$/, "Pin code must be 6 digits").required("Pin code is required"),

});