import { useFormikContext } from "formik";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import SelectAccount from "../../../../../molecules/Selects/SelectAccount";
import SelectCurrency from "../../../../../molecules/Selects/SelectCurrency";
import SelectImpactCost from "../../../../../molecules/Selects/SelectImpactCost";
import { Item_TP } from "../Add/Types&Validation";

function InvoiceDiscountsAndAdditionsRequest({ moduleName }: any) {
  const { values, setFieldValue } = useFormikContext<any>();
  const className = "min-w-[200px]";

  const handleInputChange = (
    index: string | number,
    field: string,
    value: number
  ) => {
    const currentItem = { ...values[moduleName][index] };
    currentItem[field] = Number(value) || 0;
    const total = values.total || 0;

    if (field === "discountRate") {
      currentItem.discountValue = (currentItem.discountRate * total) / 100;
    } else if (field === "discountValue") {
      currentItem.discountRate =
        total > 0 ? (currentItem.discountValue / total) * 100 : 0;
    }

    if (field === "additionRate") {
      currentItem.additionValue = (currentItem.additionRate * total) / 100;
    } else if (field === "additionValue") {
      currentItem.additionRate =
        total > 0 ? (currentItem.additionValue / total) * 100 : 0;
    }

    // const currencyValue = currentItem.convertionFactor || 1;
    // if (field === "convertionRate" || field === "currencyId") {
    //   currentItem.equivalent = currentItem.convertionRate * currencyValue;
    // }

    setFieldValue(`${moduleName}[${index}]`, currentItem);
  };

  return (
    <>
      {values[moduleName]?.map((item: Item_TP, index: number | string) => (
        <tr key={item.tempId}>
          <td className={className}>
            <SelectAccount
              name={`accountId`}
              onChange={(e) => {
                setFieldValue(`${moduleName}[${index}].accountId`, e.value);
              }}
            />
          </td>
          <td className={className}>
            <SelectImpactCost
              name={`influencingOnCost`}
              onChange={(e) =>
                setFieldValue(
                  `${moduleName}[${index}].influencingOnCost`,
                  e.value
                )
              }
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`discountRate`}
              type="number"
              placeholder="نسبة الحسم"
              onChange={(e) =>
                handleInputChange(index, "discountRate", +e.target.value)
              }
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`discountValue`}
              type="number"
              placeholder="قيمة الحسم"
              onChange={(e) =>
                handleInputChange(index, "discountValue", +e.target.value)
              }
              value={item.discountValue || 0}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`additionRate`}
              type="number"
              placeholder="نسبة الإضافة"
              onChange={(e) =>
                handleInputChange(index, "additionRate", +e.target.value)
              }
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`additionValue`}
              type="number"
              placeholder="قيمة الإضافة"
              onChange={(e) =>
                handleInputChange(index, "additionValue", +e.target.value)
              }
              value={item.additionValue || 0}
            />
          </td>
          <td className={className}>
            <SelectCurrency
              name={`currencyId`}
              onChange={(e) => {
                setFieldValue(`${moduleName}[${index}].currencyId`, e.value);
                setFieldValue(
                  `${moduleName}[${index}].convertionRate`,
                  e.convertionFactor
                );
              
              }}
              value={item?.currencyId}
            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`convertionRate`}
              type="number"
              placeholder=" التعادل"
              // onChange={(e) =>
              //   handleInputChange(index, "convertionRate", +e.target.value)
              // }
              value={+item.convertionRate}

            />
          </td>
          <td className={className}>
            <BaseInputRepeater
              name={`equivalent`}
              type="number"
              placeholder="المكافئ"
              value={item.equivalent || 0}
              readOnly
            />
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

export default InvoiceDiscountsAndAdditionsRequest;
