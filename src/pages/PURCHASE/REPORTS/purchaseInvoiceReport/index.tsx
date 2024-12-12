import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/REPORTS/purchaseInvoiceReport/Main";
 
type PurchaseInvoiceReport_TP = {
  title: string;
};

function PurchaseInvoiceReport({ title }: PurchaseInvoiceReport_TP) {
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

export default PurchaseInvoiceReport;
