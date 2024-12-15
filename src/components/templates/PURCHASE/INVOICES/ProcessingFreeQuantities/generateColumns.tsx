import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../../utils/helpers";
import { Edit } from "../../../../atoms/icons/Edit";
import ActionMenu from "../../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import { NavigateFunction } from "react-router-dom";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate: NavigateFunction
): ColumnDef<RowData>[] => {
  return [
    {
      header: `${t("Reference number")}`,
      accessorKey: "operationCode",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("Date")}`,
      accessorKey: "operationDate",
      cell: (info) => (
        <div>{info?.row?.original?.operationDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("Processing type")}`,
      accessorKey: "processingType",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("user")}`,
      accessorKey: "userId",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Entry repository")}`,
      accessorKey: "werhouseName",
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
                      `/purchase/invoices/ProcessingFreeQuantities/edit/${info?.row?.original?.id}`
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
