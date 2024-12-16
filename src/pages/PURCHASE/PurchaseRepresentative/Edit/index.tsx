import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchaseRepresentative/Add/Main";

type EditPurchaseRepresentative_TP = {
  title: string;
};
export default function EditPurchaseRepresentative({
  title,
}: EditPurchaseRepresentative_TP) {
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
