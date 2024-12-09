import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import ItemsInvoicesTable from "./ItemsInvoicesTable";
import { headers, headersDetailsInvoice } from "./headers";

function TabsInvoicesItem() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", padding: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="product tabs">
          <Tab className="!font-somarBold" label="تفاصيل الفاتورة" />
          <Tab className="!font-somarBold" label="الخصومات والاضافات" />
          <Tab className="!font-somarBold" label="شروط السداد وجدولة الدفعات" />
          <Tab className="!font-somarBold" label="الدفعات" />
        </Tabs>
        {value === 0 && (
          <Box sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  px: "2px",
                  //   py: "16px",
                }}
              >
                <ItemsInvoicesTable
                  moduleName="invoiceDetailsRequest"
                  headers={headersDetailsInvoice}
                />
              </Box>
            </Grid>
          </Box>
        )}
        {value === 1 && (
          <Box sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  px: "2px",
                  //   py: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "20px",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    marginBottom: "32px",
                  }}
                  variant="h6"
                >
                  قائمة الاصناف
                </Typography>
              </Box>
            </Grid>
          </Box>
        )}
        {value === 2 && (
          <Box sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  px: "2px",
                  //   py: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "20px",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    marginBottom: "32px",
                  }}
                  variant="h6"
                >
                  قائمة الاصناف
                </Typography>
                {/* <MainSelectChoseModule
                setRows={setInvoicesPaymentsSchedulingRequest}
                rows={invoicesPaymentsSchedulingRequest}
              /> */}
              </Box>
            </Grid>
          </Box>
        )}
        {value === 3 && (
          <Box sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  px: "2px",
                  //   py: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "20px",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    marginBottom: "32px",
                  }}
                  variant="h6"
                >
                  قائمة الاصناف
                </Typography>
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default TabsInvoicesItem;
