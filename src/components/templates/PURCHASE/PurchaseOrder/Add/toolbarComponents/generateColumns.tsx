import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { RowData } from "./Types&Validation";
import { useFormikContext } from "formik";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
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
      accessorKey: "code",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("createDate")}`,
      accessorKey: "createDate",
      cell: (info) => (
        <div>{info?.row?.original?.createDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("vendorId")}`,
      accessorKey: "vendorId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("purchaseRepresentativeId")}`,
      accessorKey: "purchaseRepresentativeId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("approvalDate")}`,
      accessorKey: "approvalDate",
      cell: (info) => (
        <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("expectedReceiptDate")}`,
      accessorKey: "expectedReceiptDate",
      cell: (info) => (
        <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("referenceDocument")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("status approved")}`,
      accessorKey: "status",
      cell: (info) => <CancelApproved info={info} refetch={refetch} />,
    },
    // هل هي حاله الاستلام
    {
      header: `${t("purchaseAgreementId")}`,
      accessorKey: "purchaseAgreementId",
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
