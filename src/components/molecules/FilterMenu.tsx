import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Checkbox,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import FilterIcon from "../../assets/icon/FilterIcon";

type FilterMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
};

const FilterMenu: React.FC<FilterMenuProps> = ({ anchorEl, onClose, open }) => {
  const [checkedItems, setCheckedItems] = useState({
    "طلبات الشراء": true,
    "أوامر الشراء": true,
    "بانتظار الموافقة": true,
  });

  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: "250px",
        },
      }}
    >
      {/* Menu Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <Typography
          style={{
            fontFamily: "Somar-Bold",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FilterIcon />
          الفلاتر
        </Typography>
        <IconButton size="small" onClick={onClose}>
          <AiOutlineClose color="red" />
        </IconButton>
      </div>

      {/* Menu Items */}
      {Object.keys(checkedItems).map((item, index) => (
        <MenuItem key={index}>
          <Checkbox
            checked={checkedItems[item]}
            onChange={() => handleCheckboxChange(item)}
            size="small"
          />
          <span>{item}</span>
        </MenuItem>
      ))}

      <Divider />

      {/* Add Custom Filter Option */}
      <MenuItem>
        <IconButton size="small">
          <AiOutlinePlus />
        </IconButton>
        <Typography
          style={{
            fontFamily: "Somar-Medium",
            fontSize: "14px",
          }}
        >
          إضافة فلتر مخصص
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default FilterMenu;
