import {
  Divider,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Radio,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import CoordinationIcon from "../atoms/icons/CoordinationIcon";
import DeleteIcon from "../atoms/icons/DeleteIcon";
import AddIcon from "../atoms/icons/AddIcon";
import RadioButtons from "../atoms/formik/RadioComp";

type CoordinationMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
};

const CoordinationMenu: React.FC<CoordinationMenuProps> = ({
  anchorEl,
  onClose,
  open,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("التنسيق 1");

  const handleRadioChange = (event: {
    target: {
      value: string;
    };
  }) => {
    setSelectedItem(event.target.value);
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
            <CoordinationIcon />
          </span>
          التنسيقات
        </Typography>
        <IconButton size="small" onClick={onClose}>
          <AiOutlineClose color="red" />
        </IconButton>
      </div>
      {/* ITEM 1  */}
      <MenuItem className="!flex !justify-between ">
        <FormControlLabel
          value="التنسيق 1"
          control={<Radio />}
          label={<span className="text-[14px] font-somar">التنسيق 1</span>}
          checked={selectedItem === "التنسيق 1"}
          onChange={handleRadioChange}
        />
        {/* <RadioButtons
        label="التنسيق 1"
        name=""
        onChange={handleRadioChange}
        checked={selectedItem === "التنسيق 1"}

        /> */}

        {/* إضافة margin-left */}
        <DeleteIcon action={() => {}} disabled />
      </MenuItem>

      {/* ITEM 2  */}
      <MenuItem className="!flex !justify-between !items-center">
        <FormControlLabel
          value="التنسيق 2"
          control={<Radio />}
          label={<span className="text-[14px] font-somar">التنسيق 2</span>}
          checked={selectedItem === "التنسيق 2"}
          onChange={handleRadioChange}
        />
        <DeleteIcon action={() => {}} disabled />
      </MenuItem>
      {/* ITEM 3  */}
      <MenuItem className="!flex !justify-between !items-center">
        <FormControlLabel
          value="التنسيق 3"
          control={<Radio />}
          label={<span className="text-[14px] font-somar">التنسيق 3</span>}
          checked={selectedItem === "التنسيق 3"}
          onChange={handleRadioChange}
        />
        <DeleteIcon action={() => {}} disabled />
      </MenuItem>

      <Divider />

      <MenuItem>
        <IconButton size="small">
          <AddIcon />
          <span className="text-[14px] font-somar"> حفظ التنسيق الحالى</span>
        </IconButton>
      </MenuItem>
    </Menu>
  );
};

export default CoordinationMenu;
