import { Box, Grid } from "@mui/material";
import SelectMultiBranch from "../../../../molecules/SelectMulti/SelectMultiBranch";
import SelectMultiWarehouse from "../../../../molecules/SelectMulti/SelectMultiWarehouse";
import SelectMultiAccount from "../../../../molecules/SelectMulti/SelectMultiAccount";
import SelectMultiPartnerGroup from "../../../../molecules/SelectMulti/SelectMultiPartnerGroup";
import SelectMultiPartner from "../../../../molecules/SelectMulti/SelectMultiPartner";
import SelectMultiCostCenter from "../../../../molecules/SelectMulti/SelectMultiCostCenter";
import SelectMultiCurrency from "../../../../molecules/SelectMulti/SelectMultiCurrency";
  
function ReportOptions() {
    return (
       

     
      <Grid container     >
        <Grid item xs={12} sm={12} alignContent={'center'}>
          <p className="text-l  center" >خيارات التقرير  </p>

        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiBranch name={"branchIds"} />
        


        
   


        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiWarehouse name={"branchId1"} />
        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiAccount name={"accountIds"} labelName={"الحساب"} />
        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiPartnerGroup name={"groupPartnerIds"} />
        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiPartner name={"branchId4"} />
        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiCostCenter name={"costCenterIds"} />
        </Grid>
        <Grid item xs={6} sm={7}>
        <SelectMultiCurrency name={"branchId6"} labelName={" العملة"} />
        </Grid>
 

        
      </Grid>
      

     

            
      
    )
  }
  
  export default ReportOptions;
