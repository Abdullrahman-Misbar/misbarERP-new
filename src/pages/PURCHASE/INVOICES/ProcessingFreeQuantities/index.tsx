import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/INVOICES/ProcessingFreeQuantities/Main";

type ProcessingFreeQuantities_TP = {
  title: string;
};

function ProcessingFreeQuantities({ title }: ProcessingFreeQuantities_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  );
}

export default ProcessingFreeQuantities;
