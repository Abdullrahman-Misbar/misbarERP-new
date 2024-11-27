import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Checkbox,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import GroupByIcon from "../../assets/icon/GroupByIcon";
import { FiSave } from "react-icons/fi";

type GroupByMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
};

const GroupByMenu: React.FC<GroupByMenuProps> = ({
  anchorEl,
  onClose,
  open,
}) => {
  const [checkedItems, setCheckedItems] = useState({
    المورد: true,
    "مندوب الشراء": true,
    "تاريخ الطلب": true,
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
      <div className="flex justify-between items-center px-4 py-2 border-b ">
        <Typography
          style={{
            fontFamily: "Somar-Bold",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="mx-3 ">
            <GroupByIcon />
          </span>
          تجميع حسب
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
          <span className="font-somar">{item}</span>
        </MenuItem>
      ))}

      <Divider />

      {/* Save Button */}
      <MenuItem>
        <IconButton size="small">
          <FiSave className="text-gray-500" />
        </IconButton>
      </MenuItem>
    </Menu>
  );
};

export default GroupByMenu;
