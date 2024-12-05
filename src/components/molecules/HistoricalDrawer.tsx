import Box from "@mui/material/Box";
import List from "@mui/material/List";
import * as React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HistoricalModelForm from "./HistoricalModelForm";
import ModalComp from "./ModalComp";
import DataNotFoundDrawar from "./DataNotFoundDrawar";
import { CloseIcon } from "yet-another-react-lightbox";
import { Button } from "@mui/material";
import HistoricalDrawerCard from "./HistoricalDrawerCard";

interface HistoricalDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistoricalDrawer: React.FC<HistoricalDrawerProps> = ({
  open,
  setOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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
        <div className="py-12 px-4">
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-xl font-somarBold">
              قائمة الأنشطة المجدولة لهذه العملية
            </p>
            <span
              className="text-[#D32F2F] cursor-pointer"
              onClick={toggleDrawer}
            >
              <CloseIcon />
            </span>
          </div>
          <hr className="w-full h-px bg-light" />
          {/* <div className="py-6 w-[150px]">
            <Button text="إضافة نشاط" type="button" action={openModal} />
          </div>
          <HistoricalDrawerCard /> */}

          {/* عندما يكون السجل فارف   */}
          <div className="w-full h-full flex item-enter justify-center mt-[40%] ">
            {" "}
            <DataNotFoundDrawar text="سجل العمليات" />
          </div>
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

      {/* Modal */}
      <ModalComp
        open={isModalOpen}
        setOpen={setIsModalOpen}
        header="إنشاء نشاط"
      >
        <HistoricalModelForm />
      </ModalComp>
    </div>
  );
};

export default HistoricalDrawer;
