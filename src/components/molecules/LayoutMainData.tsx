import React from "react";
import Toolbar from "./Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
};
function LayoutMainData({ children }: LayoutMainData_TP) {
  return (
    <div className="p-3 bg-white rounded-md">
      <div>
        <Toolbar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutMainData;
