import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../../utils/helpers";
import { Edit } from "../../../../atoms/icons/Edit";
import ActionMenu from "../../../../molecules/ActionMenu";
import { RowData } from "../Types&Validation";
import CancelApproved from "../CancelApproved";
import { AiOutlineDollarCircle } from "react-icons/ai";

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
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
      enableResizing: true,
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
      header: `${t("status approved")}`,
      accessorKey: "isApproved",
      cell: (info) => <CancelApproved info={info} refetch={refetch} />,
      enableResizing: true,
    },
    {
      header: `${t("status Canceled Request")}`,
      accessorKey: "isCanceled",
      cell: (info) => (
        <div>
          {info?.row?.original?.isCanceled ? (
            <p>تم الالغاء</p>
          ) : (
            <p> غير ملغاة </p>
          )}
        </div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("Number of offers")}`,
      accessorKey: "totalQutotaionCount",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("total")}`,
      accessorKey: "total",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <ActionMenu>
            <div
              className="flex items-center  gap-2"
              onClick={() =>
                navigate(
                  `/purchase/PurchasQutations/edit/${info?.row?.original?.id}`
                )
              }
            >
              <div className="bg-[#F3F6F9] p-1 rounded-md">
                <AiOutlineDollarCircle className="text-[18px] text-[#B5B5C3]" />
              </div>
              <span className="text-[14px] text-[#70707e] ">عرض</span>
            </div>
          </ActionMenu>
        </div>
      ),
      enableResizing: true,
    },
  ];
};
