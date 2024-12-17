import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { RowData } from "./Types&Validation";
import { useFormikContext } from "formik";
import RadioButtons from "../../../../../atoms/formik/RadioComp";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction
): ColumnDef<RowData>[] => {
  const { setFieldValue, values } = useFormikContext();

  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => {
        const isChecked = values?.copValue?.id === info?.row?.original?.id;  
        return (
          <span>
            <RadioButtons
              label=""
              name="copValue"
              checked={isChecked}  
              onChange={() => setFieldValue("copValue", info?.row?.original)} 
            />
          </span>
        );
      },
    },
     
     
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
     
     
    
     
    {
      header: `${t("aggreement Type")}`,
      accessorKey: "TypeName",
      cell: (info) => info.renderValue(),
    },
 
    {
      header: `${t("Quotations Selection Method Name")}`,
      accessorKey: "quotationsSelectionMethod",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Items Selection Method Name")}`,
      accessorKey: "itemsSelectionMethod",
      cell: (info) => info.renderValue(),
    },
   
    {
      header: `${t("quantity Determine Method Name")}`,
      accessorKey: "quantityDetermineMethod",
      cell: (info) => info.renderValue(),
    },
      

    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },

     
  ];
};
