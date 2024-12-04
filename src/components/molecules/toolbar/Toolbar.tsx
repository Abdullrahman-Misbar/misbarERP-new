import { Tooltip } from "@mui/material";
import CalenderIcon from "../../../assets/icon/CalenderIcon";
import FileClock from "../../../assets/icon/FileClock";
import FileNotSaveIcon from "../../../assets/icon/FileNotSaveIcon";
import AddBar from "./AddBar";
import ApprovedBar from "./ApprovedBar";
import CloseBar from "./CloseBar";
import DeleteBar from "./DeleteBar";
import PrintBar from "./PrintBar";
import RepeaterBar from "./RepeaterBar";
import SaveBar from "./SaveBar";
import SettingBar from "./SettingBar";
import UndoBar from "./UndoBar";
import UploadFileBar from "./UploadFileBar";
import CancelBar from "./CancelBar";

type Toolbar_TP = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  deleteEndPoint?: string;
};
const Toolbar = ({ componentCopy, newValues, deleteEndPoint }: Toolbar_TP) => {
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
          <RepeaterBar componentCopy={componentCopy} newValues={newValues} />
          <AddBar />
          <UndoBar />
          <DeleteBar deleteEndPoint={deleteEndPoint} />
          <SaveBar />
          <PrintBar />
          <UploadFileBar />
          <ApprovedBar />

          
          <CancelBar/>

          <SettingBar />

          <CloseBar />
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
    </>
  );
};

export default Toolbar;
