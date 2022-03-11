import { FC } from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

import { ICustomButton } from "./customButton.interface"

const CustomButton: FC<ICustomButton> = (props) => {
  const { 
    children, 
    variant,
    color,
    type,
    href,
  } = props;

  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <Button 
      variant={variant as 'text'}
      color={color as 'inherit'}
      type={type}
      href={href || ''}
      onClick={handleSubmit}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
