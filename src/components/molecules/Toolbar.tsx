import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import { t } from "i18next";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "yet-another-react-lightbox";
import AddIcon from "../../assets/icon/AddIcon";
import AttachmentIcon from "../../assets/icon/AttachmentIcon";
import CalenderIcon from "../../assets/icon/CalenderIcon";
import FirstControlNextIcon from "../../assets/icon/controlInputIcon/FirstControlNextIcon";
import FirstControlPrevIcon from "../../assets/icon/controlInputIcon/FirstControlPrevIcon";
import RedoIcon from "../../assets/icon/controlInputIcon/RedoIcon";
import SecondControlNextIcon from "../../assets/icon/controlInputIcon/SecondControlNextIcon";
import SecondControlPrevIcon from "../../assets/icon/controlInputIcon/SecondControlPrevIcon";
import ThirdControlNextIcon from "../../assets/icon/controlInputIcon/ThirdControlNextIcon";
import ThirdControlPrevIcon from "../../assets/icon/controlInputIcon/ThirdControlPrevIcon";
import CopyIcon from "../../assets/icon/CopyIcon";
import DeleteIcon from "../../assets/icon/DeleteIcon";
import FileClock from "../../assets/icon/FileClock";
import FileNotSaveIcon from "../../assets/icon/FileNotSaveIcon";
import PrintIcon from "../../assets/icon/PrintIcon";
import SaveIcon from "../../assets/icon/SaveIcon";
import Setting from "../../assets/icon/SettingIcon";
import UndoIcon from "../../assets/icon/UndoIcon";
import { useMutate } from "../../hooks";
import { notify } from "../../utils/toast";
import ApprovedIcon from "../atoms/icons/ApprovedIcon";
import UnApprovedIcon from "../atoms/icons/UnApprovedIcon";
import HistoricalDrawer from "./HistoricalDrawer";
import ModalComp from "./ModalComp";
import showAlert from "./ShowAlert";

type Toolbar_TP = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  deleteEndPoint?: string;
};

const Toolbar = ({ componentCopy, newValues, deleteEndPoint }: Toolbar_TP) => {
  const { handleSubmit, values, setValues, resetForm, setFieldValue } =
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
      navigate(-1);
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

  const handelApproved = () => {
    if (values?.isApproved) {
      setFieldValue("isApproved", false);
    } else {
      setFieldValue("isApproved", true);
    }
  };

  const handleSettings = () => {
    console.log("Open settings modal or navigate to settings page");
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleFileClock = () => {
    setOpenHistoricalDrawer(true); 
  };

  const handleCalendar = () => {
    console.log("Calendar action triggered");
  };

  const [controlInput, setControlInput] = useState(0);

  const handelcontrolInput = () => {
    if (controlInput > 0) {
      setControlInput(controlInput + 1);
    }
  };

  // إدارة حالة الدرج التاريخي
  const [openHistoricalDrawer, setOpenHistoricalDrawer] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-start ">
          <Tooltip title="تكرار">
            <div className="flex items-center">
              <CopyIcon action={handleCopy} disabled={values?.editable} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="إضافة">
            <div className="flex items-center p-3">
              <AddIcon action={handleAdd} disabled={!values?.editable} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="الرجوع">
            <div className="flex items-center p-3">
              <UndoIcon disabled={!values?.editable} action={handleUndo} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="حذف">
            <div className="flex items-center p-3">
              <DeleteIcon disabled={!values?.editable} action={handleDelete} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="حفظ">
            <div className="flex items-center p-3">
              <SaveIcon disabled={false} action={handleSave} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="طباعة">
            <div className="flex items-center p-3">
              <PrintIcon disabled={false} action={handlePrint} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="إرفاق ملف">
            <div className="flex items-center p-3">
              <AttachmentIcon disabled={false} action={handleAttachFile} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>
          {values?.isApproved == null || values?.isApproved == false ? (
            <Tooltip title="اعتماد">
              <div className="flex items-center p-3">
                <ApprovedIcon disabled={false} action={handelApproved} />
                <div className="w-px h-12 bg-gray-200 mx-4"></div>
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="الغاء الاعتماد">
              <div className="flex items-center p-3">
                <UnApprovedIcon disabled={false} action={handelApproved} />
                <div className="w-px h-12 bg-gray-200 mx-4"></div>
              </div>
            </Tooltip>
          )}

          <Tooltip title="ملف غير محفوظ">
            <div className="flex items-center p-3">
              <FileNotSaveIcon disabled />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>

          <Tooltip title="الإعدادات">
            <div className="flex items-center p-3">
              <Setting disabled={false} action={handleSettings} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
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

        <div className="flex items-center justify-center  gap-3">
          <div className="flex items-center gap-2">
            <ThirdControlNextIcon />
            <SecondControlNextIcon />
            <FirstControlNextIcon />
          </div>
          <input
            placeholder="0"
            type="text"
            value={controlInput}
            className="rounded-[4px] border w-10 px-2 py-1 border-[#0000003B] text-center focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <RedoIcon />
            <FirstControlPrevIcon />
            <SecondControlPrevIcon />
            <ThirdControlPrevIcon />
          </div>
        </div>

        <div className="flex items-center justify-start ">
          <Tooltip title="الملف الزمني">
            <div className="flex items-center p-3">
              <FileClock action={handleFileClock} />
            </div>
          </Tooltip>

          <Tooltip title="التقويم">
            <div className="flex items-center p-3">
              <CalenderIcon action={handleCalendar} />
            </div>
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

      {/* إضافة مكون HistoricalDrawer وتمرير الـ props */}

      <HistoricalDrawer
        open={openHistoricalDrawer}
        setOpen={setOpenHistoricalDrawer}
      />
    </>
  );
};

export default Toolbar;
