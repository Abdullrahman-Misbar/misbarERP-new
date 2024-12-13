// Import necessary dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Table } from "../../../../molecules/tantable/Table";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";

// Define the data and columns
const data = [
  {
    id: 1,
    priceRequest: "PREQ0001",
    supplier: "المورد الأول",
    offerDate: "15/09/2024",
    referenceDoc: "RFQ0001",
    total: "12450",
    notes: "محتوى",
  },
  {
    id: 2,
    priceRequest: "PREQ0002",
    supplier: "المورد الثاني",
    offerDate: "18/09/2024",
    referenceDoc: "RFQ0001",
    total: "12.500",
    notes: "محتوى",
  },
  {
    id: 3,
    priceRequest: "PREQ0003",
    supplier: "المورد الثالث",
    offerDate: "20/02/2024",
    referenceDoc: "RFQ0001",
    total: "12600",
    notes: "محتوى",
  },
];

const columns = [
  { accessorKey: "id", header: "#" },
  { accessorKey: "priceRequest", header: "عرض السعر" },
  { accessorKey: "supplier", header: "المورد" },
  { accessorKey: "offerDate", header: "تاريخ انتهاء العرض" },
  { accessorKey: "referenceDoc", header: "المستند المرجعي" },
  {
    accessorKey: "total",
    header: "الإجمالي",
    cell: ({ getValue }) => (
      <Box
        sx={{
          backgroundColor: "#DFFFD6",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {getValue()}
      </Box>
    ),
  },
  { accessorKey: "notes", header: "ملاحظات" },
  {
    accessorKey: "approve",
    header: "اعتماد عرض السعر",
    cell: ({ row }) => {
      const navigate = useNavigate();
      return (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() =>
            navigate(`/purchase/PurchaseRequest/auto/${row.original.id}`)
          }
        >
          اعتماد
        </Button>
      );
    },
  },
];

export default function App() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "العمليات" },
    { label: "المقارنه الاليه" },
  ];
  return (
    <>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>

      <div className="bg-white p-4 mb-2">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate(-1)}
        >
          رجوع
        </Button>{" "}
      </div>

      <div className="bg-white p-4  mb-2">
        <Table
          data={data}
          columns={columns}
          isSuccess={true}
          isFetching={false}
          isLoading={false}
          //@ts-ignore
          pageSize={data.length}
          showEmptyButton
          showStatusFilter
        />
      </div>
    </>
  );
}
