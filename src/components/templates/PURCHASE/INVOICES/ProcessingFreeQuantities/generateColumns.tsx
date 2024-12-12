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
      accessorKey: "invoiceCode",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("Date")}`,
      accessorKey: "invoiceDate",
      cell: (info) => (
        <div>{info?.row?.original?.invoiceDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("Processing type")}`,
      accessorKey: "user",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("user")}`,
      accessorKey: "user",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Entry repository")}`,
      accessorKey: "user",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("note")}`,
      accessorKey: "user",
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
