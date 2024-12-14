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
      header: `${t("Reference number")}`,
      accessorKey: "operationCode",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("operation Date")}`,
      accessorKey: "operationDate",
      cell: (info) => (
        <div>{info?.row?.original?.operationDate?.slice(0, 10)}</div>
      ),
    },
    
    {
      header: `${t("warehouse Name")}`,
      accessorKey: "warehouseName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("user Name")}`,
      accessorKey: "userName",
      cell: (info) => info.renderValue(),
    },
   
     
     
    {
      header: `${t("status approved")}`,
      accessorKey: "isApproved",
      cell: (info) => <CancelApproved info={info} refetch={refetch} />,
    },
    {
      header: `${t("status Canceled Request")}`,
      accessorKey: "isCanceled",
      cell: (info) => <div>{info?.row?.original?.isCanceled ? <p>تم الالغاء</p> : <p> غير ملغاة </p>}</div>,
    },
     
    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },
     
     
  ];
};
