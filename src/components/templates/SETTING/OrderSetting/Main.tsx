import { Form, Formik } from "formik";
import CloseOrder from "./CloseOrder";
import Orders from "./Orders";
import Warnings from "./Warnings";

function Main() {
  const initialValues = {
    settings:[
      {
        id: 1,
        settingId: 1,
        isDisabled: true,
        settingKey: "",
        settingValue: "0",
      },
      {
        id: 2,
        settingId: 2,
        isDisabled: true,
        settingKey: "",
        settingValue: "5",
      },
      {
        id: 3,
        settingId: 3,
        isDisabled: true,
        settingKey: "",
        settingValue: "",
      },
      {
        id: 4,
        settingId: 4,
        isDisabled: true,
        settingKey: "",
        settingValue: "",
      },
    ]
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <div className="bg-white rounded-lg  p-5">
            <div className="my-5">
              <Orders />
            </div>
          </div>
          <div className="bg-white rounded-lg  !mt-5 p-5">
            <Warnings />
          </div>
          <div className="bg-white rounded-lg  !mt-5 p-5">
            <CloseOrder />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
