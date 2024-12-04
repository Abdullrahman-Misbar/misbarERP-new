import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ExportIcon from "../../../assets/icon/ExportIcon";
import ImportReadyFile from "./ImportReadyFile";

// TabPanel component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// a11yProps for accessibility
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ImportExcelModal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs with custom font */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          fontFamily: "Somar-Medium", // Apply custom font to the Tabs
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="!font-somar " label="تحميل القالب" {...a11yProps(0)} />
          <Tab className="!font-somar "  label="استيراد ملف جاهز" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <div className="w-full border border-dashed border-gray-300 rounded-lg p-6 text-center">
          {/* Centered Icon */}
          <div className="flex justify-center py-4">
            <ExportIcon />
          </div>

          {/* Heading */}
          <Typography
            className=" font-semibold text-lg text-gray-700 "
            sx={{
              fontFamily: "Somar-Light",
              margin: "10px 0",
              padding: "24px 16px",
            }}
          >
            تحميل القالب أو{" "}
            <a href="#" className="text-[#3F51B5] underline">
              اضغط لتحميل القالب
            </a>
          </Typography>

          {/* Description */}
          <Typography
            className="font-somar text-sm text-light mt-4"
            sx={{ fontFamily: "Somar-Light" }}
          >
            أولاً: قم بتحميل الملف المجهز مسبقاً ومن ثم قم بتعبئته بالبيانات حسب
            التقسيم والترتيب المحدد للأعمدة بعد ذلك يمكنك تحديد مسار الملف
            لاستيراد البيانات منه.
          </Typography>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Typography
          sx={{ fontFamily: "Somar-Medium" }}
          className="font-somar text-center"
        >
          <ImportReadyFile />
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
