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
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("code")}`,
      accessorKey: "letterOfCreditCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("letter Of Credit Name")}`,
      accessorKey: "letterOfCreditName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("letter Of Credit Name En")}`,
      accessorKey: "foreignName",
      cell: (info) => info.renderValue() || "_",
    },
    {
      header: `${t("letter OfCredit Car")}`,
      accessorKey: "creditCardName",
      cell: (info) => info.renderValue() || "_",
    },
    {
      header: `${t("account")}`,
      accessorKey: "accountName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("opening Date card")}`,
      accessorKey: "openingDate",
      cell: (info) => (
        <div>{info?.row?.original?.openingDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("expected Closing Date")}`,
      accessorKey: "expectedClosingDate",
      cell: (info) => (
        <div>{info?.row?.original?.expectedClosingDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("closing Date")}`,
      accessorKey: "closingDate",
      cell: (info) => (
        <div>{info?.row?.original?.closingDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("letter Status")}`,
      accessorKey: "letterStatus",
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
                      `/purchase/invoices/DocumentaryCredit/edit/${info?.row?.original?.id}`
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
