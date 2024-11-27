import React, { useState, ReactNode } from "react";
import { Menu, MenuItem, Typography, Divider } from "@mui/material";
import { HiOutlineDotsVertical } from "react-icons/hi";

type ActionMenu_TP = {
  children: ReactNode;
};

function ActionMenu({ children }: ActionMenu_TP) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex items-center gap-3 cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <HiOutlineDotsVertical className="w-5 h-5 text-black fs-2" />
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          return (
            <React.Fragment key={index}>
              <MenuItem onClick={child.props.onClick} className="gap-2">
                <Typography
                  style={{
                    fontFamily: "Somar-Medium",
                    fontSize: "14px",
                  }}
                >
                  {child}
                </Typography>
              </MenuItem>

              {index < React.Children.count(children) - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </Menu>
    </div>
  );
}

export default ActionMenu;
