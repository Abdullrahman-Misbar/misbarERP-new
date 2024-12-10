import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemsInvoicesTable from "./ItemsInvoicesTable";
import {
  headerInvoicePaymentsRequest,
  headerInvoicesPaymentsSchedulingRequest,
  headers,
  headersDetailsInvoice,
  headersDiscountsAndExtras,
} from "./headers";
import SelectPurchasePaymentTemplate from "../../../../../molecules/Selects/SelectPurchasePaymentTemplate";
import { useFormikContext } from "formik";

function TabsInvoicesItem() {
  const [value, setValue] = useState(0);
  const { values, setFieldValue } = useFormikContext();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [globalInvoiceType, setGlobalInvoiceType] = useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // تحديث جميع العناصر عند تغيير القيمة
  const updateAllInvoiceTypes = (selectedValue: string) => {
    const updatedArray = values.invoicesPaymentsSchedulingRequest.map(
      (item) => ({
        ...item,
        invoiceType: selectedValue,
      })
    );
    setFieldValue("invoicesPaymentsSchedulingRequest", updatedArray);
  };

  // تحديث القيمة لجميع العناصر عند تغيير القيمة العامة
  useEffect(() => {
    if (globalInvoiceType) {
      updateAllInvoiceTypes(globalInvoiceType);
    }
  }, [globalInvoiceType]);

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
                <ItemsInvoicesTable
                  moduleName="invoiceDiscountsAndAdditionsRequest"
                  headers={headersDiscountsAndExtras}
                />
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
                <div className="w-1/4 mb-4">
                  <SelectPurchasePaymentTemplate
                    name={`invoicesPaymentsSchedulingRequest[${selectedIndex}].invoiceType`}
                    onChange={(e) => setGlobalInvoiceType(e.value)}

                  />
                </div>

                <ItemsInvoicesTable
                  moduleName="invoicesPaymentsSchedulingRequest"
                  headers={headerInvoicesPaymentsSchedulingRequest}
                  newItem={{
                    invoiceType: globalInvoiceType,
                  }}
                />
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
                <ItemsInvoicesTable
                  moduleName="invoicePaymentsRequest"
                  headers={headerInvoicePaymentsRequest}
                />
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default TabsInvoicesItem;
