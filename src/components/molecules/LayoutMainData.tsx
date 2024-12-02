import React from "react";
import Toolbar from "./Toolbar";

type LayoutMainData_TP = {
  children: React.ReactNode;
  componentCopy: React.ReactNode;
  newValues?:  { [key: string]: string }; 
  editable?:boolean 
  deleteEndPoint?:string

  };

function LayoutMainData({ children, componentCopy , newValues ,deleteEndPoint  }: LayoutMainData_TP) {
  return (
    <div className="p-3 bg-white rounded-md">
      <div>
        <Toolbar componentCopy={componentCopy} newValues={newValues} 
        deleteEndPoint={deleteEndPoint}
        />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutMainData;
