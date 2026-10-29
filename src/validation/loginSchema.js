import * as Yup from "yup";
import { commonValidation } from "../components/Commonvalidation/Validation";
export const loginSchema = Yup.object({
  email: commonValidation.email,
  password: commonValidation.passwordLogin,
  remember: commonValidation.remember,
});