import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";

type RefetchFunction = () => void;

export const generateColumns = (
  VoucherType: number, // Number-based logic
  type: string, // String-based routing or labels
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
      accessorKey: "voucherCode",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Date")}`,
      accessorKey: "voucherDate",
      cell: (info) =>
        info?.row?.original?.voucherDate ? (
          <div>{info?.row?.original?.voucherDate?.slice(0, 10)}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${
        VoucherType === 0
          ? t("Receipt Account")
          : VoucherType === 1
          ? t("Payment Account")
          : t("Account Transferred From")
      }`,
      accessorKey: "otherAccountId",
      cell: (info) => {
        const voucherDetails = info?.row?.original?.voucherDetailsRequest;

        if (voucherDetails?.length && info?.row?.original?.voucherType === 0) {
          const filteredDetails = voucherDetails.filter(
            (item) => item?.debitAmount !== 0
          );

          return filteredDetails.length ? (
            <div>
              {filteredDetails.map((item, index) => (
                <div key={index}>{item.accountName}</div>
              ))}
            </div>
          ) : (
            <span>-</span>
          );
        }
      },
    },
    {
      header: `${
        VoucherType === 0
          ? t("Receipt Amount")
          : VoucherType === 1
          ? t("Payment Amount")
          : t("Transferred Amount")
      }`,
      accessorKey: "voucherType",
      cell: (info) => {
        const voucherDetails = info?.row?.original?.voucherDetailsRequest;
        if (voucherDetails?.length && info?.row?.original?.voucherType === 0) {
          const filteredDetails = voucherDetails.filter(
            (item) => item?.debitAmount !== 0
          );

          return filteredDetails.length ? (
            <div>
              {filteredDetails.map((item, index) => (
                <div key={index}>{item.debitAmount}</div>
              ))}
            </div>
          ) : (
            <span>-</span>
          );
        }

        return <span>{t("غير متوفر")}</span>;
      },
    },

    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("currancy Name")}`,
      accessorKey: "currencyId",
      cell: (info) =>
        info?.row?.original?.currencyId ? (
          <div>{info?.row?.original?.currencyId === 1 ? "ريال" : "دولار"}</div>
        ) : (
          <span>غير متوفر</span>
        ),
    },
    {
      header: `${t("user")}`,
      accessorKey: "userName",
      cell: (info) =>
        info?.row?.original?.user ? (
          <div>{info?.row?.original?.user}</div>
        ) : (
          <span>غير متوفر</span>
        ),
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
                      `/purchase/receipts/edit/${info?.row?.original?.id}?type=${type}`
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
