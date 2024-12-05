import Box from "@mui/material/Box";
import Drawer from "react-modern-drawer";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "../atoms/button/Button";
import HistoricalDrawerCard from "./HistoricalDrawerCard";
import * as React from "react";
import { CloseIcon } from "yet-another-react-lightbox";
import "react-modern-drawer/dist/index.css";
import { Grid, TextField } from "@mui/material";
import { BiFontFamily } from "react-icons/bi";
import RepeaterBar from "./toolbar/RepeaterBar";
import AddBar from "./toolbar/AddBar";
import UndoBar from "./toolbar/UndoBar";
import DeleteBar from "./toolbar/DeleteBar";
import SaveBar from "./toolbar/SaveBar";
import PrintBar from "./toolbar/PrintBar";
import UploadFileBar from "./toolbar/UploadFileBar";
import ApprovedBar from "./toolbar/ApprovedBar";
import CancelBar from "./toolbar/CancelBar";
import SettingBar from "./toolbar/SettingBar";
import CloseBar from "./toolbar/CloseBar";
import ControlTableButton from "./toolbar/ControlTableButton";
import OperationLogsBar from "./toolbar/OperationLogsBar";
import ScheduledActivities from "./toolbar/ScheduledActivities";
import ModalComp from "./ModalComp";
import BaseInputField from "../atoms/formik/BaseInputField";
import BaseInputDatepicker from "../atoms/formik/BaseInputDatepicker";

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <div className="py-6 w-[150px]">
            <Button text="إضافة نشاط" type="button" action={openModal} />
            {/* <button onClick={openModal}>reg</button> */}
          </div>
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
          <HistoricalDrawerCard />
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
        <div className="min-h-[400px] overflow-hidden ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start ">
              <AddBar />
              <UndoBar />
              <DeleteBar />
              <SaveBar />
              <CancelBar />
              <CloseBar />
            </div>
            <div className="flex items-center justify-start ">
              <OperationLogsBar />
              <ScheduledActivities />
            </div>
          </div>
          <Grid container spacing={2} className="!my-2">
            {/* Each input takes 6 columns */}
            <Grid item xs={12} sm={6}>
              <BaseInputField
                type="text"
                name="activityType"
                placeholder="نوع النشاط"
                label="نوع النشاط"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInputField
                type="text"
                name="activitySubject"
                placeholder="موضوع النشاط"
                label="موضوع النشاط"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInputDatepicker
                name="activityDate"
                placeholder="تاريخ النشاط"
                label="تاريخ النشاط"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInputField
                type="text"
                name="assignee"
                placeholder="الإسناد إلى"
                label="الإسناد إلى"
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInputField
                type="text"
                name="activityDescription"
                placeholder="وصف النشاط"
                label="وصف النشاط"
              />
            </Grid>
            <Grid item xs={12}>
              <BaseInputField name="notes" placeholder="ملاحظات" label="ملاحظات" type="text" />
            </Grid>
          </Grid>
        </div>
      </ModalComp>
      {/* <Dialog open={isModalOpen} onClose={closeModal} className="!py-4 !px-8   "> */}
    </div>
  );
};

export default HistoricalDrawer;
