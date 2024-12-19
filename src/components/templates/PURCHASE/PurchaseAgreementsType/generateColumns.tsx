import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
 
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
      header: `${t("aggreement Type")}`,
      accessorKey: "typeName",
      cell: (info) => info.renderValue(),
    },
 
    {
      header: `${t("Quotations Selection Method Name")}`,
      accessorKey: "quotationsSelectionMethod",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Items Selection Method Name")}`,
      accessorKey: "itemsSelectionMethod",
      cell: (info) => info.renderValue(),
    },
   
    {
      header: `${t("quantity Determine Method Name")}`,
      accessorKey: "quantityDetermineMethod",
      cell: (info) => info.renderValue(),
    },
      

    {
      header: `${t("note")}`,
      accessorKey: "notes",
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
                      `/purchase/PurchaseAgreementsType/edit/${info?.row?.original?.id}`
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
