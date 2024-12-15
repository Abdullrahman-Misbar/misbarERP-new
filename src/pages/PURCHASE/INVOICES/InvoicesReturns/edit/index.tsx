import { Helmet } from "react-helmet-async";
import Main from "../../../../../components/templates/PURCHASE/INVOICES/InvoicesReturns/Add/Main";

type EditInvoiceReturn_TP = {
  title: string;
};
export default function EditInvoiceReturn({ title }: EditInvoiceReturn_TP) {
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
