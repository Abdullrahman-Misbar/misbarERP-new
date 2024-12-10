import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { RowData } from "./Types&Validation";
import { useFormikContext } from "formik";
import RadioButtons from "../../../../../../atoms/formik/RadioComp";
import CancelApproved from "../../CancelApproved";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction
): ColumnDef<RowData>[] => {
  const { setFieldValue, values } = useFormikContext();
  console.log("🚀 ~ values:", values);

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
      header: `${t("Reference number")}`,
      accessorKey: "noticeCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("noticeDate")}`,
      accessorKey: "noticeDate",
      cell: (info) => (
        <div>{info?.row?.original?.noticeDate?.slice(0, 10)}</div>
      ),
    },

    {
      header: `${t("Reason for notice")}`,
      accessorKey: "Reason for notice",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("tax")}`,
      accessorKey: "tax",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("reference Document")}`,
      accessorKey: "sourceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("sourceDocumentDate")}`,
      accessorKey: "sourceDocumentDate",
      cell: (info) => (
        <div>{info?.row?.original?.sourceDocumentDate?.slice(0, 10)}</div>
      ),
    },

    {
      header: `${t("User")}`,
      accessorKey: "accountId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Statement")}`,
      accessorKey: "description",
      cell: (info) => info.renderValue(),
    },
  ];
};
