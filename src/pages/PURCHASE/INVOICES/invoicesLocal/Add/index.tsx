import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/INVOICES/InvoicesLocal/Add/Main"

type AddInvoiceLocal_TP = {
  title: string
}
export default function AddInvoiceLocal({ title }: AddInvoiceLocal_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  )
}
