import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import CancelApproved from "./CancelApproved";

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
    },
    {
      header: `${t("Reference number")}`,
      accessorKey: "qCode",
      cell: (info) => info.renderValue() || <span>غير متوفر</span>,
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "vendorName",
      cell: (info) => info.renderValue() || <span>غير متوفر</span>,
    },
    {
      header: `${t("user")}`,
      accessorKey: "user", // No direct API field; leave blank or add logic if necessary
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
      cell: (info) =>
        info?.row?.original?.status === 1 ? <p>نشط</p> : <p>غير نشط</p>,
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
                      `/purchase/PurchasQutations/edit/${info?.row?.original?.id}`
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
