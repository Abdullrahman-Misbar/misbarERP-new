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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import showAlert from "./ShowAlert";
import { t } from "i18next";
import { useMutate } from "../../hooks";
import { notify } from "../../utils/toast";

type Toolbar_TP = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  deleteEndPoint?:string
};
const Toolbar = ({ componentCopy, newValues , deleteEndPoint }: Toolbar_TP) => {
  const { handleSubmit,  values, setValues, resetForm } =
    useFormikContext<any>();
  const [openCopyModal, setOpenCopyModal] = useState(false);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate } = useMutate({
    mutationKey: [`${deleteEndPoint}`],
    endpoint: `${deleteEndPoint}/${id}`,
    onSuccess: () => {
      // refetch();
      notify("success");
      navigate(-1)
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  const handleSave = () => {
    handleSubmit();
  };

  const handleCopy = () => {
    setOpenCopyModal(true);
  };

  const handleAdd = () => {
    if (values?.editable) {
      const dynamicPath = `/${pathSegments[1]}/${pathSegments[2]}/add`;
      navigate(dynamicPath);
    }
    resetForm();
  };

  const handleUndo = () => {
    if (values?.editable) {
      resetForm();
    }
  };

  const handleDelete = () => {
    showAlert(
      `${t("Are you sure?")}`,
      `${t("You cannot go back in this process")}`,
      false,
      t("Ok"),
      true,
      "warning",
      () => {
        mutate({});
      }
    );
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
    navigate(-1);
  };

  const handleFileClock = () => {
    console.log("File clock action triggered");
  };

  const handleCalendar = () => {
    console.log("Calendar action triggered");
  };

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
