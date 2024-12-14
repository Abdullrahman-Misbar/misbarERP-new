import { Divider  } from "@mui/material";
import { useFormikContext } from "formik";
import ItemExpOption from "./ItemExpOption";
import InvoiceExpOption from "./InvoiceExpOption";
 
function ExplorerOption() {
        const { values } = useFormikContext<any>();
    
      return (
        <div >
             {values.reportTypesEnum<=6 &&  
                
                  <InvoiceExpOption /> 
                 } 
                 
                 {values.reportTypesEnum>=7 &&  
                  <ItemExpOption /> 
                  } 
         
        <Divider orientation="vertical"  flexItem />
      </div>
      )
}

export default ExplorerOption;
