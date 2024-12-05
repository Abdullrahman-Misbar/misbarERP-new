import React, { useState } from "react";
import { Tooltip, Menu, MenuItem, ListItemText } from "@mui/material";
import Setting from "../../atoms/icons/SettingIcon";

function SettingBar() {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for the main menu
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); // Anchor for the submenu

  // Open main menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close main menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null); // Close the submenu as well
  };

  // Open submenu
  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  // Close submenu
  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

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

      {/* Main Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => console.log("Send to supplier")}>
          <ListItemText primary="ارسال للمورد عن طريق الايميل" />
        </MenuItem>
        <MenuItem onClick={() => console.log("Create price offer")}>
          <ListItemText primary="إنشاء عرض سعر" />
        </MenuItem>
        <MenuItem onClick={handleSubMenuOpen}>
          <ListItemText primary="مقارنة عروض الأسعار" />
        </MenuItem>
      </Menu>

      {/* Submenu */}
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ marginTop: "-36px" }} // Adjust positioning if needed
      >
        <MenuItem onClick={() => console.log("Manual comparison")}>
          <ListItemText primary="مقارنة يدوية" />
        </MenuItem>
        <MenuItem onClick={() => console.log("Automatic comparison")}>
          <ListItemText primary="مقارنة آلية" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SettingBar;
