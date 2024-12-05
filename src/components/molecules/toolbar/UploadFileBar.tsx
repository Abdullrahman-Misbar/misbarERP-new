import { Tooltip } from "@mui/material";
import AttachmentIcon from "../../atoms/icons/AttachmentIcon";
import ModalComp from "../ModalComp";
import { useState } from "react";
import BaseInputField from "../../atoms/formik/BaseInputField";

function UploadFileBar() {
  const [open, setOpen] = useState(false);

  // Open the dialog
  const handleUploadFileBar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="إرفاق ملف">
        <div className="flex items-center ">
          <AttachmentIcon disabled={false} action={handleUploadFileBar} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>

      <ModalComp header="ارفاق ملف " open={open} setOpen={setOpen}>
        <div className="flex  gap-4">
          <div className="w-[45%] flex items-start flex-col justify-start gap-2">
            <div className="w-full">
              <BaseInputField
                type="text"
                placeholder="عنوان المرفق"
                name="name1"
              />
            </div>
            <div className="w-full">
              {" "}
              <BaseInputField type="text" placeholder="الوصف" name="name12" />
            </div>
            <div className="w-full">
              {" "}
              <BaseInputField
                type="text"
                placeholder="نوع الملف"
                name="name13"
              />
            </div>
            <div className="w-full">
              {" "}
              <BaseInputField
                type="text"
                placeholder="حجم الملف"
                name="name14"
              />
            </div>
            <div className="w-full">
              {" "}
              <BaseInputField
                type="text"
                placeholder="حجم الملف"
                name="name15"
              />{" "}
            </div>
            <div className="w-full">
              <BaseInputField
                type="text"
                placeholder="مسار الملف"
                name="name16"
              />
            </div>
          </div>
          <div className="w-[45%] border border-light rounded-[4px] relative">
            <span className="text-[12px] font-somarLight absolute top-[-11px] right-20 p-2 bg-white">
              معاينة المرفق
            </span>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default UploadFileBar;
