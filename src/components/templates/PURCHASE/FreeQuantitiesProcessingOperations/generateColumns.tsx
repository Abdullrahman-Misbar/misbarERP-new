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
      header: `${t("user")}`,
      accessorKey: "userName",
      cell: (info) => info.renderValue(),
    },
     

      
    {
      header: `${t("Warehouse Input")}`,
      accessorKey: "Warehouse.name",
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
                      `/purchase/FreeQuantitiesProcessingOperations/edit/${info?.row?.original?.id}`
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
