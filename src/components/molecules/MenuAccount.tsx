import { Avatar, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "../../context/auth-and-perm/AuthProvider";
import { useFetch } from "../../hooks";

const MenuAccount = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout, setUser, user } = useAuth();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelLogOut = () => {
    setAnchorEl(null);
    logout();
  };
  const endpoint = `api/UserManagement/GetUsers`;
  const { data } = useFetch<[]>({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

  useEffect(() => {
    if (data?.length) setUser(data[0]);
  }, [data, setUser]);

  return (
    <div className="relative flex items-center justify-center gap-2">
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
          <span className="flex justify-center w-full pb-2 item-center">ع</span>
        </Avatar>

        <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-glow"></span>
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
            {user?.fullName}
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
            {user?.fullName}
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
        <MenuItem onClick={handelLogOut} className="gap-2">
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
