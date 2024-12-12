import { Box, Button, Divider, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import { viewReportFromServer } from "../../../../molecules/ReoprtViwer";
import InvoiceExpOption from "./InvoiceExpOption";
import MainHeadLayout from "./MainHeadLayout";
import ReportOptions from "./ReportOptions";
import ReportSource from "./ReportSource";
import { mainENdPoint } from "./const";

function Main() {
  const initialValues = {
    isDetails: true,
    isLocalPurchase: true,
    isForeignPurchase: false,
    groupByType: false,
    unApprovedInvoices: false,
    groupPartnerIds: null,
    costCenterIds: null,
    accountIds: null,
    branchIds: null,
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
                className="grid grid-cols-3 p-4 rounded-md "
              >
                <div className="flex mt-4">
                  <ReportOptions />
                  <Divider orientation="vertical"  />
                </div>
                <div className="flex mr-5">
                  <InvoiceExpOption />
                  <Divider orientation="vertical" flexItem />
                </div>
                <div className="flex mr-5">
                  <ReportSource />
                  {/* <Divider orientation="vertical" flexItem /> */}
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
