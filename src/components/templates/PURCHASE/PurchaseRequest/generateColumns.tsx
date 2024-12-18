import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { indexTable } from "../../../../utils/helpers";
import { Edit } from "../../../atoms/icons/Edit";
import ActionMenu from "../../../molecules/ActionMenu";
import CancelApproved from "./CancelApproved";
import DeleteMain from "./DeleteMain";
import { RowData } from "./Types&Validation";
import { Box } from "@mui/material";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  navigate: any
): ColumnDef<RowData>[] => {
  return [
    // {
    //   header: "",
    //   accessorKey: "id",
    //   cell: (info) => (
    //     <span>
    //       <Checkbox
    //         checked={selectedIds.includes(+info.row.original.id)}
    //         onChange={() => handleCheckboxChange(info.row.original.id)}
    //       />
    //     </span>
    //   ),
    //   enableResizing: true,
    // },
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
      enableResizing: true,
    },
    {
      header: `${t("Reference number")}`,
      accessorKey: "code",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },
    {
      header: `${t("vendor Name")}`,
      accessorKey: "partnerName",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },
    {
      header: `${t("reference Document")}`,
      accessorKey: "referenceDocument",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },
    {
      header: `${t("request Date")}`,
      accessorKey: "requestDate",
      cell: (info) => (
        <div>{info?.row?.original?.requestDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("request End Date")}`,
      accessorKey: "requestEndDate",
      cell: (info) => (
        <div>{info?.row?.original?.requestEndDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("approval Date")}`,
      accessorKey: "approvalDate",
      cell: (info) => (
        <div>{info?.row?.original?.approvalDate?.slice(0, 10)}</div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("status approved")}`,
      accessorKey: "isApproved",
      cell: (info) => <CancelApproved info={info} refetch={refetch} />,
      enableResizing: true,
    },
    {
      header: `${t("status Canceled Request")}`,
      accessorKey: "isCanceled",
      cell: (info) => (
        <div>
          {info?.row?.original?.isCanceled ? (
            <p>تم الالغاء</p>
          ) : (
            <p> غير ملغاة </p>
          )}
        </div>
      ),
      enableResizing: true,
    },
    {
      header: `${t("Number of offers")}`,
      accessorKey: "totalQutotaionCount",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("total")}`,
      accessorKey: "total",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("note")}`,
      accessorKey: "note",
      cell: (info) => info.renderValue(),
      enableResizing: true,
    },

    {
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <ActionMenu>
            <div
              className="flex items-center  gap-2"
              onClick={() =>
                navigate(
                  `/purchase/PurchaseRequest/PurchaseRequestsOffers/${info?.row?.original?.id}`
                )
              }
            >
              <div className="bg-[#F3F6F9] p-1 rounded-md">
                <AiOutlineDollarCircle className="text-[18px] text-[#B5B5C3]" />
              </div>
              <span className="text-[14px] text-[#70707e] "> عروض الاسعار</span>
            </div>
            <div>
              <span>
                <Edit
                  action={() => {
                    navigate(
                      `/purchase/PurchaseRequest/edit/${info?.row?.original?.id}`
                    );
                  }}
                />
              </span>
            </div>
            <DeleteMain refetch={refetch} info={info} />
          </ActionMenu>
        </div>
      ),
      enableResizing: true,
    },
  ];
};

export const columns = [
  { id: "code", label: "الرقم المرجعي" },
  { id: "partnerName", label: "المورد" },
  { id: "referenceDocument", label: "المستند المرجعي" },
  {
    id: "requestDate",
    label: "تاريخ الطلب",

    render: (value: string) => <div>{value?.slice(0, 10)}</div>,  },
  { id: "requestEndDate", label: "تاريخ انتهاء الطلب" , 

    render: (value: string) => <div>{value?.slice(0, 10)}</div>,  
  
  },

  { id: "approvalDate", label: "تاريخ اعتماد الطلب" , 

    
    render: (value: string) => <div>{value?.slice(0, 10)}</div>, 
   },
  {
    id: "isApproved",
    label: "حالة الاعتماد",
    render: (value: string) => (
      <Box
        sx={{
          color: "white",
          backgroundColor: "green",
          textAlign: "center",
          borderRadius: 1,
          p: 0.5,
        }}
      >
        {value ? "معتمد " : "غير معتمد"}
      </Box>
    ),
  },
  { id: "total", label: "الإجمالي" },
  { id: "totalQutotaionCount", label: "عدد العروض" },
  { id: "note", label: "ملاحظات" },
  { id: "note", label: "الاجراءات"  , 
    render: (value: string) => (

      <div className="flex justify-center">
      <ActionMenu>
        <div
          className="flex items-center  gap-2"
          // onClick={() =>
          //   navigate(
          //     `/purchase/PurchaseRequest/PurchaseRequestsOffers/${info?.row?.original?.id}`
          //   )
          // }
        >
          <div className="bg-[#F3F6F9] p-1 rounded-md">
            <AiOutlineDollarCircle className="text-[18px] text-[#B5B5C3]" />
          </div>
          <span className="text-[14px] text-[#70707e] "> عروض الاسعار</span>
        </div>
        <div>
          <span>
            <Edit
              // action={() => {
              //   navigate(
              //     `/purchase/PurchaseRequest/edit/${info?.row?.original?.id}`
              //   );
              // }}
            />
          </span>
        </div>
        {/* <DeleteMain refetch={refetch} info={info} /> */}
      </ActionMenu>
    </div>
    )

    
   },

];