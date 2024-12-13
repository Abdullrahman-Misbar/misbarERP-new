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
      header: `${t("expense Type")}`,
      accessorKey: "expenseType",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("distribution Method")}`,
      accessorKey: "distributionMethod",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("expense account")}`,
      accessorKey: "expenseAccountId",
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
