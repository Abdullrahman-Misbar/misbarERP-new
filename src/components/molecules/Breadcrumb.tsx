import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FaHome } from "react-icons/fa"; 
import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbComponentProps {
  items: { label: string; link?: string }[]; 
}

const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({ items }) => {
  return (
    <div className="w-full p-4 bg-white rounded-lg mb-2">
      <Breadcrumbs aria-label="breadcrumb" separator=" / " className="text-gray-600 text-sm">
        <Link to={'/'}>
          <FaHome className="mr-1" size={14} />
        </Link>

        {items.map((item, index) => {
          return index === items.length - 1 ? (
            <span className="font-somarLight font-bold text-primary" key={index}>
              {item.label}
            </span>
          ) : (
            <Link
              key={index}
              to={item.link || "#"} 
              className="font-somarLight text-light font-semibold"
            >
              {item.label}
              
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
