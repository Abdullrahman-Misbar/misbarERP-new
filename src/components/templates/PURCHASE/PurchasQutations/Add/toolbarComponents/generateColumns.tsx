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
      accessorKey: "qCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "vendorName",
      cell: (info) => info.renderValue() || <span>غير متوفر</span>,
    },
    {
      header: `${t("quotation Date")}`,
      accessorKey: "quotationDate",
      cell: (info) =>
        info?.row?.original?.quotationDate ? (
          <div>{info?.row?.original?.quotationDate?.slice(0, 10)}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${t("quotation DeadLine")}`,
      accessorKey: "quotationDeadLine",
      cell: (info) =>
        info?.row?.original?.quotationDeadLine ? (
          <div>{info?.row?.original?.quotationDeadLine?.slice(0, 10)}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${t("approval Date")}`,
      accessorKey: "approvalDate",
      cell: (info) =>
        info?.row?.original?.approvalDate ? (
          <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },

    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue() || <span>غير متوفر</span>,
    },
    {
      header: `${t("status")}`,
      accessorKey: "status",
      cell: (info) => (
        <div
          className="w-[100px] rounded-md p-2 text-white"
          style={{
            backgroundColor:
              info?.row?.original?.status === 1 ? "green" : "red",
          }}
        >
          {info?.row?.original?.status === 1 ? t("Active") : t("Not active")}
        </div>
      ),
    },
    {
      header: `${t("total Amount")}`,
      accessorKey: "total",
      cell: (info) =>
        info?.row?.original?.total ? (
          <div>{info?.row?.original?.total}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue() || <span>غير متوفر</span>,
    },
  ];
};
