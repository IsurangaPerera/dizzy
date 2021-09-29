// Yup
import * as yup from "yup";

export const accountFormSchema = yup.object().shape({
  name: yup.string().required(),
  company: yup.string().required(),
});
