import * as Yup from "yup";
import { commonValidation } from "../components/Commonvalidation/Validation";
export const registerSchema = Yup.object({
  firstName: commonValidation.firstName,
  lastName: commonValidation.lastName,
  email: commonValidation.email,
  password: commonValidation.passwordRegister,
  confirmPassword: commonValidation.confirmPassword,
  terms: commonValidation.terms,
});