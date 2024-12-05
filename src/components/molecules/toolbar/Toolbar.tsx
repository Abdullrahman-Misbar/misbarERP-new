import AddBar from "./AddBar";
import ApprovedBar from "./ApprovedBar";
import CancelBar from "./CancelBar";
import CloseBar from "./CloseBar";
import ControlTableButton from "./ControlTableButton";
import DeleteBar from "./DeleteBar";
import OperationLogsBar from "./OperationLogsBar";
import PrintBar from "./PrintBar";
import RepeaterBar from "./RepeaterBar";
import SaveBar from "./SaveBar";
import ScheduledActivities from "./ScheduledActivities";
import SettingBar from "./SettingBar";
import UndoBar from "./UndoBar";
import UploadFileBar from "./UploadFileBar";

type Toolbar_TP = {
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  deleteEndPoint?: string;
};
const Toolbar = ({ componentCopy, newValues, deleteEndPoint }: Toolbar_TP) => {
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
          <CancelBar />
          <SettingBar />
          <CloseBar />
        </div>
        <ControlTableButton />
        <div className="flex items-center justify-start ">
          <OperationLogsBar />
          
          <ScheduledActivities />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
