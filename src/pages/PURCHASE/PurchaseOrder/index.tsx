import { Helmet } from "react-helmet-async"
import Main from "../../../components/templates/PURCHASE/PurchaseOrder/Main"

type PurchaseOrder_TP = {
  title: string
}
export default function PurchaseOrder({ title }: PurchaseOrder_TP) {
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