import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";
import * as XLSX from "xlsx";
import { writeFile } from "xlsx";
import ModalComp from "../ModalComp";

interface Column {
  accessorKey: string;
  header: string;
}

interface ExportExcelProps {
  generateColumns: () => Column[];
  data: Record<string, any>[];
  exportExcelModal: boolean;
  setExportExcelModal: Dispatch<SetStateAction<boolean>>;
}

const ExportExcel: React.FC<ExportExcelProps> = ({
  generateColumns,
  data,
  exportExcelModal,
  setExportExcelModal,
}) => {
  const [selectedColumns, setSelectedColumns] = useState<Record<string, boolean>>({});
  const [selectedFields, setSelectedFields] = useState<Column[]>([]);
  const [exportPath, setExportPath] = useState<string>("");

  const exportToExcel = () => {
    const selectedData = generateSelectedData();
    const workbook = createExcelWorkbook(selectedData);
    
    const fileName = "exported_data.xlsx"; 
    
    writeFile(workbook, fileName);
  };

  const generateSelectedData = () => {
    return data.map((row) => {
      const selectedRow: Record<string, any> = {};
      selectedFields.forEach((field) => {
        selectedRow[field.header] = row[field.accessorKey];
      });
      return selectedRow;
    });
  };

  const createExcelWorkbook = (selectedData: Record<string, any>[]) => {
    const sheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "SelectedData");
    return workbook;
  };

  const handleColumnChange = (columnKey: string, columnHeader: string) => {
    setSelectedColumns((prevState) => {
      const updatedColumns = { ...prevState };
      const isColumnSelected = updatedColumns[columnKey];

      if (isColumnSelected) {
        delete updatedColumns[columnKey];
        removeField(columnKey);
      } else {
        updatedColumns[columnKey] = true;
        addField(columnKey, columnHeader);
      }

      return updatedColumns;
    });
  };

  const addField = (columnKey: string, columnHeader: string) => {
    setSelectedFields((prevFields) => {
      const isFieldAlreadySelected = prevFields.some(
        (field) => field.accessorKey === columnKey
      );
      if (!isFieldAlreadySelected) {
        return [
          ...prevFields,
          { accessorKey: columnKey, header: columnHeader },
        ];
      }
      return prevFields;
    });
  };

  const removeField = (columnKey: string) => {
    setSelectedFields((prevFields) =>
      prevFields.filter((field) => field.accessorKey !== columnKey)
    );
  };

  const handleRemoveField = (columnKey: string) => {
    setSelectedColumns((prevState) => {
      const updatedColumns = { ...prevState };
      delete updatedColumns[columnKey];
      return updatedColumns;
    });
    removeField(columnKey);
  };

  const columns = generateColumns();

  return (
    <ModalComp
      header="الموردين - التصدير الى اكسل"
      open={exportExcelModal}
      setOpen={setExportExcelModal}
      AgreeTextButton="تصدير"
      ActionAgreeButton={exportToExcel}
      disabledButtonAgree={!selectedFields?.length}
    >
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start flex-col gap">
            <span className="font-somarLight text-[#4D4D4D] gap-2 my-1">
              الحقول المتوفرة
            </span>
            <div className="w-full border p-2 border-mainBorder rounded-[8px] h-[472px] flex items-start justify-start flex-col overflow-y-scroll">
              {columns?.map((column) => (
                <div
                  key={column.accessorKey}
                  className="w-full flex item-center justify-between py-2 px-3"
                >
                  <span>{column.header}</span>
                  {!selectedColumns[column.accessorKey] ? (
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        handleColumnChange(column.accessorKey, column.header)
                      }
                    >
                      <GrAdd />
                    </span>
                  ) : (
                    <span
                      className="cursor-pointer"
                      onClick={() => handleRemoveField(column.accessorKey)}
                    >
                      <GrSubtract />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

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

        <div className="flex flex-col items-start gap-2">
          <div className="px-3 my-2 w-full flex item-center justify-between">
            <span>مسار التصدير</span>
            <span>Export to</span>
          </div>
          <div className="w-full" dir="ltr">
            <TextField
              className="w-full"
              name="exportPath"
              placeholder="C:\Users\Shaker Ali Farhan\Documents"
              type="text"
              value={exportPath}
              onChange={(e) => setExportPath(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ModalComp>
  );
};

export default ExportExcel;
