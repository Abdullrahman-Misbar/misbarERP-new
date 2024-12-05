import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import UndoIcon from "../../atoms/icons/UndoIcon";

function UndoBar() {
  const { values, resetForm } = useFormikContext<any>();
  const handleUndo = () => {
    if (values?.editable) {
      resetForm();
    }
  };

  return (
    <div>
      <Tooltip title="الرجوع">
        <div className="flex items-center ">
          <UndoIcon disabled={!values?.editable} action={handleUndo} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default UndoBar;
