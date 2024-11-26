import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Typography, Divider } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex h-14 items-center justify-end px-14 bg-white shadow-md">
      <div className="flex items-center justify-center gap-2">
        <Avatar
          onClick={handleClick}
          style={{
            cursor: "pointer",
            backgroundColor: "#999999",
            fontFamily: "Somar-Medium",
          }}
        >
          ع
        </Avatar>
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
                fontSize: "13px",
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
              fontSize: "14px",
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

export default NavBar;
