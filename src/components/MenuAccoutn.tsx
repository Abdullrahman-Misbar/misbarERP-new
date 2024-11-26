import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Typography, Divider } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const MenuAccount = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-center gap-2 relative">
      <div className="relative">
        {/* الصورة الرمزية */}
        <Avatar
          onClick={handleClick}
          style={{
            cursor: "pointer",
            backgroundColor: "#999999",
            fontFamily: "Somar-Medium",
          }}
        >
          <span className="w-full flex  item-center justify-center pb-2">
            ع
          </span>
        </Avatar>

        <span className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-glow"></span>
      </div>
      <div
        onClick={handleClick}
        className="flex items-center gap-3"
        style={{ cursor: "pointer" }}
      >
        <div className="flex flex-col items-start">
          <Typography
            variant="body2"
            style={{
              fontFamily: "Somar-Bold",
              fontSize: "12px",
            }}
          >
            عبد العزيز طارق العلي
          </Typography>
          <Typography
            variant="caption"
            style={{
              fontFamily: "Somar-Light",
              fontSize: "14px",
              color: "gray",
            }}
          >
            مدير النظام
          </Typography>
        </div>

        <IoIosArrowDown className="text-gray-500" />
      </div>

      {/* القائمة المنسدلة */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* الجزء العلوي */}
        <div className="p-4">
          <Typography
            variant="body2"
            style={{
              fontFamily: "Somar-Bold",
              fontSize: "13px",
              padding: "0 5px",
            }}
          >
            عبد العزيز طارق العلي
          </Typography>
          <Typography
            variant="caption"
            style={{
              fontFamily: "Somar-Light",
              fontSize: "14px",
              color: "gray",
              padding: "0 5px",
            }}
          >
            مدير النظام
          </Typography>
        </div>
        <Divider />

        {/* الخيارات */}
        <MenuItem onClick={handleClose} className="gap-2">
          <IoSettingsOutline className="text-gray-500" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
            }}
          >
            إعدادات
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap-2">
          <FaUserAlt className="text-gray-500" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
            }}
          >
            الملف الشخصي
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap-2">
          <FiLogOut className="text-gray-500" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
            }}
          >
            خروج
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuAccount;
