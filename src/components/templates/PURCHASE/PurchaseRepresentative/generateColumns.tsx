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
      accessorKey: "empCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Employee Name")}`,
      accessorKey: "empName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("hire Date")}`,
      accessorKey: "hireDate",
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
      header: `${t("phone")}`,
      accessorKey: "phone",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("email")}`,
      accessorKey: "email",
      cell: (info) => info.renderValue(),
    },

  
   

    {
      header: `${t("address")}`,
      accessorKey: "address",
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
                      `/purchase/PurchaseRepresentative/edit/${info?.row?.original?.id}`
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
