import { useState } from "react";
import GreySettingIcon from "../atoms/icons/GreySettingIcon";

function Overview() {
  return (
    <div className="w-full p-4 bg-white rounded-lg mb-2 flex item-center justify-between">
      <span className="text-xl">نظرة عامة</span>
      <button>
        <GreySettingIcon />
      </button>
    </div>
  );
}

export default Overview;
