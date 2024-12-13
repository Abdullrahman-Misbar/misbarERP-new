// Import necessary dependencies
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Box, Button } from "@mui/material";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { Table } from "../../../../molecules/tantable/Table";

// Define the data for the Manual table
const manualData = [
  {
    id: 1,
    purchaseRequest: "PREQ0001",
    item: "صنف 1",
    unit: "كرتون",
    supplier1: 100,
    supplier2: 95,
    supplier3: 90,
    offerDate: "15/09/2024",
    referenceDoc: "RFQ0001",
    notes: "محتوى",
  },
  {
    id: 2,
    purchaseRequest: "PREQ0002",
    item: "صنف 2",
    unit: "كرتون",
    supplier1: 30,
    supplier2: 25,
    supplier3: 26,
    offerDate: "18/09/2024",
    referenceDoc: "RFQ0002",
    notes: "محتوى",
  },
  {
    id: 3,
    purchaseRequest: "PREQ0003",
    item: "صنف 3",
    unit: "كرتون",
    supplier1: 88,
    supplier2: 87,
    supplier3: 92,
    offerDate: "20/02/2024",
    referenceDoc: "RFQ0003",
    notes: "محتوى",
  },
];

// Define columns for the Manual table
const manualColumns = [
  {
    accessorKey: "id",
    header: "#",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    accessorKey: "purchaseRequest",
    header: "طلب الشراء",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    accessorKey: "item",
    header: "الصنف",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    accessorKey: "unit",
    header: "الوحدة",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    header: "السعر",
    isGroup: true, // Mark as a grouped header
    colSpan: 3, // Number of columns under this group
    columns: [
      { accessorKey: "supplier1", header: "المورد الأول" },
      { accessorKey: "supplier2", header: "المورد الثاني" },
      { accessorKey: "supplier3", header: "المورد الثالث" },
    ],
  },
  {
    accessorKey: "offerDate",
    header: "تاريخ انتهاء العرض",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    accessorKey: "referenceDoc",
    header: "المستند المرجعي",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
  },
  {
    accessorKey: "notes",
    header: "ملاحظات",
    headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
    cell: ({ row }) => {
      const navigate = useNavigate();
      return (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() =>
            navigate(`/purchase/PurchaseRequest/manual/${row.original.id}`)
          }
        >
          اختر
        </Button>
      );
    },
  },
];
export default function Main() {
  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "العمليات" },
    { label: "المقارنه اليدويه" },
  ];
  const navigate = useNavigate();

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
          data={manualData}
          columns={manualColumns}
          isSuccess={true}
          isFetching={false}
          isLoading={false}
          //@ts-ignore
          pageSize={manualData.length}
          showEmptyButton
          showStatusFilter
        />
      </div>
    </>
  );
}
