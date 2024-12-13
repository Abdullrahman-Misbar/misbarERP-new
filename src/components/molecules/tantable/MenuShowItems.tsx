import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import * as React from "react";
import { SwitchComp } from "../../atoms/formik/SwitchComp";
import { Switch } from "@mui/material";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

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
              height: "250",
            },
          },
        }}
      >
        <div className="p-3 ">
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
              <label key={column.id} className="flex items-center gap-2 ">
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

                {column.columnDef.header}
              </label>
            )
          )}
        </div>
      </Menu>
    </div>
  );
}
