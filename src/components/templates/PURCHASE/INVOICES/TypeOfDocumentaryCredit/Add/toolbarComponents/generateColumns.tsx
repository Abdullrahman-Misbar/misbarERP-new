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
      header: `${t("expense Type")}`,
      accessorKey: "expenseType",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("distribution Method")}`,
      accessorKey: "distributionMethod",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("expense account")}`,
      accessorKey: "expenseAccountId",
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
