import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import { CloseIcon } from "yet-another-react-lightbox";
import AddIcon from "../../assets/icon/AddIcon";
import AttachmentIcon from "../../assets/icon/AttachmentIcon";
import ClenderIcon from "../../assets/icon/ClenderIcon";
import CopyIcon from "../../assets/icon/CopyIcon";
import DeleteIcon from "../../assets/icon/DeleteIcon";
import FileClock from "../../assets/icon/FileClock";
import FileNotSaveIcon from "../../assets/icon/FileNotSaveIcon";
import PrintIcon from "../../assets/icon/PrintIcon";
import SaveFileIcon from "../../assets/icon/SaveFileIcon";
import SaveIcon from "../../assets/icon/SaveIcon";
import Setting from "../../assets/icon/SettingIcon";
import UndoIcon from "../../assets/icon/UndoIcon";
import ModalComp from "./ModalComp";

type Toolbar_TP = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
};
const Toolbar = ({ componentCopy, newValues }: Toolbar_TP) => {


  const { handleSubmit, setFieldValue, values, setValues , resetForm ,  } = useFormikContext<any>();
  console.log("🚀 ~ Toolbar ~ values:", values)
  const [openCopyModal, setOpenCopyModal] = useState(false);

  const handleSave = () => {
    handleSubmit();
  };

  const handleCopy = () => {
    setOpenCopyModal(true);
  };

  const handleAdd = () => {
    resetForm()
  };

  const handleUndo = () => {
    console.log("Undo action triggered");
  };

  const handleDelete = () => {
    const updatedItems = values.items.slice(0, values.items.length - 1);
    setFieldValue("items", updatedItems);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAttachFile = () => {
    console.log("Attachment logic here");
  };

  const handleSaveFile = () => {
    console.log("Save file logic here");
  };

  const handleSettings = () => {
    console.log("Open settings modal or navigate to settings page");
  };

  const handleClose = () => {
    console.log("Close action triggered");
  };

  const handleFileClock = () => {
    console.log("File clock action triggered");
  };

  const handleCalendar = () => {
    console.log("Calendar action triggered");
  };

  // useEffect(() => {
  //   setValues(newValues);
  // }, [setValues]);

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-start ">
          <Tooltip title="تكرار">
            <button
              className="flex items-center"
              type="button"
              onClick={handleCopy}
            >
              <CopyIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="إضافة">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleAdd}
            >
              <AddIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="الرجوع">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleUndo}
            >
              <UndoIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="حذف">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleDelete}
            >
              <DeleteIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="حفظ">
            <button
              className="flex items-center p-3"
              onClick={handleSave}
              type="button"
            >
              <SaveIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="طباعة">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handlePrint}
            >
              <PrintIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="إرفاق ملف">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleAttachFile}
            >
              <AttachmentIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="اعتماد">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleSaveFile}
            >
              <SaveFileIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="ملف غير محفوظ">
            <button className="flex items-center p-3" type="button">
              <FileNotSaveIcon />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="الإعدادات">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleSettings}
            >
              <Setting />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </button>
          </Tooltip>

          <Tooltip title="إغلاق">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </Tooltip>
        </div>

        <div className="flex items-center justify-start ">
          <Tooltip title="الملف الزمني">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleFileClock}
            >
              <FileClock />
            </button>
          </Tooltip>

          <Tooltip title="التقويم">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={handleCalendar}
            >
              <ClenderIcon />
            </button>
          </Tooltip>
        </div>
      </div>
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
    </>
  );
};

export default Toolbar;
