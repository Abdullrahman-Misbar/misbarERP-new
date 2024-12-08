import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchasQutations/Add/Main";

type EditPurchasQutations_TP = {
  title: string;
};
export default function EditPurchasQutations({
  title,
}: EditPurchasQutations_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main editable={true} />
      </div>
    </>
  );
}
