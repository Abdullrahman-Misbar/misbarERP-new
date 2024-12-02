import React from "react";
import Toolbar from "./Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
  componentCopy: React.ReactNode;
};
function LayoutMainData({ children, componentCopy }: LayoutMainData_TP) {
  return (
    <div className="p-3 bg-white rounded-md">
      <div>
        <Toolbar componentCopy={componentCopy} />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutMainData;
