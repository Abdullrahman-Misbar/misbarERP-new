import { useState } from "react";
import FirstControlNextIcon from "../../../assets/icon/controlInputIcon/FirstControlNextIcon";
import FirstControlPrevIcon from "../../../assets/icon/controlInputIcon/FirstControlPrevIcon";
import RedoIcon from "../../../assets/icon/controlInputIcon/RedoIcon";
import SecondControlNextIcon from "../../../assets/icon/controlInputIcon/SecondControlNextIcon";
import SecondControlPrevIcon from "../../../assets/icon/controlInputIcon/SecondControlPrevIcon";
import ThirdControlNextIcon from "../../../assets/icon/controlInputIcon/ThirdControlNextIcon";
import ThirdControlPrevIcon from "../../../assets/icon/controlInputIcon/ThirdControlPrevIcon";

function ControlTableButton() {
  const [controlInput, setControlInput] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center  gap-3">
        <div className="flex items-center gap-2">
          <ThirdControlNextIcon />
          <SecondControlNextIcon />
          <FirstControlNextIcon />
        </div>
        <input
          placeholder="0"
          type="text"
          value={controlInput}
          className="rounded-[4px] border w-10 px-2 py-1 border-[#0000003B] text-center focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <RedoIcon />
          <FirstControlPrevIcon />
          <SecondControlPrevIcon />
          <ThirdControlPrevIcon />
        </div>
      </div>
    </div>
  );
}

export default ControlTableButton;
