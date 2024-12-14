import { Box, Grid, Tab, Tabs } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import SelectPurchasePaymentTemplate from "../../../../../molecules/Selects/SelectPurchasePaymentTemplate";
import ItemsInvoicesTable from "./ItemsInvoicesTable";
import {
  headerInvoicePaymentsRequest,
  headerInvoicesPaymentsSchedulingRequest,
  headersDetailsInvoice,
  headersDiscountsAndExtras,
} from "./headers";
import DetailsInvoiceItem from "./DetailsInvoiceItem";
import InvoiceDiscountsAndAdditionsRequest from "./InvoiceDiscountsAndAdditionsRequest";
import InvoicesPaymentsSchedulingRequest from "./InvoicesPaymentsSchedulingRequest";
import InvoicePaymentsRequest from "./InvoicePaymentsRequest";

function TabsInvoicesItem() {
  const [value, setValue] = useState(0);
  const { values, setFieldValue } = useFormikContext();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [globalInvoiceType, setGlobalInvoiceType] = useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const updateAllInvoiceTypes = (selectedValue: string) => {
    const updatedArray = values.invoicesPaymentsSchedulingRequest.map(
      (item) => ({
        ...item,
        invoiceType: selectedValue,
      })
    );
    setFieldValue("invoicesPaymentsSchedulingRequest", updatedArray);
  };

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
                  // backgroundColor: "#fff",
                  borderRadius: "8px",
                  px: "2px",
                  //   py: "16px",
                }}
              >
                {/* <ItemsInvoicesTable
                  moduleName="invoiceDetailsRequest"
                  // headers={headersDetailsInvoice(handleFieldChange )}
                /> */}
                <ItemsInvoicesTable
                  moduleName="invoiceDetailsRequest"
                  headers={headersDetailsInvoice}
                >
                  <DetailsInvoiceItem moduleName="invoiceDetailsRequest" />
                </ItemsInvoicesTable>
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
                {/* <ItemsInvoicesTable
                  moduleName="invoiceDiscountsAndAdditionsRequest"
                  headers={headersDiscountsAndExtras}
                /> */}
                <ItemsInvoicesTable
                  moduleName="invoiceDiscountsAndAdditionsRequest"
                  headers={headersDiscountsAndExtras}
                >
                  <InvoiceDiscountsAndAdditionsRequest moduleName="invoiceDiscountsAndAdditionsRequest" />
                </ItemsInvoicesTable>
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

                {/* <ItemsInvoicesTable
                  moduleName="invoicesPaymentsSchedulingRequest"
                  headers={headerInvoicesPaymentsSchedulingRequest}
                  newItem={{
                    invoiceType: globalInvoiceType,
                  }}
                /> */}
                <ItemsInvoicesTable
                  moduleName="invoicesPaymentsSchedulingRequest"
                  headers={headerInvoicesPaymentsSchedulingRequest}
                >
                  <InvoicesPaymentsSchedulingRequest moduleName="invoicesPaymentsSchedulingRequest" />
                </ItemsInvoicesTable>
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
                {/* <ItemsInvoicesTable
                  moduleName="invoicePaymentsRequest"
                  headers={headerInvoicePaymentsRequest}
                /> */}
                <ItemsInvoicesTable
                  moduleName="invoicePaymentsRequest"
                  headers={headerInvoicePaymentsRequest}
                >
                  <InvoicePaymentsRequest moduleName="invoicePaymentsRequest" />
                </ItemsInvoicesTable>
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default TabsInvoicesItem;
