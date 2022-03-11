import { FC } from "react"
import { Box, Modal } from "@mui/material";

import {useStylesModalWindow} from "./modalWindow.theme"
import { IModalProps } from "./modalWindow.interface"

const ModalWindow:FC<IModalProps> = (props) => {
  const { 
    children, 
    isOpen, 
    onClose,
  } = props;
  
  const classes = useStylesModalWindow();

  return (
      <Modal 
        open={isOpen} 
        onClose={onClose}
      >
        <Box 
          sx={{boxShadow: 24, }}
          className={classes.modalChildrenBox}
        >
          {children}
        </Box>
      </Modal>
  );
};

export default ModalWindow;
