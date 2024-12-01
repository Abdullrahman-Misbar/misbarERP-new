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

const Toolbar = () => {
  const {handleSubmit , values} = useFormikContext()
  return (
    <div className="flex items-center justify-between  p-4">
      <div className="flex items-center justify-start ">
        <button className="flex items-center">
          <CopyIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <AddIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <UndoIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <DeleteIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3" onClick={()=>handleSubmit()}>
          <SaveIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <PrintIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <AttachmentIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <SaveFileIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <FileNotSaveIcon />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <Setting />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </button>

        <button className="flex items-center p-3">
          <CloseIcon />
        </button>
      </div>
      <div className="flex items-center justify-start ">
        <button className="flex items-center p-3">
          <FileClock />
        </button>
        <button className="flex items-center p-3">
          <ClenderIcon />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
