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
      accessorKey: "code",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "parterName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("expected Receipt Date")}`,
      accessorKey: "inDate",
      cell: (info) => <div>{info?.row?.original?.inDate?.slice(0, 10)}</div>,
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
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
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
      header: `${t("status")}`,
      accessorKey: "status",
      cell: (info) => (
        <div>
          {info?.row?.original?.status === 1 ? <p>نشط</p> : <p>غير نشط</p>}
        </div>
      ),
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
                      `/purchase/PurchasReceipt/edit/${info?.row?.original?.id}`
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
