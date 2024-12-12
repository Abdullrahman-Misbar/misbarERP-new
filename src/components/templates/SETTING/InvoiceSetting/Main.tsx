import { Form, Formik } from "formik";
import MainData from "./MainData";

function Main() {
  const initialValues = {
    settings: [
      {
        id: 16,
        settingId: 16,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
      {
        id: 17,
        settingId: 17,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
      {
        id: 18,
        settingId: 18,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
      {
        id: 19,
        settingId: 19,
        isDisabled: true,
        settingKey: "exceedAllowedValueWarning",
        settingValue: "",
      },
    ],
  };
  return (
    <Formik onSubmit={() => {}} initialValues={initialValues}>
      <Form>
        <MainData />
      </Form>
    </Formik>
  );
}
export default Main;
