import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Button from "../atoms/button/Button";
import { IoMdClose } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 1000,
  bgcolor: "background.paper",
  padding: "24px",
  height: "400px",
  border: "0px solid transparent",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};
type ModalComp_Tp = {
  open: boolean;
  setOpen: any;
  children: React.ReactNode;
  AgreeTextButton?: string;
  CancelTextButton?: string;
  header:string
};
export default function ModalComp({
  open,
  setOpen,
  children,
  AgreeTextButton ="انزال",
  CancelTextButton ="الغاء",
  header , 
}: ModalComp_Tp) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col justify-between  h-full">
            <div className="border-b relative">
              <p className="pb-3">
              {header}
              </p>
              <IoMdClose className="absolute top-[14%] left-0" />
            </div>
            {children}
            <div className="flex  justify-end gap-3">
              <Button
                text={`${AgreeTextButton}`}
                type="button"
                className="min-w-[90px]"
                variant="primary"
              />
              <Button
                text={`${CancelTextButton}`}
                type="button"
                className="min-w-[90px] "
                variant="outline"
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
