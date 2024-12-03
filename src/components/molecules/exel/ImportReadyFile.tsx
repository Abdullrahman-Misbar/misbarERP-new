import { Divider } from "@mui/material";
import Button from "../../atoms/button/Button";
import BaseInputField from "../../atoms/formik/BaseInputField";
import SelectAccount from "../Selects/SelectAccount";
import SelectBranch from "../Selects/SelectBranch";
import SelectWarehouse from "../Selects/SelectWarehouse";

function ImportReadyFile() {
  return (
    <div>
      <div className="flex flex-col items-start gap-2">
        <div className="px-3 my-2 w-full flex item-center  justify-between">
          <span> مسار ملف الاكسل </span>
          <span>Excel File Path</span>
        </div>
        <div
          className="w-full  flex items-center justify-between my-4"
          dir="ltr"
        >
          <div className="!w-[60%]">
            <BaseInputField
              name="name"
              placeholder="C:\Users\Shaker Ali Farhan\Documents"
              type="text"
            />
          </div>

          <div className="flex justify-around items-center w-[40%]">
            <span>Sheet No</span>
            <BaseInputField
              className="!w-[80px] ]"
              name="name"
              placeholder="1"
              type="text"
            />
            <Button text="  جلب البيانات" className="px-3" />
          </div>
        </div>
        <hr className="h-2 w-full my-4" />
        <div className="w-full flex items-start">
          <span className="w-[50%] text-start">حقول ملف الاكسل</span>
          <span className="w-[50%] text-start"> حقول النظام</span>
        </div>
        <hr className="h-2 w-full my-2" />
        <div className="w-full flex items-center justify-between my-1">
          <span className="font-somarLight">Vendor_Code</span>
          <div className="w-[50%]">
            {" "}
            <SelectWarehouse name="s" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between my-1">
          <span className="font-somarLight">Vendor_Name</span>
          <div className="w-[50%]">
            {" "}
            <SelectWarehouse name="s" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between my-1">
          <span className="font-somarLight">Vendor_Barcode</span>
          <div className="w-[50%]">
            {" "}
            <SelectWarehouse name="s" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between my-1">
          <span className="font-somarLight">Vendor_Category</span>
          <div className="w-[50%]">
            {" "}
            <SelectWarehouse name="s" />
          </div>
        </div>
        <hr className="h-2 w-full my-2" />
        <div className="flex items-center gap-3 ">
          <span className="font-somarLight">
            بدء القراءة من ملف الاكسل بدءاً من الصف رقم
          </span>
          <div className="w-20">
            {" "}
            <BaseInputField name="name" placeholder="1" type="text" />
          </div>
          <hr className="h-2 w-full my-2" />
        </div>
      </div>
    </div>
  );
}

export default ImportReadyFile;
