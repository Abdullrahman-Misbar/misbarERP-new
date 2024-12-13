// Import necessary dependencies
import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import { Table } from "../../../../molecules/tantable/Table";
import { generateColumns } from "./generateColumns";

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

export default function Main() {
  const [page, setPage] = useState(0);

  const columns = useMemo(() => generateColumns(page), [page]);

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
          columns={columns}
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
