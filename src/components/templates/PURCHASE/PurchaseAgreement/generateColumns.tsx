import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import AgrementStatu from "./AgrementStatu";
import { View } from "../../../atoms/icons/View";

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
      accessorKey: "agreementCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "partnerName",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("order Date")}`,
      accessorKey: "orderDate",
      cell: (info) => (
        <div>{info?.row?.original?.requestDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("Agreement Dead line")}`,
      accessorKey: "agreementDeadline",
      cell: (info) => (
        <div>{info?.row?.original?.requestEndDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("Receipt Date")}`,
      accessorKey: "receiptDate",
      cell: (info) => (
        <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
      ),
    },
    {
      header: `${t("status agrement")}`,
      accessorKey: "agrementStatuId",
      cell: (info) => <AgrementStatu info={info}  />,
    },
     
    {
      header: `${t("User Name")}`,
      accessorKey: "responsibleId",
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
                <View
                  action={() => {
                    navigate(
                      `/purchase/PurchaseAgreement/AgreementPurchaseRequests/${info?.row?.original?.id}`
                    );
                  }}
                />
              </span>
            </div>
            <div>
              <span>
                <Edit
                  action={() => {
                    navigate(
                      `/purchase/PurchaseAgreement/edit/${info?.row?.original?.id}`
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
