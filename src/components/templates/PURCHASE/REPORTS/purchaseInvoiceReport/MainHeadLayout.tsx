import { Box, Divider } from "@mui/material";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";

  
function MainHeadLayout() {
  const breadcrumbItems = [
    { label: "المشتريات", link: "/" },
    { label: " التقارير" },
    { label: " تقرير المشتريات اصناف فواتير " },

  ];

  return (
    <div>

      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>

      <Box sx={{display:'flex', flexDirection:'row'}} gap={4}>
       <div>
        Report option 
       </div>
       <Divider >

       </Divider>
       <div>
        Expoler option 
       </div>
       <div>
        Source option 
       </div>
       <div>
        Display Template  option 
       </div>
      </Box>
      
    </div>
  );
}

export default MainHeadLayout;
