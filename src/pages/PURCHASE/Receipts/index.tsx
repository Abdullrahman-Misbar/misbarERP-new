import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/PURCHASE/Receipts/Main";
import { useSearchParams } from "react-router-dom";
import { t } from "i18next";

type Receipts_TP = {
  title: string;
};
export default function Receipts({ title }: Receipts_TP) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "cash-receipts";
  const translatedType =
    type === "cash-receipts"
      ? t("Cash Receipts")
      : type === "cash-payments"
      ? t("Cash Payments")
      : type === "transfer-receipts"
      ? t("Transfer Receipts")
      : t("Receipts");
  return (
    <>
      <Helmet>
        <title>{`${title} - ${translatedType}`}</title>
      </Helmet>
      <div>
        <Main type={type} />
      </div>
    </>
  );
}
