import { Form, Formik } from "formik"
import MainData from "./MainData"

function Main() {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={()=>{}}
      >
        <Form>
          <MainData/>

        </Form>
      </Formik>
    </div>
  )
}

export default Main