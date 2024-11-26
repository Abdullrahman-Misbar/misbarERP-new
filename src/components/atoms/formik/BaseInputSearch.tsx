import { TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { Label } from "./Label";
import { Dispatch, SetStateAction } from "react";

type BaseInputSearch_TP = {
  name: string
  label?: string
  placeholder?: string
  setWord: Dispatch<SetStateAction<string>>
}
function BaseInputSearch({
  name,
  label,
  placeholder,
  setWord,
}: BaseInputSearch_TP) {
  return (
    <div>
      {label && (
        <Label htmlFor="" className="mb-3">
          {label}
        </Label>
      )}
      <div className="relative">
     
        <TextField
          // label={label}

          type={"text"}
          variant="outlined"
          placeholder={placeholder}
          name={name}
          fullWidth
          onChange={(e) => setWord(e.target.value)}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "Somar-Bold, sans-serif", // Apply somarBold font to the label
              fontWeight: "bold",
            },
            "& input[type='date']::-webkit-calendar-picker-indicator": {
              display: "none",
            },
            "& input[type='date']": {
              "-webkit-appearance": "textfield",
            },
            
          }}
        />
        <div className="absolute top-[32%] left-[10px]">
          <IoIosSearch className="text-[18px] text-[#5f616a]" />
        </div>
      </div>
    </div>
  )
}

export default BaseInputSearch;
