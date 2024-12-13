import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../../utils/helpers";
import { Box, Button } from "@mui/material";

type RefetchFunction = () => void;

export const generateColumns = (
  page?: number,
  refetch?: RefetchFunction,
  navigate?: any
): ColumnDef<any>[] => {
  return [
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
      cell: (info) => (
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
      ),
    },
  ];
};
