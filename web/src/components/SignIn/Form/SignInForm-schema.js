// Yup
import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
