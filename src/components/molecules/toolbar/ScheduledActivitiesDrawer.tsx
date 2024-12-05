import Box from "@mui/material/Box";
import List from "@mui/material/List";
import * as React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ScheduledActivitiesCard from "./ScheduledActivitiesCard";
import { useFetch } from "../../../hooks";

import 'react-modern-drawer/dist/index.css';
import CloseIcon from "../../atoms/icons/CloseIcon";
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
  const endpoint = "api/PurchasRequest?Take=50";
  const { data } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const DrawerList = (
    <Box
      sx={{
        width: 500,
        backgroundColor: "#f5f5f5",
        padding: 2,
        height: "100%",
      }}
    >
   
      <List>
        <div className="w-full flex items-center justify-between mb-6">
          <p className="text-2xl font-somarBold  ">سجل العمليات</p>
          <span className="text-[#D32F2F] ">
            <CloseIcon />
          </span>
        </div>
        {data?.data?.data?.map((item) => (
          item?.isApproved &&
          <ScheduledActivitiesCard item={item} />
          
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer direction="left" open={open} onClose={toggleDrawer}
      className="!w-[500px] overflow-y-scroll overflow-x-hidden"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ScheduledActivitiesDrawer;
