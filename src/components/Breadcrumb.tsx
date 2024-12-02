import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FaHome } from "react-icons/fa"; 

const BreadcrumbComponent = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg mb-2">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator=" / "
        className="text-gray-600 text-sm"
      >
        <span>
          <FaHome className="mr-1" size={14} />{" "}
        </span>

        <span className="flex items-center  font-somarLight text-light font-semibold">
          العمليات
        </span>

        <span className=" font-somarLight text-light font-semibold">
          فواتير الشراء
        </span>

        <span className=" font-somarLight font-bold text-primary">
          فواتير مشتريات محلية
        </span>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
