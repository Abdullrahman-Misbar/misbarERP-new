import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/Receipts/Add/Main";

type EditReceipt_TP = {
  title: string;
};
export default function EditReceipt({ title }: EditReceipt_TP) {
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
