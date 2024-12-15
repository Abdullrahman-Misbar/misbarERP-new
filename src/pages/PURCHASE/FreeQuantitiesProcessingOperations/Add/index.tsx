import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/FreeQuantitiesProcessingOperations/Add/Main";
type AddPurchasFreeQuantities_TP = {
  title: string;
};
export default function AddPurchasFreeQuantities({ title }: AddPurchasFreeQuantities_TP) {
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
