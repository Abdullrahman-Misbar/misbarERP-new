import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import SelectPurchasePaymentTerm from "../../../../../molecules/Selects/SelectPurchasePaymentTerm";

function InvoicesPaymentsSchedulingRequest({ moduleName }: any) {
  const { values, setFieldValue } = useFormikContext<any>();
  const className = "min-w-[200px]";
  const calculateDueDate = (invoiceDate: string, creditDays: number) => {
    const date = new Date(invoiceDate);
    date.setDate(date.getDate() + creditDays);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      {values[moduleName]?.map((item: any, index: number | string) => (
        <tr key={item.tempId}>
          <td className={className}>
            <SelectPurchasePaymentTerm
              name={`paymentTermId`}
              index={index}
              moduleName={moduleName}
              onChange={(e) => {
                setFieldValue(`${moduleName}[${index}].paymentTermId`, e.value);

                setFieldValue(
                  `${moduleName}[${index}].invoicePortion`,
                  e.data?.invoicePortion
                );
                const dueDate = calculateDueDate(
                  values?.invoiceDate,
                  e.data?.creditDays || 0
                );
                setFieldValue(`${moduleName}[${index}].dueDate`, dueDate);
                setFieldValue(
                  `${moduleName}[${index}].creditDays`,
                  e.data?.creditDays
                );
                setFieldValue(
                  `${moduleName}[${index}].hasDiscount`,
                  e.data?.hasDiscount
                );
                setFieldValue(
                  `${moduleName}[${index}].discount`,
                  e.data?.discount
                );
                setFieldValue(
                  `${moduleName}[${index}].dueAmount`,
                  (e.data?.invoicePortion * values?.total) / 100
                );
                setFieldValue(
                  `${moduleName}[${index}].discountAmount`,
                  e.data?.isDiscountValueOrRatio == 1
                    ? (e.data?.discount *
                        ((e.data?.invoicePortion * values?.total) / 100)) /
                        100
                    : 0
                );
                setFieldValue(
                  `${moduleName}[${index}].dueAmountAfterDiscount`,
                  // (e.data?.isDiscountValueOrRatio == 1  ?  e.data?.discount * values?.total / 100  :   values?.total) * e.data?.discount / 100
                  (e.data?.invoicePortion * values?.total) / 100 -
                    (e.data?.isDiscountValueOrRatio == 1
                      ? (e.data?.discount *
                          ((e.data?.invoicePortion * values?.total) / 100)) /
                        100
                      : 0)
                );
              }}
            />
          </td>

          <td className={className}>
            <BaseInputRepeater
              name={`invoicePortion`}
              type="number"
              placeholder="نسبة الفاتورة"
              // onChange={(e) =>
              //   handleInputChange(index, "invoicePortion", +e.target.value)
              // }
              value={item?.invoicePortion}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`dueAmount`}
              type="number"
              placeholder="المبلغ المستحق"
              //   onChange={(e) =>
              //     handleInputChange(index, "dueAmount", +e.target.value)
              //   }
              value={item?.dueAmount}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`creditDays`}
              type="number"
              placeholder="أيام الائتمان "
              // onChange={(e) =>
              //   handleInputChange(index, "creditDays", +e.target.value)
              // }
              value={item?.creditDays}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputDatepicker
              name={`dueDate`}
              label=""
              placeholder="تاريخ الاستحقاق"
              value={item?.dueDate}
              disabled
              // onChange={(e) =>
              //   handleInputChange(index, "dueDate", +e.target.value)
              // }
            />
          </td>

          <td className={className}>
            <BaseInputRepeater
              name={`hasDiscount`}
              type="text"
              placeholder="لديه خصم؟"
              value={item?.hasDiscount ? "نعم" : "لا"}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`discountAmount`}
              type="number"
              placeholder="مبلغ الخصم"
              value={item?.discountAmount}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`dueAmountAfterDiscount`}
              type="number"
              placeholder="المبلغ المستحق بعد الخصم"
              value={item?.dueAmountAfterDiscount}
            />
          </td>
          <td className={className}>
            <BaseInputDatepicker
              name={`discountDueDate`}
              placeholder="تاريخ السداد للحصول على الخصم"
            />
          </td>
          <td className={` !min-w-[130px] ${className}`}>
            {/* <BaseInputRepeater
              name={`status`}
              type="number"
              placeholder="الحالة"
            /> */}
            <p className="bg-red-500 p-1 px-5 w-fit text-center m-auto rounded-md text-white ">
              غير مدفوع
            </p>
          </td>
          <td className={` !min-w-[100px] ${className}`}>
            {/* <BaseInputRepeater
              name={`additionRate`}
              type="number"
              placeholder="دفع"
            /> */}

            <button
              type="button"
              className="bg-[#3F51B5] p-1 px-5 w-fit text-center m-auto rounded-md text-white "
            >
              دفع
            </button>
          </td>
          <td className="min-w-[200px] border-l px-1 border-b py-1">
            <BaseInputRepeater
              name={`note`}
              type="text"
              placeholder="الملاحظات"
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default InvoicesPaymentsSchedulingRequest;
