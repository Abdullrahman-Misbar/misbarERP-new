import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import * as React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CloseIcon } from "yet-another-react-lightbox";
import Button from "../atoms/button/Button";
import BaseInputDatepicker from "../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../atoms/formik/BaseInputField";
import HistoricalDrawerCard from "./HistoricalDrawerCard";
import ModalComp from "./ModalComp";
import AddBar from "./toolbar/AddBar";
import CancelBar from "./toolbar/CancelBar";
import CloseBar from "./toolbar/CloseBar";
import DeleteBar from "./toolbar/DeleteBar";
import OperationLogsBar from "./toolbar/OperationLogsBar";
import SaveBar from "./toolbar/SaveBar";
import ScheduledActivities from "./toolbar/ScheduledActivities";
import UndoBar from "./toolbar/UndoBar";
import { useFetch } from "../../hooks";

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
  const endpoint = "api/PurchasActivites?Take=50";
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
          </div>
          {
            data?.data?.data?.map((item)=>
            
              <HistoricalDrawerCard  item={item}/>
            )
          }
   
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
              <BaseInputField
                name="notes"
                placeholder="ملاحظات"
                label="ملاحظات"
                type="text"
              />
            </Grid>
          </Grid>
        </div>
      </ModalComp>
      {/* <Dialog open={isModalOpen} onClose={closeModal} className="!py-4 !px-8   "> */}
    </div>
  );
};

export default HistoricalDrawer;
