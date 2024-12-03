import { Dispatch, SetStateAction, useState } from "react";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BreadcrumbComponent from "../../../Breadcrumb";
import Button from "../../../atoms/button/Button";
import BaseInputSearch from "../../../atoms/formik/BaseInputSearch";
import Filter from "./Filter";
import ModalComp from "../../../molecules/ModalComp";

type MainHeadLayout_TP = {
  setWord: Dispatch<SetStateAction<string>>;
};
function MainHeadLayout({ setWord }: MainHeadLayout_TP) {
  const navigate = useNavigate();
  const [exportExcelModal, setExportExcelModal] = useState(false);

  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "العمليات" },
    { label: "طلب شراء" },
  ];
  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-12">
          <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
          <Filter />
        </div>
      </div>

      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-3 flex gap-2">
          <Button
            text="اضافة"
            type="button"
            action={() => navigate("/purchase/purchaseOrder/add")}
            className="!w-[100px]"
          />
          <span
            className="bg-[#E0E0E0] size-10 rounded-full flex items-center justify-center  "
            onClick={() => setExportExcelModal(true)}
          >
            <MdSettings className="size-6" />
          </span>
        </div>
      </div>
      <ModalComp
        header="الموردين - التصدير الى اكسل"
        open={exportExcelModal}
        setOpen={setExportExcelModal}
        // ActionAgreeButton={() => {
        //   setOpenCopyModal(false);
        //   setValues(newValues);
        // }}
        AgreeTextButton="تصدير"
      >
        <div>a7aaa</div>
      </ModalComp>
    </div>
  );
}

export default MainHeadLayout;
