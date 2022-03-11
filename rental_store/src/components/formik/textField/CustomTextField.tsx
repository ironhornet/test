import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomTextField = (props: any) => {
  const { name, ...otherProps } = props;

  const [field, meta] = useField(name);
  const isDirty = meta && meta.touched && meta.error;

  return (
    <TextField
      error={isDirty}
      helperText={isDirty ? meta.error : ""}
      fullWidth
      {...field}
      {...otherProps}
    />
  );
};

export default CustomTextField;
