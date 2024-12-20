import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../atoms/button/Button";
import BaseInputSearch from "../../../atoms/formik/BaseInputSearch";
import SettingsMenu from "../../../atoms/SettingsMenu";
import BreadcrumbComponent from "../../../molecules/Breadcrumb";
import ExportExcel from "../../../molecules/exel/ExportExcel";
import ImportExcelModal from "../../../molecules/exel/ImportExcelModal";
import ModalComp from "../../../molecules/ModalComp";
import Filter from "./Filter";
import { generateColumns } from "./generateColumns";
import MultiDelete from "./MultiDelete";

type MainHeadLayout_TP = {
  setWord: Dispatch<SetStateAction<string>>;
  data: string[];
  selectedIds: number[];
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
};

function MainHeadLayout({
  setWord,
  data,
  selectedIds,
  refetch,
}: MainHeadLayout_TP) {
  const navigate = useNavigate();
  const [exportExcelModal, setExportExcelModal] = useState(false);
  const [importExcelModal, setImportExcelModal] = useState(false);

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
            action={() => navigate("/purchase/PurchaseRequest/add")}
            className="!w-[100px]"
          />
          <span className="bg-[#E0E0E0] size-10 rounded-full flex items-center justify-center">
            <SettingsMenu
              setExportExcelModal={setExportExcelModal}
              setImportExcelModal={setImportExcelModal}
              selectedIds={selectedIds}
              MultiDelete={
                <MultiDelete selectedIds={selectedIds} refetch={refetch} />
              }
            />
          </span>
        </div>
      </div>

      <ExportExcel
        generateColumns={generateColumns}
        data={data}
        exportExcelModal={exportExcelModal}
        setExportExcelModal={setExportExcelModal}
      />

      <ModalComp
        header=" الموردين - الاستيراد من اكسل "
        open={importExcelModal}
        setOpen={setImportExcelModal}
        AgreeTextButton="استيراد"
      >
        <Formik initialValues={{}} onSubmit={() => {}}>
          <ImportExcelModal />
        </Formik>
      </ModalComp>
    </div>
  );
}

export default MainHeadLayout;
