import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { NavigateFunction } from "react-router-dom";
import { RowData } from "./Types&Validation";
import ActionMenu from "../../../../molecules/ActionMenu";
import { Edit } from "../../../../atoms/icons/Edit";
import DeleteMain from "./DeleteMain";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate: NavigateFunction
): ColumnDef<RowData>[] => {
  return [
    {
      header: `${t("Reference number")}`,
      accessorKey: "noticeCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("noticeDate")}`,
      accessorKey: "noticeDate",
      cell: (info) => (
        <div>{info?.row?.original?.noticeDate?.slice(0, 10)}</div>
      ),
    },

    {
      header: `${t("Reason for notice")}`,
      accessorKey: "Reason for notice",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("tax")}`,
      accessorKey: "tax",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("reference Document")}`,
      accessorKey: "sourceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("sourceDocumentDate")}`,
      accessorKey: "sourceDocumentDate",
      cell: (info) => (
        <div>{info?.row?.original?.sourceDocumentDate?.slice(0, 10)}</div>
      ),
    },

    {
      header: `${t("User")}`,
      accessorKey: "accountId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Statement")}`,
      accessorKey: "description",
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
                      `/purchase/PurchaseRequest/edit/${info?.row?.original?.id}`
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
