import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import { Item_TP } from "../Add/Types&Validation";

function InvoicePaymentsRequest({ moduleName }: any) {
  const { values } = useFormikContext<any>();
  const className = "min-w-[200px]";

  return (
    <>
      {values[moduleName]?.map((item: Item_TP, index: number | string) => (
        <tr key={item.tempId}>
          <td className={className}>
            <BaseInputDatepicker
              name={`invoicePortion`}
              label=""
              placeholder=""
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`dueAmount`}
              type="number"
              placeholder=" المبلغ المدفوع	"
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`dueAmount`}
              type="number"
              placeholder=" طريقة الدفع		"
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default InvoicePaymentsRequest;
