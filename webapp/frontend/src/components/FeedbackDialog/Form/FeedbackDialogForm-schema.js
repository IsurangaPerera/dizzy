// Yup
import * as yup from "yup";

export const feedbackDialogFormSchema = yup.object().shape({
  category: yup.string().required(),
  comments: yup.string(),
});
