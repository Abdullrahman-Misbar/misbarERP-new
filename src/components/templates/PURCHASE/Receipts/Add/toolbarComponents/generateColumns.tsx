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
      header: `${t("voucher code")}`,
      accessorKey: "voucherCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Date")}`,
      accessorKey: "voucherDate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("currancy Name")}`,
      accessorKey: "currencyId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("account")}`,
      accessorKey: "otherAccountId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("convertionRate")}`,
      accessorKey: "convertionRate",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("cost center")}`,
      accessorKey: "costCenterId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "sourceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },
  ];
};
