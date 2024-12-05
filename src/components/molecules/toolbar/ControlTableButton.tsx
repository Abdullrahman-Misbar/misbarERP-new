import { useState } from "react";
import FirstControlNextIcon from "../../atoms/icons/controlInputIcon/FirstControlNextIcon";
import FirstControlPrevIcon from "../../atoms/icons/controlInputIcon/FirstControlPrevIcon";
import RedoIcon from "../../atoms/icons/controlInputIcon/RedoIcon";
import SecondControlNextIcon from "../../atoms/icons/controlInputIcon/SecondControlNextIcon";
import SecondControlPrevIcon from "../../atoms/icons/controlInputIcon/SecondControlPrevIcon";
import ThirdControlNextIcon from "../../atoms/icons/controlInputIcon/ThirdControlNextIcon";
import ThirdControlPrevIcon from "../../atoms/icons/controlInputIcon/ThirdControlPrevIcon";

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
