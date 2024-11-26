import { Helmet } from "react-helmet-async"
import Main from "../../../../components/templates/PURCHASE/PurchaseOrder/Add/Main"

type AddPurchaseOrder_TP = {
  title: string
}
export default function AddPurchaseOrder({ title }: AddPurchaseOrder_TP) {
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
