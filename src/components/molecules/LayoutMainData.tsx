import React from "react";
import Toolbar from "./toolbar/Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  editable?: boolean;
  className?: string;
  hiddenToolbar?: boolean;
  visibility?:  {
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

function LayoutMainData({
  children,
  componentCopy,
  newValues,
  className,
  hiddenToolbar,
  visibility,
}: LayoutMainData_TP) {
  return (
    <div className={` ${className}  `}>
      {!hiddenToolbar && (
        <div className="bg-white rounded-xl">
          <Toolbar
            componentCopy={componentCopy}
            newValues={newValues}
            visibility={visibility}
          />
        </div>
      )}

      <div className=" ">{children}</div>
    </div>
  );
}

export default LayoutMainData;
