import React from "react";
import { Grid, MenuItem, Select, FormControl, Switch } from "@mui/material";

function Summaries() {
  const [timePeriod1, setTimePeriod1] = React.useState("شهر");
  const [timePeriod2, setTimePeriod2] = React.useState("شهر");
  const [timePeriod3, setTimePeriod3] = React.useState("شهر");

  return (
    <div className="bg-white rounded-lg !h-full p-6 my-4">
      <span className="text-xl  font-bold">الملخصات</span>
      <Grid container spacing={2} className="mt-4">
        {/* Summary 1 */}
        <Grid
          item
          xs={12}
          className="flex items-center justify-between  gap-4"
        >
          <div className="flex items-center gap-3 ">
            <Switch defaultChecked />
            <span>ملخص عن قيمة المشتريات خلال فترة معينة اخر</span>
          </div>
          <FormControl className="!w-[120px]  border !border-[#00000099] ">
            <Select
              value={timePeriod1}
              onChange={(e) => setTimePeriod1(e.target.value)}
              className="!font-somarLight  !h-[40px]"
            >
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Summary 2 */}
        <Grid item xs={12} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 ">
            <Switch />
            <span>ملخص عن قيمة طلبات الشراء خلال فترة معينة اخر</span>
          </div>

          <FormControl className="!w-[120px]  border !border-[#00000099] ">
            <Select
              value={timePeriod2}
              onChange={(e) => setTimePeriod2(e.target.value)}
              className="!font-somarLight  !h-[40px]"
            >
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Summary 3 */}
        <Grid
          item
          xs={12}
          className="flex items-center mb-16 justify-between gap-4"
        >
          <div className="flex items-center gap-3 ">
            <Switch defaultChecked />
            <span>ملخص عن قيمة أوامر الشراء خلال فترة معينة اخر</span>
          </div>

          <FormControl className="!w-[120px]  border !border-[#00000099] ">
            <Select
              value={timePeriod3}
              onChange={(e) => setTimePeriod3(e.target.value)}
              className="!font-somarLight  !h-[40px]"
            >
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
              <MenuItem value="شهر" className="!font-somarLight">
                شهر
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default Summaries;
