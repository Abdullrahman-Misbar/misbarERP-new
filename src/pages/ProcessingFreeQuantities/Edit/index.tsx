import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/PURCHASE/INVOICES/ProcessingFreeQuantities/Add/Main";

type EditProcessingFreeQuantities_TP = {
  title: string;
};
export default function EditProcessingFreeQuantities({
  title,
}: EditProcessingFreeQuantities_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main editable />
      </div>
    </>
  );
}
