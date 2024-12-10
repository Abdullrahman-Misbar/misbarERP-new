import { Form, Formik } from "formik";
import Toolbar from "../../molecules/toolbar/Toolbar";
import Summaries from "./Summaries";
import Other from "./Other";
import InformationOrder from "./InformationOrder";
import { Grid } from "@mui/material";

function Main() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        {/* Toolbar */}
        <div className="bg-white p-0 rounded-md">
          <Toolbar />
        </div>

        {/* Grid Layout for Components */}
        <Grid container spacing={2} className="mt-4">
          {/* Summaries */}
          <Grid item xs={12} md={6}>
            <Summaries />
          </Grid>

          {/* Other */}
          <Grid item xs={12} md={6}>
            <Other />
          </Grid>

          {/* Information Order */}
          <Grid item xs={12}>
            <InformationOrder />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default Main;
