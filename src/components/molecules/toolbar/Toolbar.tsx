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
  visibility?: {
    repeaterBar?: boolean;
    addBar?: boolean;
    undoBar?: boolean;
    deleteBar?: boolean;
    saveBar?: boolean;
    printBar?: boolean;
    uploadFileBar?: boolean;
    approvedBar?: boolean;
    cancelBar?: boolean;
    settingBar?: boolean;
    closeBar?: boolean;
    controlTableButton?: boolean;
    operationLogsBar?: boolean;
    scheduledActivities?: boolean;
  };
};

const Toolbar = ({ componentCopy, newValues, visibility }: Toolbar_TP) => {
  // Set default visibility to true for all components
  const defaultVisibility = {
    repeaterBar: true,
    addBar: true,
    undoBar: true,
    deleteBar: true,
    saveBar: true,
    printBar: true,
    uploadFileBar: true,
    approvedBar: true,
    cancelBar: true,
    settingBar: true,
    closeBar: true,
    controlTableButton: true,
    operationLogsBar: true,
    scheduledActivities: true,
  };

  // Merge default visibility with provided visibility
  const finalVisibility = { ...defaultVisibility, ...visibility };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-start ">
        {finalVisibility.repeaterBar && (
          <RepeaterBar componentCopy={componentCopy} newValues={newValues} />
        )}
        {finalVisibility.addBar && <AddBar />}
        {finalVisibility.undoBar && <UndoBar />}
        {finalVisibility.deleteBar && <DeleteBar />}
        {finalVisibility.saveBar && <SaveBar />}
        {finalVisibility.printBar && <PrintBar />}
        {finalVisibility.uploadFileBar && <UploadFileBar />}
        {finalVisibility.approvedBar && <ApprovedBar />}
        {finalVisibility.cancelBar && <CancelBar />}
        {finalVisibility.settingBar && <SettingBar />}
        {finalVisibility.closeBar && <CloseBar />}
      </div>
      {finalVisibility.controlTableButton && <ControlTableButton />}
      <div className="flex items-center justify-start ">
        {finalVisibility.operationLogsBar && <OperationLogsBar />}
        {finalVisibility.scheduledActivities && <ScheduledActivities />}
      </div>
    </div>
  );
};

export default Toolbar;
