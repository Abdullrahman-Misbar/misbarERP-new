import React from "react";
import Toolbar from "./toolbar/Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  editable?: boolean;
  className?: string;
  hiddenToolbar?: boolean; 
  visibility?: { [key: string]: boolean }; 
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
    <div className={` ${className} p-3 bg-white rounded-md`}>
      {!hiddenToolbar && (
        <div>
          <Toolbar
            componentCopy={componentCopy}
            newValues={newValues}
            visibility={visibility} 
          />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

export default LayoutMainData;
