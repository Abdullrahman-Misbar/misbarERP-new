import { Outlet } from "react-router-dom";
import Toolbar from "../../molecules/toolbar/Toolbar";
import SettingList from "./SettingLinks";

function MainTabs() {
  return (
    <>
      <div className="bg-white p-0 rounded-md">
        <Toolbar
          visibility={{
            addBar: false,
            approvedBar: false,
            cancelBar: false,
            closeBar: false,
            controlTableButton: false,
            deleteBar: false,
            operationLogsBar: false,
            printBar: false,
            repeaterBar: false,
            uploadFileBar: false,
            // settingBar: false,
            scheduledActivities: false,
          }}
        />
      </div>
      {/* 
      <div className="bg-white rounded-lg  !mt-5 p-5">
        <div className="flex items-center justify-start gap-4 border-b border-[#f3f2f2]">
          <SettingList />
        </div>
      </div> */}
      <div className="bg-white rounded-lg  !mt-5 p-5">
        <Outlet />
      </div>
    </>
  );
}

export default MainTabs;
