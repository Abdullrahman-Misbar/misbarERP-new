import { Form, Formik } from "formik";
import CloseOrder from "./CloseOrder";
import Orders from "./Orders";
import Warnings from "./Warnings";

function Main() {
  return (
    <div>
      <Formik initialValues={{
        settings:[
          { id: 0, settingId: 1, isDisabled: false, settingValue: '' },
          { id: 1, settingId: 2, isDisabled: false, settingValue: '' },
          { id: 2, settingId: 3, isDisabled: false, settingValue: '' },
          { id: 3, settingId: 4, isDisabled: false, settingValue: '' },
        ]
      }} onSubmit={() => {}}>
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
