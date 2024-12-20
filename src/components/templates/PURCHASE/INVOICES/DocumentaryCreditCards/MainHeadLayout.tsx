import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import Filter from "./Filter";
import { Form, Formik } from "formik";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import BaseInputSearch from "../../../../atoms/formik/BaseInputSearch";
import Button from "../../../../atoms/button/Button";
import SettingsMenu from "../../../../atoms/SettingsMenu";
import ModalComp from "../../../../molecules/ModalComp";
import ExportExcel from "../../../../molecules/exel/ExportExcel";
import ImportExcelModal from "../../../../molecules/exel/ImportExcelModal";
import { generateColumns } from "./generateColumns";

type MainHeadLayout_TP = {
  setWord: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function MainHeadLayout({ setWord, setOpen }: MainHeadLayout_TP) {
  const [exportExcelModal, setExportExcelModal] = useState(false);
  const [importExcelModal, setImportExcelModal] = useState(false);

  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "فواتير الشراء" },
    { label: "مشتريات خارجية", link: "/purchase/invoices/external" },
    { label: "بطاقات الاعتماد المستندي" },
  ];

  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-12">
          <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
        </div>
      </div>

      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-3 flex gap-2">
          <Button
            text="اضافة"
            type="button"
            action={() => setOpen(true)}
            className="!w-[100px]"
          />
          <span className="bg-[#E0E0E0] size-10 rounded-full flex items-center justify-center">
            <SettingsMenu
              setExportExcelModal={setExportExcelModal}
              setImportExcelModal={setImportExcelModal}
            />
          </span>
        </div>
      </div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <ModalComp
            header="الموردين - التصدير الى اكسل"
            open={exportExcelModal}
            setOpen={setExportExcelModal}
            AgreeTextButton="تصدير"
          >
            <ExportExcel generateColumns={generateColumns} />
          </ModalComp>
        </Form>
      </Formik>

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
