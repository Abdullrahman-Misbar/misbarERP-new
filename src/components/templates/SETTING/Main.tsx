import { Form, Formik } from "formik";
import MainHeadLayout from "./MainHeadLayout";

function Main() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={(values) => console.log("values" , values)}>
        <Form>
          <MainHeadLayout />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
