import { Outlet } from "react-router-dom";
import Toolbar from "../../molecules/toolbar/Toolbar";
import SettingList from "./SettingLinks";

function MainTabs() {
  return (
    <>
      <div className="bg-white p-0 rounded-md">
        <Toolbar />
      </div>

      <div className="bg-white rounded-lg  !mt-5 p-5">
        <div className="flex items-center justify-start gap-4">
          <SettingList />
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default MainTabs;
