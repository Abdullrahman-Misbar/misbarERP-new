import React from "react";
import { FaHome } from "react-icons/fa"; // استيراد أيقونة المنزل
import Breadcrumbs from "@mui/material/Breadcrumbs";

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

        <span className="flex items-center text-black font-somarLight text-light font-semibold">
          العمليات
        </span>

        <span className="text-black font-somarLight text-light font-semibold">
          فواتير الشراء
        </span>

        <span className="text-black font-somarLight font-bold text-primary">
          {" "}
          فواتير مشتريات محلية
        </span>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
