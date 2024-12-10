import { Form, Formik } from "formik";
import CloseOrder from "./CloseOrder";
import Orders from "./Orders";
import Warnings from "./Warnings";

function Main() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
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
