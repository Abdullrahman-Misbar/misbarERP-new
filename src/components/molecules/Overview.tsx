import { useState } from "react";
import GreySttingIcon from "../atoms/icons/GreySttingIcon";

function Overview() {
  return (
    <div className="w-full p-4 bg-white rounded-lg mb-2 flex item-center justify-between">
      <span className="text-xl">نظرة عامة</span>
      <button>
        <GreySttingIcon />
      </button>
    </div>
  );
}

export default Overview;
