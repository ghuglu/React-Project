import * as Yup from "yup";
import { commonValidation } from "../components/Commonvalidation/Validation";
export const securitySchema = Yup.object({
  current: commonValidation.currentPassword,
  newPass: commonValidation.newPassword,
  confirm: commonValidation.confirmNewPassword,
});