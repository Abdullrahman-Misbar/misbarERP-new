import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/Receipts/Add/Main";

type AddReceipt_TP = {
  title: string;
};
export default function AddReceipt({ title }: AddReceipt_TP) {
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
