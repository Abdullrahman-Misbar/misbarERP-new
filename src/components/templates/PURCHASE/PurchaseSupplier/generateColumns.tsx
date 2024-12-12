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
      accessorKey: "partnerCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "partnerName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Type")}`,
      accessorKey: "vendorType",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("company Name")}`,
      accessorKey: "companyName",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("tax Number")}`,
      accessorKey: "taxNumber",
      cell: (info) => info.renderValue(),
    },

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
      header: `${t("website")}`,
      accessorKey: "website",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("fax")}`,
      accessorKey: "fax",
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
                      `/purchase/PurchaseSupplier/edit/${info?.row?.original?.id}`
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
