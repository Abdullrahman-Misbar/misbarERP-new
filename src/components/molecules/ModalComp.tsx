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
  height: "700px",
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
  header: string;
  ActionAgreeButton?:()=>void
  disabledButtonAgree?:boolean
};
export default function ModalComp({
  open,
  setOpen,
  children,
  AgreeTextButton = "انزال",
  CancelTextButton = "الغاء",
  header,
  ActionAgreeButton,
  disabledButtonAgree
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
          <div className="flex flex-col justify-between  h-full relative">
            <div className="border-b   ">
              <p className="pb-3">{header}</p>
              <span className=" cursor-pointer" onClick={() => setOpen(false)}>
                <IoMdClose className="absolute top-[0] left-0" />
              </span>
            </div>
            <div className="mt-5 overflow-scroll">{children}</div>
            <div className="flex  justify-end gap-3">
              <Button
                text={`${AgreeTextButton}`}
                type="button"
                className="min-w-[90px]"
                variant="primary"
                action={ActionAgreeButton}
                disabled={disabledButtonAgree}
              />
              <Button
                text={`${CancelTextButton}`}
                type="button"
                className="min-w-[90px] "
                variant="outline"
                action={() => setOpen(false)}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
