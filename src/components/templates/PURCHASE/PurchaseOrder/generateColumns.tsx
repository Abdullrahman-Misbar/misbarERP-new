import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate
): ColumnDef<RowData>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
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
            backgroundColor: info?.row?.original?.status == 1 ? "green" : "red",
          }}
        >
          {info?.row?.original?.status == 1 ? t("Active") : t("Not active")}
        </div>
      ),
    },

    {
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <ActionMenu>
            <div>
              <span>
                <Edit
                action={() => {
                  navigate(`/purchase/purchaseOrder/edit/${info?.row?.original?.id}`)
                }}
                />
              </span>
            </div>
            <DeleteMain refetch={refetch} info={info} />
          </ActionMenu>
        </div>
      ),
    },
  ];
};
