import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import CopyIcon from "../../atoms/icons/CopyIcon";
import ModalComp from "../ModalComp";
import { useFormikContext } from "formik";

type RepeaterBar_Tp = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
};
function RepeaterBar({ newValues, componentCopy }: RepeaterBar_Tp) {
  const { values, setValues } = useFormikContext<any>();
  const [openCopyModal, setOpenCopyModal] = useState(false);

  const handleCopy = () => {
    setOpenCopyModal(true);
  };

  return (
    <div>
      <Tooltip title="تكرار">
        <div className="flex items-center">
          <CopyIcon action={handleCopy} disabled={values?.editable} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
      <ModalComp
        header="حدد طلب الشراء المراد انزال التفاصيل منه"
        open={openCopyModal}
        setOpen={setOpenCopyModal}
        disabledButtonAgree={!values?.copValue?.id}
        ActionAgreeButton={() => {
          setOpenCopyModal(false);
          setValues(newValues);
        }}
      >
        <div>{componentCopy}</div>
      </ModalComp>
    </div>
  );
}

export default RepeaterBar;
