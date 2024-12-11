import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/Receipts/Add/Main";
import { useSearchParams } from "react-router-dom";

type AddReceipt_TP = {
  title: string;
};
export default function AddReceipt({ title }: AddReceipt_TP) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "cash-receipts";
  const VoucherType =
    type === "cash-receipts" ? 0 : type === "cash-payments" ? 1 : 2;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main VoucherType={VoucherType} />
      </div>
    </>
  );
}
