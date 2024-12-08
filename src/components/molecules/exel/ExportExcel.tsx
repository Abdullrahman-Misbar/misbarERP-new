import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import * as XLSX from "xlsx";
import { writeFile } from "xlsx"; // استيراد الوظيفة الخاصة بكتابة ملف Excel
import BaseInputField from "../../atoms/formik/BaseInputField";
import { Checkbox } from "@mui/material";
import { GrAdd } from "react-icons/gr";

function ExportExcel({ generateColumns, data }) {
  const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedFields, setSelectedFields] = useState([]);

  // دالة لتصدير البيانات إلى Excel
  const exportToExcel = () => {
    // الحصول على الأعمدة المحددة فقط
    const selectedData = data.map((row) => {
      const selectedRow = {};
      selectedFields.forEach((field) => {
        selectedRow[field.header] = row[field.accessorKey];
      });
      return selectedRow;
    });

    // تحويل البيانات إلى Excel
    const sheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "SelectedData");
    writeFile(workbook, "selected_data.xlsx");
  };

  const columns = generateColumns();

  // دالة لتحديد الأعمدة
  const handleColumnChange = (columnKey, columnHeader) => {
    setSelectedColumns((prevState) => {
      const newSelectedColumns = { ...prevState };
      if (newSelectedColumns[columnKey]) {
        // إذا كان العمود محددًا مسبقًا، ألغِ تحديده
        delete newSelectedColumns[columnKey];
        setSelectedFields((prevFields) =>
          prevFields.filter((field) => field.accessorKey !== columnKey)
        );
      } else {
        // إذا لم يكن العمود محددًا، أضفه إلى الحقول المحددة
        newSelectedColumns[columnKey] = true;
        setSelectedFields((prevFields) => [
          ...prevFields,
          { accessorKey: columnKey, header: columnHeader },
        ]);
      }
      return newSelectedColumns;
    });
  };

  // دالة لحذف عمود من الحقول المحددة
  const handleRemoveField = (columnKey) => {
    setSelectedFields((prevFields) =>
      prevFields.filter((field) => field.accessorKey !== columnKey)
    );
    setSelectedColumns((prevState) => {
      const newSelectedColumns = { ...prevState };
      delete newSelectedColumns[columnKey];
      return newSelectedColumns;
    });
  };

  return (
    <>
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          {/* الحقول المتوفرة */}
          <div className="flex items-start flex-col gap">
            <span className="font-somarLight text-[#4D4D4D] gap-2 my-1">
              الحقول المتوفرة
            </span>
            <div className="w-full border p-2 border-mainBorder rounded-[8px] h-[472px] flex items-start justify-start flex-col overflow-y-hidden">
              {columns.map((column) => (
                <div
                  key={column.accessorKey}
                  className="w-full flex item-center justify-between py-2 px-3"
                >
                  {/* <Checkbox
                    checked={selectedColumns[column.accessorKey] || false}
                    onChange={() => handleColumnChange(column.accessorKey, column.header)}
                  /> */}

                  <span>{column.header}</span>
                  <p
                    className="cursor-pointer"
                    onChange={() =>
                      handleColumnChange(column.accessorKey, column.header)
                    }
                  >
                    <GrAdd />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* الحقول المحددة */}
          <div className="flex items-start flex-col gap">
            <span className="font-somarLight text-[#4D4D4D] gap-2 my-1">
              الحقول المحددة
            </span>
            <div className="w-full border p-2 border-mainBorder rounded-[8px] h-[472px] flex items-start justify-start flex-col overflow-y-hidden">
              {selectedFields.map((field) => (
                <div
                  key={field.accessorKey}
                  className="w-full flex item-center justify-between py-2 px-3"
                >
                  <span className="font-somarLight font-semibold">
                    {field.header}
                  </span>
                  <span
                    className="text-[#D32F2F] cursor-pointer"
                    onClick={() => handleRemoveField(field.accessorKey)}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* مسار التصدير */}
        <div className="flex flex-col items-start gap-2">
          <div className="px-3 my-2 w-full flex item-center justify-between">
            <span>مسار التصدير </span>
            <span>Export to</span>
          </div>
          <div className="w-full" dir="ltr">
            <BaseInputField
              className="w-full"
              name="name"
              placeholder="C:\Users\Shaker Ali Farhan\Documents"
              type="text"
            />
          </div>
        </div>

        {/* زر تصدير */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={exportToExcel}
          >
            تصدير إلى Excel
          </button>
        </div>
      </div>
    </>
  );
}

export default ExportExcel;
