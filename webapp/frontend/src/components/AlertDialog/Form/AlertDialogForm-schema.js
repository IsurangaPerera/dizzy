// Yup
import * as yup from "yup";

export const alertDialogFormSchema = yup.object().shape({
  query: yup.string().required(),
  frequency: yup.string().required(),
  notes: yup.string(),
});
