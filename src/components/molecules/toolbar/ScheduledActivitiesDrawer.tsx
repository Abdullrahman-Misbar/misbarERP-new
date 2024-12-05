import Box from "@mui/material/Box";
import List from "@mui/material/List";
import * as React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CloseIcon } from "yet-another-react-lightbox";
interface ScheduledActivitiesDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduledActivitiesDrawer: React.FC<ScheduledActivitiesDrawerProps> = ({
  open,
  setOpen,
}) => {
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 500,
        backgroundColor: "#f5f5f5",
        padding: 2,
        height: "100%",
      }}
      // role="presentation"
    >
      <List>
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
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        direction="left"
        open={open}
        onClose={toggleDrawer}
        className="!w-[500px] overflow-y-scroll overflow-x-hidden"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ScheduledActivitiesDrawer;
