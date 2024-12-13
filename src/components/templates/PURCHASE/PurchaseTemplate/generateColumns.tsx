import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import { Switch } from "@mui/material";

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
      header: `${t("template Name")}`,
      accessorKey: "templateName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("foreign Name")}`,
      accessorKey: "foreignTemplateName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("discerption")}`,
      accessorKey: "discerption",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("status")}`, 
      accessorKey: "isActive", 
      cell: (info) => {
        const isActive = info.row.original.isActive;
        return (
          <Switch
            checked={isActive} 
            color="primary"
            inputProps={{ "aria-label": "isActive switch" }}
            disabled 
          />
        );
      },
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
                      `/purchase/PurchaseTemplate/edit/${info?.row?.original?.id}`
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
