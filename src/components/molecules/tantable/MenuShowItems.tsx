import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Switch } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import * as React from "react";



const ITEM_HEIGHT = 48;

export default function MenuShowItems({ table, setColumnVisibility }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hideAllColumns = () => {
    const updatedVisibility = {};
    table.getAllLeafColumns().forEach((column) => {
      updatedVisibility[column.id] = false;
    });
    setColumnVisibility(updatedVisibility);
  };

  const showAllColumns = () => {
    const updatedVisibility = {};
    table.getAllLeafColumns().forEach((column) => {
      updatedVisibility[column.id] = true;
    });
    setColumnVisibility(updatedVisibility);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "25ch",
              minHeight: "350px",
              padding: "22px 10px ",
            },
          },
        }}
      >
        <span className="px-6 !my-3 text-light"> الاعمدة</span>
        <hr className="mt-2 bg-light h-[2px]" />
        <div className="p-3 h-[250px] overflow-scroll ">
          {table.getAllLeafColumns().map(
            (column: {
              id: React.Key | null | undefined;
              columnDef: {
                header:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Iterable<React.ReactNode>
                  | null
                  | undefined;
              };
            }) => (
              <label
                key={column.id}
                className="flex items-center gap-2  !overflow-auto"
              >
                <Switch
                  type="checkbox"
                  checked={table.getState().columnVisibility[column.id] ?? true}
                  onChange={(e) =>
                    setColumnVisibility({
                      ...table.getState().columnVisibility,
                      [column.id]: e.target.checked,
                    })
                  }
                />
                <span className="text-[14px]">{column.columnDef.header}</span>
              </label>
            )
          )}
        </div>
        {/* <div className="flex items-center justify-between px-2 w-full">
          <button
            className="text-[14px] text-primary p-1"
            onClick={hideAllColumns} // استدعاء دالة إخفاء الجميع
          >
            اخفاء الجميع
          </button>
          <button
            className="text-[14px] text-primary p-1"
            onClick={showAllColumns} // استدعاء دالة إظهار الجميع
          >
            اظهار الجميع
          </button>
        </div> */}
      </Menu>
    </div>
  );
}
