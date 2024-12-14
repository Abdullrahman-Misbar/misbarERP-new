import { Box, Button, Divider, Paper } from "@mui/material";
import { Form, Formik, useFormikContext } from "formik";
import { useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import { viewReportFromServer } from "../../../../molecules/ReoprtViwer";
import InvoiceExpOption from "./InvoiceExpOption";
import MainHeadLayout from "./MainHeadLayout";
import ReportOptions from "./ReportOptions";
import ReportSource from "./ReportSource";
import { mainENdPoint } from "./const";
import ItemExpOption from "./ItemExpOption";
import ExplorerOption from "./ExplorerOption";

function Main() {

   const initialValues = {
    isDetails: true,
    itemCode:null,
    itemIds:null,
    warehouseIds:null,
    categoryIds:null,
    variantIds:null,
    currencyIds:null,
    uomIds:null,
    moveTypeIds:null,
    partnerIds:null,
    attributeVar:null,
    emptyItems:null,
    zeroBalanceQuantity:null,
    inventoryOpiningBalance:null,
    filterFlagsEnum:0,
    groupBy:0,


    isLocalPurchase: true,
    isForeignPurchase: true,
    groupByType: false,
    unApprovedInvoices: false,
    groupPartnerIds: null,
    costCenterIds: null,
    accountIds: null,
    branchIds: null,
    startDate:new Date(new Date().getFullYear(), 0, 1), 
    endDate:new Date(),
    reportTypesEnum: 1,
    compareWithPreviousYear: false,
    period: 1,
    DailyDate: null,
    Month: null,
    NumberOfPeriods: 0,
    PreviousPurchaseBalance: false,
    NumberOfPreviousYears: 0,
  };

  const postEndPoint = `${mainENdPoint}`;
  const { mutate } = useMutate<string | URL>({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: (data) => {
      notify("success");
      viewReportFromServer(data);
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: any) => {
    const {
      copValue,
      uoms,
      editable,
      cancelRequestEndPoint,
      deleteEndPoint,
      ...valuesWithoutCopValue
    } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);

    mutate(jsonData);
  };
    // const { values } = useFormikContext<any>();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any) => handleSubmit(values)}
        
        
      >
        <Form>
          <MainHeadLayout />
          <Paper elevation={2} className=" p-5">
            <>
              <div
                // sx={{ display: "flex", flexDirection: "row" }}
                // justifyContent="space-between"
                // mb={2}
                // p={2}
                className="grid grid-cols-3 p-4 rounded-md  "
              >
                <div className= "flex mr-8">
                  <ReportOptions /> 
                  <Divider orientation="vertical"  flexItem />
                </div>
               
                  <ExplorerOption />
                  <div>
                  <ReportSource />
                  </div>
                 
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  mt: 3,
                  mb: 3,
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                  type="submit"
                >
                  موافق
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  إلغاء
                </Button>
              </Box>
            </>
          </Paper>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
