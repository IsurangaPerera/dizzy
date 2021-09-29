// Yup
import * as yup from "yup";

export const tagDialogFormSchema = yup.object().shape({
  safety: yup.string().required(),
  category: yup.string().required(),
  comments: yup.string(),
});
