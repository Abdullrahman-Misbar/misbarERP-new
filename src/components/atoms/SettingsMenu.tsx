import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdSettings } from "react-icons/md";
import ExportIcon from "../../assets/icon/ExportIcon";
import ImportIcon from "../../assets/icon/ImportIcon";
type SettingsMenu_TP = {
  setExportExcelModal: Dispatch<SetStateAction<boolean>>;
  setImportExcelModal: Dispatch<SetStateAction<boolean>>;
};
const SettingsMenu = ({
  setExportExcelModal,
  setImportExcelModal,
}: SettingsMenu_TP) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // onClick={() => setExportExcelModal(true)}
  return (
    <div className="p-5">
      <IconButton onClick={handleClick}>
        <MdSettings className="text-gray-600 size-6" />
      </IconButton>
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
        {/* الخيارات */}
        <MenuItem onClick={setExportExcelModal} className="gap-2 items-center">
          <div className="ms-1">
            {" "}
            <ExportIcon />
          </div>

          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              marginTop: "10px",
              padding: " 5px 0",
            }}
          >
            التصدير الي الاكسيل
          </Typography>
        </MenuItem>
        <MenuItem onClick={setImportExcelModal} className="gap-2 items-center">
          <ImportIcon />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              marginTop: "10px",
              padding: " 5px 0",
            }}
          >
            الاستيراد من اكسل
          </Typography>
        </MenuItem>

        <MenuItem className="gap-2  items-center">
          <DeleteIcon className="text-[#D32F2F]" />
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              marginTop: "10px",
              padding: " 5px 0",
            }}
          >
            حذف
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SettingsMenu;