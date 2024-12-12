import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFetch } from "../../../hooks";
import { useFormikContext } from "formik";

interface ControlButtonState {
  nextType: number;
  id: number;
}

interface DataResponse {
  data: {
    id: number;
    nextId: number | null;
    prevId: number | null;
  } | null;
}

import FirstControlNextIcon from "../../atoms/icons/controlInputIcon/FirstControlNextIcon";
import FirstControlPrevIcon from "../../atoms/icons/controlInputIcon/FirstControlPrevIcon";
import RedoIcon from "../../atoms/icons/controlInputIcon/RedoIcon";
import SecondControlNextIcon from "../../atoms/icons/controlInputIcon/SecondControlNextIcon";
import SecondControlPrevIcon from "../../atoms/icons/controlInputIcon/SecondControlPrevIcon";
import ThirdControlNextIcon from "../../atoms/icons/controlInputIcon/ThirdControlNextIcon";
import ThirdControlPrevIcon from "../../atoms/icons/controlInputIcon/ThirdControlPrevIcon";

function ControlTableButton() {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { values } = useFormikContext<any>();
  const [controlInput, setControlInput] = useState<number>(parseInt(id, 10));
  const [controlButton, setControlButton] = useState<ControlButtonState>({
    nextType: 0,
    id: parseInt(id, 10),
  });

  const endpoint = `${values?.controlButtonEndPoint}/${controlButton.nextType}/${controlButton.id}`;

  const { data } = useFetch<DataResponse>({
    queryKey: [endpoint],
    endpoint,
    Module: "PURCHASE",
    enabled:!!controlButton?.id,
  });
  //@ts-ignore
  const response = data?.data;
  useEffect(() => {
    if (data && response) {
      //@ts-ignore
      setControlButton(() => ({
        id: response?.id,
      }));
      setControlInput(response?.id);
      navigate(`/purchase/PurchaseRequest/edit/${response?.id}`);
    }
  }, [data, navigate]);

  const handleControlButtonClick = (nextType: number) => {
    let newId = controlButton.id;

    setControlButton({ nextType, id: newId });
    setControlInput(newId);
    navigate(`/purchase/PurchaseRequest/edit/${newId}`);
  };

  const renderControlButton = (
    tooltipTitle: string,
    icon: JSX.Element,
    nextType: number
  ) => (
    <Tooltip title={tooltipTitle}>
      <button type="button" onClick={() => handleControlButtonClick(nextType)}>
        {icon}
      </button>
    </Tooltip>
  );

  return (
    values?.editable && (
      <div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {renderControlButton("الاول", <ThirdControlNextIcon />, 1)}
            {/* Go to first */}
            {renderControlButton(
              "10 سجلات للخلف",
              <SecondControlNextIcon />,
              6
            )}
            {/* Go back 10 records */}
            {renderControlButton("السابق", <FirstControlNextIcon />, 4)}
            {/* Go to previous */}
          </div>

          <input
            placeholder="0"
            type="text"
            value={controlInput}
            className="rounded-[4px] border w-10 px-2 py-1 border-[#0000003B] text-center focus:outline-none"
          />

          <div className="flex items-center gap-2">
            {renderControlButton("اعادة تعيين", <RedoIcon />, 1)} {/* Reset */}
            {renderControlButton("التالي", <FirstControlPrevIcon />, 3)}
            {/* Go to next */}
            {renderControlButton(
              "10 سجلات للامام",
              <SecondControlPrevIcon />,
              5
            )}
            {/* Go forward 10 records */}
            {renderControlButton("الاخير", <ThirdControlPrevIcon />, 2)}
            {/* Go to last */}
          </div>
        </div>
      </div>
    )
  );
}

export default ControlTableButton;
