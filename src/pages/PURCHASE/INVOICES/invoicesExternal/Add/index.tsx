import { Helmet } from "react-helmet-async"
import Main from "../../../../../components/templates/PURCHASE/INVOICES/InvoicesLocal/Add/Main"

type AddInvoiceExternal_TP = {
  title: string
}
export default function AddInvoiceExternal({ title }: AddInvoiceExternal_TP) {
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
