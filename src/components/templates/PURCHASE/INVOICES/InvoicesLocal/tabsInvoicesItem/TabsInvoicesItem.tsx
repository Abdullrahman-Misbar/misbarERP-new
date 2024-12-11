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
  // useEffect(() => {
  //   if (values?.invoiceDetailsRequest) {
  //     const updatedValues = [...values.invoiceDetailsRequest]; // نسخ البيانات الحالية

  //     updatedValues.forEach((item, index) => {
  //       const quantity = +item.quantity || 0;
  //       const price = +item.price || 0;
  //       const total = quantity * price;

  //       const currentTotal = +item.total || 0;
  //       const currentDiscountValue = +item.discountValue || 0;
  //       const currentDiscountRate = +item.discountRate || 0;

  //       // تحديث الإجمالي فقط إذا كان مختلفًا
  //       if (total !== currentTotal) {
  //         updatedValues[index].total = total;
  //       }

  //       // إذا كانت نسبة الخصم موجودة نحسب قيمة الخصم
  //       if (currentDiscountRate > 0 && total > 0) {
  //         const calculatedDiscountValue = (currentDiscountRate * total) / 100;
  //         if (calculatedDiscountValue !== currentDiscountValue) {
  //           updatedValues[index].discountValue = calculatedDiscountValue;
  //         }
  //       }

  //       // إذا كانت قيمة الخصم موجودة نحسب نسبة الخصم
  //       if (currentDiscountValue > 0 && total > 0) {
  //         const calculatedDiscountRate = (currentDiscountValue / total) * 100;
  //         if (calculatedDiscountRate !== currentDiscountRate) {
  //           updatedValues[index].discountRate = calculatedDiscountRate;
  //         }
  //       }

  //       // حساب الإجمالي بعد الخصم فقط إذا كان مختلفًا
  //       const totalAfterDiscount = total - currentDiscountValue;
  //       if (totalAfterDiscount !== item.totalAfterDiscount) {
  //         updatedValues[index].totalAfterDiscount = totalAfterDiscount;
  //       }
  //     });

  //     // تحديث القيم فقط إذا كان هناك اختلاف
  //     if (JSON.stringify(updatedValues) !== JSON.stringify(values.invoiceDetailsRequest)) {
  //       setFieldValue("invoiceDetailsRequest", updatedValues, false);
  //     }
  //   }
  // }, [values.invoiceDetailsRequest, setFieldValue]);

  const handleFieldChange = (fieldName, value, index) => {
    const quantity = +values.invoiceDetailsRequest[index]?.quantity || 0;
    const price = +values.invoiceDetailsRequest[index]?.price || 0;
    const total = quantity * price;

    let discountRate = +values.invoiceDetailsRequest[index]?.discountRate || 0;
    let discountValue =
      +values.invoiceDetailsRequest[index]?.discountValue || 0;
    let extraRate = +values.invoiceDetailsRequest[index]?.extraRate || 0;
    let extraValue = +values.invoiceDetailsRequest[index]?.extraValue || 0;

    // تحديث الحقل المدخل
    setFieldValue(`invoiceDetailsRequest[${index}].${fieldName}`, value, false);

    // حساب الخصم
    if (fieldName === "discountRate") {
      discountValue = (value * total) / 100;
      setFieldValue(
        `invoiceDetailsRequest[${index}].discountValue`,
        discountValue,
        false
      );
    } else if (fieldName === "discountValue") {
      discountRate = (value / total) * 100;
      setFieldValue(
        `invoiceDetailsRequest[${index}].discountRate`,
        discountRate,
        false
      );
    }

    // حساب الإضافات
    if (fieldName === "extraRate") {
      extraValue = (value * total) / 100;
      setFieldValue(
        `invoiceDetailsRequest[${index}].extraValue`,
        extraValue,
        false
      );
    } else if (fieldName === "extraValue") {
      extraRate = (value * 100) / total;
      setFieldValue(
        `invoiceDetailsRequest[${index}].extraRate`,
        extraRate,
        false
      );
    }

    // حساب الإجماليات
    const totalAfterDiscount = total - discountValue;
    const totalAfterExtra = totalAfterDiscount + extraValue;

    // حساب الضريبة
    const vatRate = 15;
    let vat = 0;
    let totalAfterTax = 0;

    if (+values.withTax === 1) {
      vat = (totalAfterExtra * vatRate) / 100;
      totalAfterTax = totalAfterExtra + vat;
    } else if (+values.withTax === 0) {
      vat = (totalAfterExtra * vatRate) / 100 + vatRate;
      totalAfterTax = totalAfterExtra;
    }

    // تحديث القيم المحسوبة
    setFieldValue(`invoiceDetailsRequest[${index}].total`, total, false);
    setFieldValue(
      `invoiceDetailsRequest[${index}].totalAfterDiscount`,
      totalAfterDiscount,
      false
    );
    setFieldValue(
      `invoiceDetailsRequest[${index}].totalAfterExtra`,
      totalAfterExtra,
      false
    );
    setFieldValue(`invoiceDetailsRequest[${index}].vat`, vat, false);
    setFieldValue(
      `invoiceDetailsRequest[${index}].totalAfterTax`,
      totalAfterTax,
      false
    );
  };

  // useEffect(() => {
  //   const updatedValues = values.invoiceDetailsRequest.map((item) => {
  //     const quantity = +item.quantity || 0;
  //     const price = +item.price || 0;
  //     const total = quantity * price;

  //     let discountValue = item.discountValue || 0;
  //     let discountRate = item.discountRate || 0;

  //     if (item.discountRate > 0) {
  //       discountValue = (item.discountRate * total) / 100;
  //     } else if (item.discountValue > 0) {
  //       discountRate = (item.discountValue / total) * 100;
  //     }

  //     const extraValue =
  //       item.extraRate > 0 ? (item.extraRate * total) / 100 : item.extraValue || 0;
  //     const extraRate =
  //       item.extraValue > 0 ? (item.extraValue * 100) / total : item.extraRate || 0;

  //     const totalAfterDiscount = total - discountValue;
  //     const totalAfterExtra = totalAfterDiscount + extraValue;

  //     const vatRate = 15;
  //     let vat = 0;
  //     let totalAfterTax = 0;

  //     if (+values.withTax === 1) {
  //       vat = (totalAfterExtra * vatRate) / 100;
  //       totalAfterTax = totalAfterExtra + vat;
  //     } else if (+values.withTax === 0) {
  //       vat = (totalAfterExtra * vatRate) / (100 + vatRate);
  //       totalAfterTax = totalAfterExtra;
  //     }

  //     return {
  //       ...item,
  //       total,
  //       discountValue,
  //       discountRate,
  //       extraValue,
  //       extraRate,
  //       totalAfterDiscount,
  //       totalAfterExtra,
  //       vat,
  //       totalAfterTax,
  //     };
  //   });

  //   const isChanged =
  //     JSON.stringify(updatedValues) !== JSON.stringify(values.invoiceDetailsRequest);

  //   if (isChanged) {
  //     setFieldValue("invoiceDetailsRequest", updatedValues, false);
  //   }
  // }, [values.invoiceDetailsRequest, values.withTax, setFieldValue]);

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
