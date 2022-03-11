import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { FC, useMemo } from "react";

import { useAppDispatch } from "../../hooks/redux/redux";
import { editProduct } from "../../redux/management/managementSlice";
import { IEditebleCardProps, IInitialValues } from "./editebleCard.interface";
import CustomTextField from "../formik/textField/CustomTextField";
import CustomButton from "../formik/customButton/CustomButton";
import { formValidation } from "./formValidation";

const EditebleCard: FC<IEditebleCardProps> = (props) => {
  const { 
    title, 
    body, 
    price, 
    id, 
    handleClose 
  } = props;

  const dispatch = useAppDispatch();

  const handleSubmit = (values: IInitialValues) => {
    dispatch(editProduct({ ...values, id }));
    handleClose();
  };

  const initialValues: IInitialValues = useMemo(() => ({
    title,
    body,
    price,
  }), [title, body, price]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid 
          container 
          alignItems="flex-start" 
          spacing={5}
        >
          <Grid item xs={12}>
            <CustomTextField 
              name="title" 
              multiline 
              label="Title" 
            />
          </Grid>

          <Grid item xs={12}>
            <CustomTextField 
              name="body" 
              multiline 
              label="Description" 
            />
          </Grid>

          <Grid item xs={12}>
            <CustomTextField 
              name="price" 
              label="Price" 
            />
          </Grid>

          <Grid item>
            <CustomButton 
              variant="contained" 
              color="primary" 
              type="submit"
            >
              Save
            </CustomButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default EditebleCard;
