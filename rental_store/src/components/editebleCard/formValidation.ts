import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(4, "Title should be of minimum 4 characters length"),
  body: Yup.string()
    .required("Description is required")
    .min(10, "Description should be of minimum 10 characters length"),
  price: Yup.number().required("Price is required"),
});
