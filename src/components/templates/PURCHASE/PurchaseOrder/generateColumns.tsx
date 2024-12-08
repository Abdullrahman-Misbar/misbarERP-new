import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import CancelApproved from "./CancelApproved";
import { NavigateFunction } from "react-router-dom";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate: NavigateFunction
): ColumnDef<RowData>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
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
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <ActionMenu>
            <div>
              <span>
                <Edit
                  action={() => {
                    navigate(
                      `/purchase/PurchasOrder/edit/${info?.row?.original?.id}`
                    );
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
