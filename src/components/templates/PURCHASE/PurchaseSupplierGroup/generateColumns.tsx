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
      header: `${t("Reference number")}`,
      accessorKey: "categoryCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("group Name")}`,
      accessorKey: "ctaegoryName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("main group name")}`,
      accessorKey: "mainCategoryName",
      cell: (info) => info.renderValue(),
    },
    // {
    //   header: `${t("tags")}`,
    //   accessorKey: "tags",
    //   cell: (info) => {
    //     const tags = info.getValue() as Array<{ tagName: string }>;
    //     return tags?.map(tag => tag.tagName).join(", ");
    //   },
    // },
    

    {
      header: `${t("account")}`,
      accessorKey: "accountName",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("cost center name")}`,
      accessorKey: "costCenterName",
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
      cell: (info) => 
      {
        console.log(info)
        return  (
          <div className="flex justify-center">
            <ActionMenu>
              <div>
                <span>
                  <Edit
                    action={() => {
                      navigate(
                        `/purchase/PurchaseSupplierGroup/edit/${info?.row?.original?.id}`
                      );
                    }}
                  />
                </span>
              </div>
              <DeleteMain refetch={refetch} info={info} />
            </ActionMenu>
          </div>
        )
      }
       ,
    },
  ];
};
