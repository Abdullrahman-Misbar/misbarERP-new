import { Form, Formik } from "formik";
import MainHeadLayout from "./MainHeadLayout";

function Main() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <MainHeadLayout />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
