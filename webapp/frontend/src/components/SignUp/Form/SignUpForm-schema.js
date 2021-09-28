// Yup
import * as yup from "yup";

export const signUpFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});
