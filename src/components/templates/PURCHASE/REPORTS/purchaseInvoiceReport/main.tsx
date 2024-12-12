import { Form, Formik } from "formik";
import MainHeadLayout from "./MainHeadLayout";
import { Box,    Button,    CircularProgress, Divider, Paper } from "@mui/material";
import ReportOptions from "./ReportOptions";
import InvoiceExpOption from "./InvoiceExpOption";
import ReportSource from "./ReportSource";
import { mainENdPoint } from "./const";
import { useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import { viewReportFromServer } from "../../../../molecules/ReoprtViwer";
  
 
function Main() {
    const initialValues = {
    isDetails:  true,
    isLocalPurchase:true,
    isForeignPurchase:false,
    groupByType:false,
    unApprovedInvoices:false,
    groupPartnerIds:null,
    costCenterIds:null,
    accountIds:null,
    branchIds:null,
    reportTypesEnum:1,
    compareWithPreviousYear:false,
    period:1,
    DailyDate:null,
    Month:null,
    NumberOfPeriods:0,
    PreviousPurchaseBalance:false,
    NumberOfPreviousYears:0
      }

    const postEndPoint =  `${mainENdPoint}`;
      const { mutate } = useMutate<string|URL>({
        mutationKey: [postEndPoint],
        endpoint: postEndPoint,
        onSuccess: (data) => {
          notify("success");
          viewReportFromServer(data)
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
      <Formik initialValues={initialValues} 
      onSubmit={(values: any) => handleSubmit(values)}>
        <Form>
          <MainHeadLayout />
          <Paper 
    elevation={3}
      sx={{
        // padding: 2,
        // margin: 2,
        // width: '100%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // // maxHeight: '80vh',
        // overflowY: 'auto'
      }}>
<>
<Box sx={{display:'flex', flexDirection:'row' }}    justifyContent='space-between' mb={2} p={2}>
       <div>
       <ReportOptions/>
       </div>
       <Divider orientation='vertical' flexItem />
       <div>
      <InvoiceExpOption/>
       </div>
       <Divider orientation='vertical' flexItem />
       <div>
        <ReportSource/>
       </div>
       <Divider orientation='vertical' flexItem />
      </Box>
      <Box sx={{ display: 'flex', flexDirection:'row', justifyContent: 'end', mt: 3, mb: 3 ,gap:2 }}>
          
      <Button variant='contained' color='primary' sx={{fontWeight:'bold'}}  type='submit'  >
               موافق
            </Button>
      <Button variant='contained' color='primary'  sx={{fontWeight:'bold'}}  >
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