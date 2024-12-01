import { CloseIcon } from "yet-another-react-lightbox";
import AddIcon from "../../assets/icon/AddIcon";
import AttachmentIcon from "../../assets/icon/AttachmentIcon";
import CopyIcon from "../../assets/icon/CopyIcon";
import DeleteIcon from "../../assets/icon/DeleteIcon";
import FileNotSaveIcon from "../../assets/icon/FileNotSaveIcon";
import PrintIcon from "../../assets/icon/PrintIcon";
import SaveFileIcon from "../../assets/icon/SaveFileIcon";
import SaveIcon from "../../assets/icon/SaveIcon";
import Setting from "../../assets/icon/SettingIcon";
import UndoIcon from "../../assets/icon/UndoIcon";
import FileClock from "../../assets/icon/FileClock";
import ClenderIcon from "../../assets/icon/ClenderIcon";
import { useFormikContext } from "formik";
import { Tooltip } from "@mui/material";

const Toolbar = () => {
  const { handleSubmit, setFieldValue, values } = useFormikContext();
  console.log("🚀 ~ Toolbar ~ values:", values)

  // دالة الحفظ
  const handleSave = () => {
    handleSubmit();
  };

  // دالة النسخ
  const handleCopy = () => {
    if (values.textField) {
      navigator.clipboard.writeText(values.textField);  
    }
  };

  // دالة الإضافة
  const handleAdd = () => {
    setFieldValue("items", [...values.items, "new item"]);
  };

  // دالة الرجوع
  const handleUndo = () => {
    // يمكنك إضافة منطق الرجوع هنا مثل تعديل قيمة معينة أو العودة إلى القيمة السابقة
    console.log("Undo action triggered");
  };

  // دالة الحذف
  const handleDelete = () => {
    // حذف عنصر من الـ values أو تعديل شيء معين
    const updatedItems = values.items.slice(0, values.items.length - 1);
    setFieldValue("items", updatedItems);
  };

  // دالة الطباعة
  const handlePrint = () => {
    window.print(); // يمكنك تخصيص طباعة الـ Formik أو الـ content الخاص بك
  };

  // دالة إرفاق ملف
  const handleAttachFile = () => {
    console.log("Attachment logic here");
    // يمكنك استخدام file input أو تحميل ملف هنا
  };

  // دالة حفظ الملف
  const handleSaveFile = () => {
    console.log("Save file logic here");
    // تخصيص منطق حفظ الملف هنا
  };

  // دالة الإعدادات
  const handleSettings = () => {
    console.log("Open settings modal or navigate to settings page");
  };

  // دالة الإغلاق
  const handleClose = () => {
    console.log("Close action triggered");
  };

  // دالة الملف الزمني
  const handleFileClock = () => {
    console.log("File clock action triggered");
  };

  // دالة التقويم
  const handleCalendar = () => {
    console.log("Calendar action triggered");
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-start ">
        <Tooltip title="تكرار">
          <button className="flex items-center" type="button" onClick={handleCopy}>
            <CopyIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="إضافة">
          <button className="flex items-center p-3" type="button" onClick={handleAdd}>
            <AddIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="الرجوع">
          <button className="flex items-center p-3" type="button" onClick={handleUndo}>
            <UndoIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="حذف">
          <button className="flex items-center p-3" type="button" onClick={handleDelete}>
            <DeleteIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="حفظ">
          <button className="flex items-center p-3" onClick={handleSave} type="button">
            <SaveIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="طباعة">
          <button className="flex items-center p-3" type="button" onClick={handlePrint}>
            <PrintIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="إرفاق ملف">
          <button className="flex items-center p-3" type="button" onClick={handleAttachFile}>
            <AttachmentIcon />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="حفظ الملف">
          <button className="flex items-center p-3" type="button" onClick={handleSaveFile}>
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
          <button className="flex items-center p-3" type="button" onClick={handleSettings}>
            <Setting />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </button>
        </Tooltip>

        <Tooltip title="إغلاق">
          <button className="flex items-center p-3" type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Tooltip>
      </div>

      <div className="flex items-center justify-start ">
        <Tooltip title="الملف الزمني">
          <button className="flex items-center p-3" type="button" onClick={handleFileClock}>
            <FileClock />
          </button>
        </Tooltip>

        <Tooltip title="التقويم">
          <button className="flex items-center p-3" type="button" onClick={handleCalendar}>
            <ClenderIcon />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Toolbar;
