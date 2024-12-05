import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import SaveIcon from "../../atoms/icons/SaveIcon";

function SaveBar() {
  const { handleSubmit } = useFormikContext<any>();
  const handleSave = () => {
    handleSubmit();
  };
  return (
    <div>
      <Tooltip title="حفظ">
        <div className="flex items-center ">
          <SaveIcon disabled={false} action={handleSave} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default SaveBar;
