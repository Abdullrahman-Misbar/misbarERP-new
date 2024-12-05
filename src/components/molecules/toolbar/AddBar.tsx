import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import AddIcon from "../../../assets/icon/AddIcon";

function AddBar() {
  const { values, resetForm } = useFormikContext<any>();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (values?.editable) {
      const dynamicPath = `/${pathSegments[1]}/${pathSegments[2]}/add`;
      navigate(dynamicPath);
    }
    resetForm();
  };

  return (
    <div>
      <Tooltip title="إضافة">
        <div className="flex items-center ">
          <AddIcon action={handleAdd} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default AddBar;
