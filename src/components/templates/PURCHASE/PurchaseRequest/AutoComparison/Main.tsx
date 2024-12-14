// Import necessary dependencies
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Table } from "../../../../molecules/tantable/Table";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import { generateColumns } from "./generateColumns";

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

export default function App() {
  const [page, setPage] = useState(0);

  const columns = useMemo(() => generateColumns(page), [page]);
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
