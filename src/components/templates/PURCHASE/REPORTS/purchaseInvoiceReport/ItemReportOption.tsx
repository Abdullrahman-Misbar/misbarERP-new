 import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import SelectMultiItem from "../../../../molecules/SelectMulti/SelectMultiItem";
import SelectUoms from "../../../../molecules/Selects/SelectUoms";
import SelectMultiCategory from "../../../../molecules/SelectMulti/SelectMultiCategory";
   
function ItemReportOption() {
     
      return (
         <>
         <Grid item xs={12} sm={12}>
        <SelectMultiItem name={"itemIds"} label={"الصنف"} 
         />
      </Grid>

      <Grid item xs={12} sm={12}>
        <SelectMultiCategory name={"categoryIds"}   />
      </Grid>
      {/* <Grid item xs={12} sm={12}>
        <SelectUoms name={"uomIds"} index={""}    />
      </Grid> */}
         </>
      )
}

export default ItemReportOption;
