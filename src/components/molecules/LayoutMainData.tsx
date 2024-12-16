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
    <div className={` ${className} p-3 `}>
      {!hiddenToolbar && (
        <div className="bg-white rounded-xl">
          <Toolbar
            componentCopy={componentCopy}
            newValues={newValues}
            visibility={visibility} 
          />
        </div>
      )}
        <div className="h-5 w-full bg-[#f7f9ff]  p-0 mt-2 "></div>

      <div className="mt-2 bg-white rounded-xl">{children}</div>
    </div>
  );
}

export default LayoutMainData;
