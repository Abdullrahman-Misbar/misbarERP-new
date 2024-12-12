import React from "react";
import Toolbar from "./toolbar/Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
  componentCopy: React.ReactNode;
  newValues?: { [key: string]: string };
  editable?: boolean;
  className?: string;
};

function LayoutMainData({
  children,
  componentCopy,
  newValues,
  className,
}: LayoutMainData_TP) {
  return (
    <div className={` ${className} p-3 bg-white rounded-md`}>
      <div>
        <Toolbar componentCopy={componentCopy} newValues={newValues} />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutMainData;
