import { Form, Formik } from "formik";
import CloseOrder from "./CloseOrder";
import Orders from "./Orders";
import Warnings from "./Warnings";

function Main() {
  const initialValues = {
    settings: [
      {
        id: 1,
        settingId: 1,
        isDisabled: true,
        settingKey: "approveOrderBelowValue",
        settingValue: "0",
      },
      {
        id: 2,
        settingId: 2,
        isDisabled: true,
        settingKey: "approveOrderBelowDays",
        settingValue: "5",
      },
      {
        id: 3,
        settingId: 3,
        isDisabled: true,
        settingKey: "comparePriceOffers",
        settingValue: "",
      },
      {
        id: 4,
        settingId: 4,
        isDisabled: true,
        settingKey: "purchaseAgreements",
        settingValue: "",
      },
      // Warnings
      {
        id: 5,
        settingId: 5,
        isDisabled: true,
        settingKey: "lowQuantityWarning",
        settingValue: "",
      },
      {
        id: 6,
        settingId: 6,
        isDisabled: true,
        settingKey: "exceedMaxQuantityWarning",
        settingValue: "",
      },
      {
        id: 7,
        settingId: 7,
        isDisabled: true,
        settingKey: "lowQuantityOrderWarning",
        settingValue: "",
      },
      {
        id: 8,
        settingId: 8,
        isDisabled: true,
        settingKey: "exceedMaxOrderQuantityWarning",
        settingValue: "",
      },
      {
        id: 9,
        settingId: 9,
        isDisabled: true,
        settingKey: "unfulfilledPurchaseWarning",
        settingValue: "",
      },
      {
        id: 10,
        settingId: 10,
        isDisabled: true,
        settingKey: "sameSupplierWarning",
        settingValue: "",
      },
      {
        id: 11,
        settingId: 11,
        isDisabled: true,
        settingKey: "unfulfilledOrderWarning",
        settingValue: "",
      },
      {
        id: 12,
        settingId: 12,
        isDisabled: true,
        settingKey: "sameSupplierOrderWarning",
        settingValue: "",
      },
      {
        id: 13,
        settingId: 13,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
      {
        id: 14,
        settingId:14,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
      {
        id: 15,
        settingId: 15,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
    ],
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={(values) => console.log("values" , values)}>
        <Form>

          
          <div className="bg-white rounded-lg p-5">
            <div className="my-5">
              <Orders />
            </div>
          </div>
          <div className="bg-white rounded-lg !mt-5 p-5">
            <Warnings />
          </div>
          <div className="bg-white rounded-lg !mt-5 p-5">
            <CloseOrder />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
