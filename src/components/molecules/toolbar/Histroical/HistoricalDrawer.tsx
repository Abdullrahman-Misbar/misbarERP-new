import Box from "@mui/material/Box";
import List from "@mui/material/List";
import * as React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CloseIcon } from "yet-another-react-lightbox";
import { useFetch } from "../../../../hooks";
import ModalComp from "../../ModalComp";

import DataNotFoundDrawer from "../../DataNotFoundDrawer";
import HistoricalModelForm from "./HistoricalModelForm";
import HistoricalDrawerCard from "../../HistoricalDrawerCard";
import Button from "../../../atoms/button/Button";
import { useParams } from "react-router-dom";
import { useFormikContext } from "formik";

interface HistoricalDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistoricalDrawer: React.FC<HistoricalDrawerProps> = ({
  open,
  setOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {id} = useParams()
  const {values} = useFormikContext<any>()

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const queryParams = {
    // page: page,
    // term: word,
    SourceId:id,
    SourceType:values?.SourceActivityType,
    Take: 50 ,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `api/PurchasActivites?${searchParams.toString()}`;
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
          {data?.data?.data?.length ? (
            data?.data?.data?.map((item: any) => (
              <HistoricalDrawerCard item={item} />
            ))
          ) : (
            <div className="w-full h-full flex item-enter justify-center mt-[40%] ">
            
              <DataNotFoundDrawer text="سجل العمليات" />
            </div>
          )}
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
