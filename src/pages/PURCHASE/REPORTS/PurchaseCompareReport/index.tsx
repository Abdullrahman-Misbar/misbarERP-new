import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/REPORTS/PurchaseCompareReport/main";
  
type PurchaseInvoiceReport_TP = {
  title: string;
};

function PurchaseCompareReport({ title }: PurchaseInvoiceReport_TP) {
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

export default PurchaseCompareReport;
