import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../../utils/helpers";
import { Edit } from "../../../../atoms/icons/Edit";
import ActionMenu from "../../../../molecules/ActionMenu";
import { RowData } from "../Types&Validation";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Button, Switch } from "@mui/material";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate: any
): ColumnDef<RowData>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
      enableResizing: true,
    },
    {
      header: `${t("Reference number")}`,
      accessorKey: "code",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "partnerName",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },
    {
      header: `${t("currancy Name")}`,
      accessorKey: "currancyName",
      cell: (info) => info.renderValue() || "-",
    },
    {
      header: `${t("request Date")}`,
      accessorKey: "requestDate",
      cell: (info) => (
        <div>{info?.row?.original?.requestDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("request End Date")}`,
      accessorKey: "requestEndDate",
      cell: (info) => (
        <div>{info?.row?.original?.requestEndDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("approval Date")}`,
      accessorKey: "approvalDate",
      cell: (info) => (
        <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("Receipt Date")}`,
      accessorKey: "receiptDate",
      cell: (info) => (
        <div>{info?.row?.original?.receiptDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("confirm Before")}`,
      accessorKey: "confirmBefore",
      cell: (info) => <div>{info.renderValue()} أيام</div>,
    },
    {
      header: `${t("Confirm Delivery Date")}`,
      accessorKey: "confirmDelivery",
      cell: (info) => (
        <Switch
          checked={info.row.original.confirmDelivery}
          onChange={() => {}}
          color="primary"
        />
      ),
    },

    {
      header: `${t("inventory")}`,
      accessorKey: "inventoryId",
      cell: (info) => info.renderValue() || "-",
    },

    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("Purchase quotes")}`,
      accessorKey: "purchaseQuotes",
      cell: (info) => (
        <div className="flex justify-center">
          <Button
            variant="contained"
            className="whitespace-nowrap"
            color="primary"
            onClick={() =>
              /*   navigate(
                `/purchase/PurchasQutations/edit/${info?.row?.original?.id}`
              ) */
              console.log(info.row.original?.id)
            }
          >
            {info.row.original.purchaseQuotes} {t("Purchase Quotes")}
          </Button>
        </div>
      ),
      enableResizing: true,
    },
  ];
};
