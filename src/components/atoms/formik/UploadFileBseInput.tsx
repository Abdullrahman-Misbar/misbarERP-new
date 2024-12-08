import { useFormikContext } from "formik";
import { useState } from "react";
import AttachmentIcon from "../icons/AttachmentIcon";
import BaseInputField from "./BaseInputField";

type Values_TP = {
  filePath: string;
  fileSize: number;
  fileType: string;
};

function UploadFileBaseInput({ setFile }: { setFile: (file: File) => void }) {
    const { setFieldValue, values } = useFormikContext<Values_TP>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setFieldValue("fileType", file.type);
        setFieldValue("fileSize", (file.size / (1024 * 1024)).toFixed(2)); // MB
        setFieldValue("filePath", file.name);
        setFieldValue("file", file);

        setFile(file); 
  
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-7 flex items-start flex-col justify-start gap-2">
        <div className="w-full mt-2">
          <BaseInputField
            type="text"
            placeholder="عنوان المرفق"
            name="attchmentTitle"
          />
        </div>
        <div className="w-full mt-2">
          <BaseInputField type="text" placeholder="الوصف" name="description" />
        </div>
        <div className="w-full mt-2">
          <BaseInputField
            type="text"
            placeholder="نوع الملف"
            name="name13"
            value={values?.fileType}
            disabled
          />
        </div>
        <div className="w-full mt-2">
          <BaseInputField
            type="text"
            placeholder="حجم الملف"
            name="name14"
            disabled
            value={values?.fileSize ? `${values?.fileSize} MB` : ""}
          />
        </div>
        <div className="w-full relative">
          {/* File input trigger using AttachmentIcon */}
          <span className="absolute top-5 left-3 cursor-pointer">
            <label htmlFor="file-upload">
              <AttachmentIcon action={() => {}} />
            </label>
          </span>
          <input
            id="file-upload"
            type="file"
            className="absolute h-[55px] z-[999] w-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <BaseInputField
            type="text"
            placeholder="مسار الملف"
            name="name16"
            value={values?.filePath}
            readOnly
            className="pl-10 pr-3"
          />
        </div>
      </div>
      <div className="col-span-5 border border-light rounded-[4px] relative">
        <span className="text-[12px] font-somarLight absolute top-[-12px] right-20 p-2 bg-white">
          معاينة المرفق
        </span>
        {imagePreview ? (
          <img
            className="h-full w-full p-2 rounded-[4px] object-contain"
            src={imagePreview}
            alt="Preview"
          />
        ) : (
          <div className="h-full w-full p-2 flex items-center justify-center text-gray-500">
            لا يوجد معاينة
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFileBaseInput;
