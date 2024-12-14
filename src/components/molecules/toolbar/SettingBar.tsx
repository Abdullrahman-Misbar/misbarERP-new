import React, { useState } from "react";
import { Tooltip, Menu, MenuItem, Typography } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import Setting from "../../atoms/icons/SettingIcon";
import GoBackArow from "../../atoms/icons/GoBackArow";
import { useNavigate } from "react-router-dom";

function SettingBar() {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for the main menu
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); // Anchor for the submenu

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null); // Close the submenu as well
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Tooltip title="الإعدادات">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleMenuOpen}
        >
          <Setting disabled={false} action={() => {}} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMenuClose} className="gap-2">
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "6px 0",
            }}
          >
            ارسال للمورد عن طريق الايميل
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className="gap-2">
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "6px 0",
            }}
          >
            إنشاء عرض سعر
          </Typography>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleSubMenuOpen} className="gap-2">
          <div className="flex items-center justify-center gap-2">
            <GoBackArow />
            <Typography
              style={{
                fontFamily: "Somar-Medium",
                fontSize: "14px",
                margin: "6px 0",
              }}
            >
              مقارنة عروض الأسعار
            </Typography>
          </div>
        </MenuItem>
      </Menu>

      {/* Submenu */}
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginTop: "-8px" }} // Adjust positioning if needed
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/purchase/PurchaseRequest/manual/:id`);
          }}
          className="gap-2"
        >
          <IoSettingsOutline className="text-gray-500" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "6px 0",
            }}
          >
            مقارنة يدوية
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/purchase/PurchaseRequest/auto/:id`);
          }}
          className="gap-2"
        >
          <IoSettingsOutline className="text-gray-500" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "6px 0",
            }}
          >
            مقارنة آلية
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SettingBar;
