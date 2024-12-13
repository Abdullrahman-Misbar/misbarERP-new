import { Button } from "@mui/material";

type RefetchFunction = () => void;

export const generateColumns = (
  page?: number,
  refetch?: RefetchFunction,
  navigate?: any
): any[] => {
  return [
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
      isGroup: true,
      colSpan: 3,
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
    },
    {
      accessorKey: "action",
      header: "اختيار",
      headerStyle: { backgroundColor: "#f5f5f5", border: "1px solid #ddd" },
      cell: ({ row }) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            /*  onClick={() =>
              navigate(`/purchase/PurchaseRequest/manual/${row.original.id}`)
            } */
          >
            اختر
          </Button>
        );
      },
    },
  ];
};
