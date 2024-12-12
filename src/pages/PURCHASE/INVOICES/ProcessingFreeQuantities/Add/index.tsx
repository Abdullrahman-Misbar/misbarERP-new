import { Helmet } from "react-helmet-async";
import Main from "../../../../../components/templates/PURCHASE/INVOICES/ProcessingFreeQuantities/Add/Main";

type AddProcessingFreeQuantities_TP = {
  title: string;
};
export default function AddProcessingFreeQuantities({
  title,
}: AddProcessingFreeQuantities_TP) {
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
