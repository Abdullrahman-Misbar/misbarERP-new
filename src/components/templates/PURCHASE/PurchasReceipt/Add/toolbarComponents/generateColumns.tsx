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
      accessorKey: "code",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("expected Receipt Date")}`,
      accessorKey: "inDate",
      cell: (info) => <div>{info?.row?.original?.inDate?.slice(0, 10)}</div>,
    },
    {
      header: `${t("currencyId")}`,
      accessorKey: "currencyId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "parterName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("billing Status")}`,
      accessorKey: "billingStatus",
      cell: (info) => (
        <div>
          {info?.row?.original?.billingStatus === null ? (
            <p>غير مفوتر</p>
          ) : (
            <p>مفوتر</p>
          )}
        </div>
      ),
    },
    {
      header: `${t("Purchasing representatives")}`,
      accessorKey: "repersentiveName",
      cell: (info) =>
        info?.row?.original?.purchaseRepresentativeId ? (
          info.renderValue()
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${t("warehouse Keeper")}`,
      accessorKey: "responsibleId",
      cell: (info) =>
        info?.row?.original?.responsibleId ? (
          info.renderValue()
        ) : (
          <span>غير متوفر</span>
        ),
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
            backgroundColor:
              info?.row?.original?.status === 1 ? "green" : "red",
          }}
        >
          {info?.row?.original?.status === 1 ? t("Active") : t("Not active")}
        </div>
      ),
    },
  ];
};
