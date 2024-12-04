import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { CloseIcon } from "yet-another-react-lightbox";
import Button from "../atoms/button/Button";
import CreateByIcon from "../../assets/icon/CreateByIcon";
import PhoneIcon from "../../assets/icon/PhoneIcon";
import DateIcon from "../../assets/icon/DateIcon";
import PersonIcon from "../../assets/icon/personIcon";
import FileIcon from "../../assets/icon/FileIcon";
import HistoricalDrawerCard from "./HistoricalDrawerCard";

interface HistoricalDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistoricalDrawer: React.FC<HistoricalDrawerProps> = ({
  open,
  setOpen,
}) => {
  const anchor: "left" = "left"; // Drawer will open from the left

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 500,
        backgroundColor: "#f5f5f5",
        padding: 2,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <div className="py-12 px-4">
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-xl font-somarBold  ">
              قائمة الأنشطة المجدولة لهذه العملية{" "}
            </p>
            <span className="text-[#D32F2F] ">
              <CloseIcon />
            </span>
          </div>
          <hr className="w-full h-px bg-light" />
          <div className="py-6 w-[150px]">
            <Button text="إضافة نشاط" type="button" />
          </div>
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
        </div>
      </List>
      {/* <List>
      <div className="py-12 px-6">
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-2xl font-somarBold  ">سجل العمليات</p>
            <span className="text-[#D32F2F] ">
              <CloseIcon />
            </span>
          </div>
          <hr className="w-full h-px bg-light" />
          <div className="flex items-center justify-between p-3 ">

            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2">
                <img src="/src/assets/AnynmosPerson.png" alt="personName" />
                <span className="text-primary text-xl font-somarBold ">
                  مدير النظام
                </span>
              </div>
              <p className="mt-6 pt-4">تم اعتماد طلب الشراء</p>
            </div>
        
            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2 justify-center">
                <img src="/src/assets/DateRangeFilled.png" alt="personName" />
                <span className="text-[#00000099]  font-somarBold ">
                  13/07/2024
                </span>
              </div>
              <span className="text-[#00000099] w-full text-center mt-5 ">
                01:2:01:00 AM
              </span>
            </div>
          </div>
          <hr className="w-full h-px bg-light" />
          <div className="flex items-center justify-between p-3 ">
            
            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2">
                <img src="/src/assets/AnynmosPerson.png" alt="personName" />
                <span className="text-primary text-xl font-somarBold ">
                  مدير النظام
                </span>
              </div>
              <p className="mt-6 pt-4">تم اعتماد طلب الشراء</p>
            </div>
        
            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2 justify-center">
                <img src="/src/assets/DateRangeFilled.png" alt="personName" />
                <span className="text-[#00000099]  font-somarBold ">
                  13/07/2024
                </span>
              </div>
              <span className="text-[#00000099] w-full text-center mt-5 ">
                01:2:01:00 AM
              </span>
            </div>
          </div>
          <hr className="w-full h-px bg-light" />
          <div className="flex items-center justify-between p-3 ">
         
            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2">
                <img src="/src/assets/AnynmosPerson.png" alt="personName" />
                <span className="text-primary text-xl font-somarBold ">
                  مدير النظام
                </span>
              </div>
              <p className="mt-6 pt-4">تم اعتماد طلب الشراء</p>
            </div>
     
            <div className="flex flex-col items-start justify-between ">
              <div className="flex items-center gap-2 justify-center">
                <img src="/src/assets/DateRangeFilled.png" alt="personName" />
                <span className="text-[#00000099]  font-somarBold ">
                  13/07/2024
                </span>
              </div>
              <span className="text-[#00000099] w-full text-center mt-5 ">
                01:2:01:00 AM
              </span>
            </div>
          </div>
          <hr className="w-full h-px bg-light" />
        </div>
      </List> */}
    </Box>
  );

  return (
    <Drawer
      anchor={anchor} // Open the drawer from the left
      open={open}
      onClose={toggleDrawer(false)}
    >
      {DrawerList}
    </Drawer>
  );
};

export default HistoricalDrawer;
