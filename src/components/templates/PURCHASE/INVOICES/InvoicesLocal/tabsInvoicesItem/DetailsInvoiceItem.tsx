import { useFormikContext } from "formik";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import SelectItem from "../../../../../molecules/Selects/SelectItem";
import SelectUoms from "../../../../../molecules/Selects/SelectUoms";

type DetailsInvoiceItem_TP = {
  moduleName: string;
};
type Item_TP = {
  tempId: any;
};

function DetailsInvoiceItem({ moduleName }: DetailsInvoiceItem_TP) {
  const { values, setFieldValue } = useFormikContext<any>();
  const className = "min-w-[200px]";

  const handleInputChange = (
    index: string | number,
    field: string,
    value: number
  ) => {
    const currentItem = { ...values[moduleName][index] };
    currentItem[field] = Number(value) || 0;

    currentItem.total = currentItem.quantity * currentItem.price;

    if (field === "discountRate") {
      currentItem.discountValue =
        (currentItem.discountRate * currentItem.total) / 100;
    } else if (field === "discountValue") {
      currentItem.discountRate =
        currentItem.total > 0
          ? (currentItem.discountValue * 100) / currentItem.total
          : 0;
    }

    currentItem.totalAfterDiscount =
      currentItem.total - currentItem.discountValue;

    currentItem.extraValue =
      (currentItem.extraRate * currentItem.totalAfterDiscount) / 100;

    currentItem.totalAfterExtra =
      currentItem.totalAfterDiscount + currentItem.extraValue;

    currentItem.vat = (currentItem.taxRate * currentItem.totalAfterExtra) / 100;

    currentItem.totalAfterTax = currentItem.totalAfterExtra + currentItem.vat;

    setFieldValue(`${moduleName}[${index}]`, currentItem);
  };

  return (
    <>
      {values[moduleName]?.map((item: Item_TP, index: number | string) => (
        <tr key={item.tempId}>
          <td className={className}>
            <SelectItem
              name={`itemId`}
              label=""
              //@ts-ignore
              onChange={(e) => {
                setFieldValue(`${moduleName}[${index}].itemId`, e.value);
                setFieldValue(`${moduleName}[${index}].uoms`, e.uoms);
              }}
              value={item?.itemId}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`quantity`}
              type="number"
              placeholder="الكمية"
              //@ts-ignore

              onChange={(e) =>
                handleInputChange(index, "quantity", +e.target.value)
              }
              value={item?.quantity}
            />
          </td>
          <td className={className}>
            <SelectUoms
              name={`${moduleName}[${values[moduleName]?.length - 1}].uomId`}
              index={index}
              moduleName={moduleName}
              value={item?.uomId}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`price`}
              type="number"
              placeholder="التكلفة"
              //@ts-ignore

              onChange={(e) =>
                handleInputChange(index, "price", +e.target.value)
              }
              value={item?.cost}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`total`}
              type="number"
              placeholder="الإجمالي"
              //@ts-ignore

              value={values[moduleName]?.[index]?.total || 0}
              disabled
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`discountRate`}
              type="number"
              placeholder="الخصم%"
              value={values[moduleName]?.[index]?.discountRate || 0}
              //@ts-ignore

              onChange={(e) =>
                handleInputChange(index, "discountRate", e.target.value)
              }
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`discountValue`}
              type="number"
              placeholder="قيمة الخصم"
              //@ts-ignore

              value={item.discountValue || 0}
              //   readOnly
              onChange={(e: { target: { value: number } }) =>
                handleInputChange(index, "discountValue", e.target.value)
              }
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`totalAfterDiscount`}
              type="number"
              placeholder="الإجمالي بعد الخصم"
              //@ts-ignore

              value={item.totalAfterDiscount || 0}
              readOnly
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`extraRate`}
              type="number"
              placeholder="الإضافة%"
              //@ts-ignore

              onChange={(e) =>
                handleInputChange(index, "extraRate", e.target.value)
              }
              value={item?.extraRate}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`extraValue`}
              type="number"
              placeholder="الإضافة"
              //@ts-ignore

              value={item.extraValue || 0}
              readOnly
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`totalAfterExtra`}
              type="number"
              placeholder="الإجمالي بعد الإضافة"
              //@ts-ignore

              value={item.totalAfterExtra || 0}
              readOnly
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`taxRate`}
              type="number"
              placeholder="معدل الضريبة"
              //@ts-ignore

              onChange={(e) =>
                handleInputChange(index, "taxRate", e.target.value)
              }
              value={item.taxRate || 0}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`vat`}
              type="number"
              placeholder="ضريبة القيمة المضافة"
              //@ts-ignore

              value={item.vat || 0}
              readOnly
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`totalAfterTax`}
              type="number"
              placeholder="الإجمالي بعد الضريبة"
              //@ts-ignore

              value={item?.totalAfterTax?.toFixed(2) || 0}
              readOnly
            />
          </td>
          <td className="min-w-[200px] border-l px-1 border-b py-1">
            <BaseInputRepeater
              name={`freeQuantities`}
              type="number"
              placeholder="الكميات المجانية"
              value={item?.freeQuantities}
            />
          </td>
          <td className="min-w-[200px] border-l px-1 border-b py-1">
            <BaseInputRepeater
              name={`note`}
              type="text"
              placeholder="الملاحظات"
              value={item?.note}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default DetailsInvoiceItem;
