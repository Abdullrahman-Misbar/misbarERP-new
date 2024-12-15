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
      header: `${t("code")}`,
      accessorKey: "agreementCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("order Date")}`,
      accessorKey: "orderDate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("receipt Date")}`,
      accessorKey: "receiptDate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "vendorName",
      cell: (info) => info.renderValue(),
    },
     
    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("status")}`,
      accessorKey: "agrementStatuId",
      cell: (info) => (
        <div
          className="w-[100px] rounded-md p-2 text-white"
          style={{
            backgroundColor: info?.row?.original?.agrementStatuId === 1 ? "green" : "red",
          }}
        >
          {info?.row?.original?.agrementStatuId === 1 ? t("Active") : t("Not active")}
        </div>
      ),
    },
  ];
};
