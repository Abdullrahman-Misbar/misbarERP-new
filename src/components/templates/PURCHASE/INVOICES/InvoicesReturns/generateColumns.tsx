import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../../utils/helpers";
import { Edit } from "../../../../atoms/icons/Edit";
import ActionMenu from "../../../../molecules/ActionMenu";
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
    // {
    //   header: "#",
    //   accessorKey: "id",
    //   cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    // },
    {
      header: `${t("Reference number")}`,
      accessorKey: "invoiceCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "parterName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("invoice Date")}`,
      accessorKey: "invoiceDate",
      cell: (info) => (
        <div>{info?.row?.original?.invoiceDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("user")}`,
      accessorKey: "userName",
      cell: (info) => (
        <div>
          {info?.row?.original?.userName
            ? info?.row?.original?.userName
            : "غير متوفر"}
        </div>
      ),
    },
    {
      header: `${t("invoice Status")}`,
      accessorKey: "invoiceStatus",
      cell: (info) => (
        <div
          className="w-[100px] rounded-md p-2 text-white"
          style={{
            backgroundColor: info?.row?.original?.invoiceStatus
              ? "green"
              : "red",
          }}
        >
          {info?.row?.original?.invoiceStatus
            ? t("Approved")
            : t("Not Approved")}
        </div>
      ),
    },

    {
      header: `${t("referenceDocument")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("purchaseRepresentativeId")}`,
      accessorKey: "purchaseRepresentativeId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Nature of prices")}`,
      accessorKey: "priceNature",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("currancy Name")}`,
      accessorKey: "currancyName",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("note")}`,
      accessorKey: "notes",
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
                      `/purchase/invoices/InvoicesReturns/edit/${info?.row?.original?.id}`
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
