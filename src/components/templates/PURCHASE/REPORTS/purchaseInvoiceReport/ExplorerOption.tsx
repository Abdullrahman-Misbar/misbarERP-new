import { Divider  } from "@mui/material";
import { useFormikContext } from "formik";
import ItemExpOption from "./ItemExpOption";
import InvoiceExpOption from "./InvoiceExpOption";
 
function ExplorerOption() {
        const { values } = useFormikContext<any>();
    
      return (
        <div className= "flex mr-4">
             {values.reportTypesEnum<=2 &&  
                
                  <InvoiceExpOption /> 
                 } 
                 
                 {values.reportTypesEnum===3 &&  
                  <ItemExpOption /> 
                  } 
         
        <Divider orientation="vertical"  flexItem />
      </div>
      )
}

export default ExplorerOption;
