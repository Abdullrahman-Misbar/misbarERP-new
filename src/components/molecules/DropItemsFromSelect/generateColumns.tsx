import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { RowData } from "./Types&Validation";
import { useFormikContext } from "formik";
import RadioButtons from "../../atoms/formik/RadioComp";

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
        const isChecked = values?.item_id=== info?.row?.original?.id;  
        return (
          <span>
            <RadioButtons
              label=""
              name="copValue"
              checked={isChecked}  
              onChange={() => setFieldValue("item_id", info?.row?.original?.id)} 
            />
          </span>
        );
      },
    },
    {
      header: `${t("code")}`,
      accessorKey: "code",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("approval Date")}`,
      accessorKey: "approvalDate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("confirmation Dyes")}`,
      accessorKey: "confirmationDayes",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "vendorName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("expected Receipt Date")}`,
      accessorKey: "expectedReceiptDate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("status")}`,
      accessorKey: "status",
      cell: (info) => (
        <div
          className="w-[100px] rounded-md p-2 text-white"
          style={{
            backgroundColor: info?.row?.original?.status === 1 ? "green" : "red",
          }}
        >
          {info?.row?.original?.status === 1 ? t("Active") : t("Not active")}
        </div>
      ),
    },
  ];
};
